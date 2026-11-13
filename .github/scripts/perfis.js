// Progresso da turma + perfis públicos + presença em eventos.
//
// Roda a cada Issue (menos as do Simulado do Mês) e faz quatro coisas:
//   1. recalcula o progresso de todo mundo a partir das Issues de checkpoint;
//   2. valida a Issue de presença que disparou a execução (código do evento);
//   3. escreve PROGRESSO.md, membros/perfis/<login>.json e membros/index.json;
//   4. responde na Issue com a barra de progresso, o link do perfil e o do certificado.
//
// Os arquivos em membros/ são lidos pelo site (awsbuildersunifal.vercel.app/u/<login>).

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { TRILHAS } = require('./lib/trilhas');
const CFG = require('./lib/config');

const dia = (d) => new Date(d).toISOString().slice(0, 10);
const hashCodigo = (codigo) =>
  crypto.createHash('sha256').update(CFG.SAL_CODIGO + String(codigo).toUpperCase().replace(/\s+/g, '')).digest('hex');

// Extrai o valor de uma seção do corpo de um issue form (### Título\n\nvalor)
function parseSection(body, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('###\\s*' + escaped + '\\s*\\n+', 'i');
  const parts = body.split(re);
  if (parts.length < 2) return '';
  return parts[1].split(/\n###\s/)[0].trim();
}

const ehSimulado = (i) => (i.title || '').startsWith('[Simulado do Mês]');
const temLabel = (i, nome) => (i.labels || []).some(l => (l.name || l) === nome);
const ehPresenca = (i) => /^\[presen[cç]a\]/i.test(i.title || '') || temLabel(i, CFG.LABEL_PRESENCA);
const ehCheckpoint = (i) => !ehPresenca(i) && !ehSimulado(i) &&
  (temLabel(i, 'checkpoint') || (i.title || '').toLowerCase().includes('[checkpoint]'));

function lerJSON(arquivo, padrao) {
  try { return JSON.parse(fs.readFileSync(arquivo, 'utf8')); } catch { return padrao; }
}

// ---------- 1. checkpoints -> aluno -> trilha -> Map(módulo -> data) ----------
function lerCheckpoints(issues, core) {
  const alunos = new Map();
  for (const issue of issues) {
    if (issue.pull_request || !ehCheckpoint(issue)) continue;
    const autor = issue.user.login;
    const corpo = (issue.body || '').replace(/\r\n/g, '\n');

    const trilhaText = parseSection(corpo, 'Qual trilha\\?');
    const textoTrilha = trilhaText || corpo;
    const trilha = TRILHAS.find(t => textoTrilha.toLowerCase().includes(t.chave.toLowerCase()));
    if (!trilha) { core.warning(`Trilha não encontrada — pulando issue #${issue.number}`); continue; }

    let modulo = parseSection(corpo, 'Módulo / Nível concluído');
    if (!modulo) modulo = parseSection(corpo, 'Módulo \\/ Nível concluído');
    if (!modulo) modulo = parseSection(corpo, 'Módulo');
    if (!modulo) {
      const fm = corpo.match(/m[oó]dulo\s*(?:\/\s*)?n[ií]vel\s*conclu[ií]do\s*\n+(.*?)(?:\n###|\n*$)/is);
      if (fm) modulo = fm[1].trim();
    }
    const moduloLimpo = (modulo || '').split('\n')[0].trim();
    if (!moduloLimpo || moduloLimpo === '_No response_') {
      core.warning(`Módulo vazio — pulando issue #${issue.number}`); continue;
    }

    if (!alunos.has(autor)) alunos.set(autor, { avatar: issue.user.avatar_url, trilhas: new Map() });
    const porTrilha = alunos.get(autor).trilhas;
    if (!porTrilha.has(trilha.chave)) porTrilha.set(trilha.chave, new Map());
    // Usa o número do módulo quando existir (evita duplicar por grafia diferente)
    const num = moduloLimpo.match(/m[oó]dulo\s*(\d{1,2})/i);
    const chave = num ? 'm' + parseInt(num[1], 10) : moduloLimpo.toLowerCase();
    const feitos = porTrilha.get(trilha.chave);
    const data = dia(issue.created_at);
    if (!feitos.has(chave) || data < feitos.get(chave)) feitos.set(chave, data);
    core.info(`#${issue.number} @${autor}: ${trilha.rotulo} · ${moduloLimpo}`);
  }
  return alunos;
}

const feitosDe = (aluno, t) => (aluno && aluno.trilhas.get(t.chave)) || new Map();
const somaDe = (aluno) => [...aluno.trilhas.values()].reduce((s, m) => s + m.size, 0);
// "Concluída" de verdade = todos os módulos do catálogo, cada um com seu checkpoint.
const concluiu = (aluno, t) => t.modulos.every(m => feitosDe(aluno, t).has('m' + m.n));

function medalhasDe(aluno) {
  const ganhas = [];
  for (const t of TRILHAS) {
    const feitos = feitosDe(aluno, t);
    for (const m of t.medalhas) {
      if (m.mods.every(n => feitos.has('m' + n))) ganhas.push({ emoji: m.emoji, nome: m.nome, trilha: t.rotulo });
    }
    if (feitos.size >= t.total) ganhas.push({ emoji: '🏆', nome: 'Trilha completa', trilha: t.rotulo });
  }
  return ganhas;
}

// ---------- 2. presença em evento ----------
async function validarPresenca({ github, context, core, eventos, presencas, agora }) {
  const issue = context.payload.issue;
  const acao = context.payload.action;
  if (!issue || !ehPresenca(issue) || !['opened', 'reopened'].includes(acao)) return;
  const { owner, repo } = context.repo;
  const login = issue.user.login;
  const corpo = (issue.body || '').replace(/\r\n/g, '\n');
  const codigo = parseSection(corpo, 'Código do evento').split('\n')[0].trim();

  let texto;
  const evento = codigo && codigo !== '_No response_'
    ? eventos.find(e => e.codigoHash && e.codigoHash === hashCodigo(codigo))
    : null;
  if (!evento) {
    texto = '⚠️ Não reconheci esse código. Confira se digitou exatamente o código anunciado no encontro e abra uma nova Issue de presença.';
  } else if (evento.prazoPresenca && agora > new Date(evento.prazoPresenca)) {
    texto = `⏰ O prazo para registrar presença em **${evento.titulo}** já encerrou. Fale com a organização se você esteve no encontro.`;
  } else {
    const chave = login.toLowerCase();
    if (!presencas.has(chave)) presencas.set(chave, { login, avatar: issue.user.avatar_url, eventos: [] });
    const p = presencas.get(chave);
    const jaTinha = p.eventos.some(e => e.id === evento.id);
    if (!jaTinha) p.eventos.push({ id: evento.id, titulo: evento.titulo, data: evento.data, dataTexto: evento.dataTexto || evento.data, tipo: evento.tipo || 'Encontro' });
    core.info(`Presença de @${login} em ${evento.id}${jaTinha ? ' (já registrada)' : ''}`);
    texto = [
      `### ✅ Presença confirmada, @${login}!`,
      '',
      `**${evento.titulo}** · ${evento.dataTexto || evento.data}`,
      '',
      `- 🌐 Seu perfil público: ${CFG.SITE}/u/${login}`,
      `- 🎓 Seu certificado do AWS Student Builder Group: ${CFG.SITE}/certificado?u=${login}`,
      '',
      '<sub>O perfil pode levar alguns minutos para refletir a novidade.</sub>',
    ].join('\n');
  }

  await github.rest.issues.createComment({ owner, repo, issue_number: issue.number, body: texto });
  // Tira o código do corpo e fecha a Issue, para ele não ficar exposto no feed.
  await github.rest.issues.update({
    owner, repo, issue_number: issue.number, state: 'closed',
    body: evento ? `Presença registrada em **${evento.titulo}**. _(código removido pelo robô)_` : '_(código removido pelo robô)_',
  });
}

// ---------- 3. arquivos ----------
const barra = (feitos, total) => {
  const blocos = 24;
  const cheios = total ? Math.min(blocos, Math.round((feitos / total) * blocos)) : 0;
  return '█'.repeat(cheios) + '░'.repeat(blocos - cheios);
};
const cabecalho = '| Trilha | Progresso | Módulos | % |\n|:--|:--|:--:|:--:|';
const linhasAluno = (aluno) => TRILHAS.map(t => {
  const feitos = feitosDe(aluno, t).size;
  const pct = t.total ? Math.round((feitos / t.total) * 100) : 0;
  return `| ${t.rotulo} | \`${barra(feitos, t.total)}\` | ${feitos}/${t.total} | ${pct}% |`;
}).join('\n');
const vitrine = (ganhas) => ganhas.length ? ganhas.map(m => m.emoji).join(' ') : '—';
const listaMedalhas = (ganhas) => ganhas.length
  ? ganhas.map(m => `- ${m.emoji} **${m.nome}** · ${m.trilha}`).join('\n')
  : '_Nenhuma medalha ainda — conclua todos os módulos de um domínio para ganhar a primeira!_';

function montarProgressoMd(ordenados, agora) {
  let md = `<div align="center">\n\n<img src="./assets/progresso.png" alt="Progresso das trilhas" width="100%" />\n\n# 📊 Progresso da turma\n\n<sub>Atualizado automaticamente a cada checkpoint registrado · ${dia(agora)}</sub>\n\n</div>\n\n---\n\n`;
  if (!ordenados.length) {
    md += 'Ninguém registrou checkpoint ainda. Seja a primeira pessoa: [abrir checkpoint](../../issues/new?template=checkpoint-de-modulo.yml) 🚀\n';
  } else {
    md += '## 🏆 Ranking\n\n| # | Aluno(a) | Módulos concluídos | Medalhas | Perfil |\n|:--:|:--|:--:|:--|:--:|\n';
    ordenados.forEach(([login, aluno], i) => {
      md += `| ${i + 1} | [@${login}](https://github.com/${login}) | ${somaDe(aluno)} | ${vitrine(medalhasDe(aluno))} | [🌐](${CFG.SITE}/u/${login}) |\n`;
    });
    md += '\n> [!TIP]\n> **Como ganhar medalhas:** conclua todos os módulos de um domínio. Use o número no checkpoint (ex.: `Domínio 1 · Módulo 03`) para o robô reconhecer.\n';
    md += `>\n> **Perfil público:** cada pessoa do ranking tem uma página em \`${CFG.SITE.replace('https://', '')}/u/seu-usuario\` — com trilhas, medalhas, eventos e certificados.\n`;
    md += '\n---\n\n## 📈 Detalhe por pessoa\n\n';
    for (const [login, aluno] of ordenados) {
      md += `### [@${login}](https://github.com/${login})\n\n${cabecalho}\n${linhasAluno(aluno)}\n\n**Medalhas:**\n\n${listaMedalhas(medalhasDe(aluno))}\n\n🌐 [Perfil público](${CFG.SITE}/u/${login})\n\n`;
    }
  }
  md += '\n---\n\n<div align="center">\n\n🏠 [Voltar ao início](./README.md)\n\n</div>\n';
  return md;
}

function montarPerfil({ login, aluno, presenca, nome, anterior, agora }) {
  const trilhas = TRILHAS.map(t => {
    const feitos = feitosDe(aluno, t);
    const modulos = t.modulos.filter(m => feitos.has('m' + m.n))
      .map(m => ({ n: m.n, titulo: m.titulo, caminho: m.caminho, em: feitos.get('m' + m.n) }));
    const concluida = concluiu(aluno, t);
    return {
      slug: t.slug, rotulo: t.rotulo, codigo: t.codigo, cor: t.cor, pasta: t.pasta,
      feitos: Math.min(feitos.size, t.total), total: t.total,
      pct: Math.min(100, Math.round((feitos.size / t.total) * 100)),
      concluida,
      concluidaEm: concluida ? modulos.map(m => m.em).sort().pop() : null,
      modulos,
    };
  });
  const datas = trilhas.flatMap(t => t.modulos.map(m => m.em)).concat((presenca ? presenca.eventos : []).map(e => e.data)).sort();
  const perfil = {
    login,
    nome: nome || null,
    avatar: (aluno && aluno.avatar) || (presenca && presenca.avatar) || `https://github.com/${login}.png`,
    desde: datas[0] || dia(agora),
    totalModulos: aluno ? somaDe(aluno) : 0,
    trilhas,
    medalhas: aluno ? medalhasDe(aluno) : [],
    eventos: presenca ? [...presenca.eventos].sort((a, b) => a.data.localeCompare(b.data)) : [],
  };
  // Só muda "atualizadoEm" quando o conteúdo muda — evita commits vazios a cada execução.
  const semData = (p) => JSON.stringify({ ...p, atualizadoEm: undefined });
  perfil.atualizadoEm = anterior && semData(anterior) === semData(perfil) ? anterior.atualizadoEm : dia(agora);
  return perfil;
}

// ---------- principal ----------
module.exports = async function atualizar({ github, context, core, raiz = process.cwd(), agora = new Date() }) {
  const arq = (...p) => path.join(raiz, ...p);
  const { owner, repo } = context.repo;
  const eventos = lerJSON(arq(CFG.ARQ_EVENTOS), []);

  // Estado que só existe no repositório: nomes já consultados e presenças já validadas.
  const anteriores = new Map();
  const pastaPerfis = arq(CFG.PASTA_PERFIS);
  fs.mkdirSync(pastaPerfis, { recursive: true });
  for (const f of fs.readdirSync(pastaPerfis).filter(f => f.endsWith('.json'))) {
    const p = lerJSON(path.join(pastaPerfis, f), null);
    if (p && p.login) anteriores.set(p.login.toLowerCase(), p);
  }
  const presencas = new Map();
  for (const [chave, p] of anteriores) {
    if (p.eventos && p.eventos.length) presencas.set(chave, { login: p.login, avatar: p.avatar, eventos: [...p.eventos] });
  }

  const issues = await github.paginate(github.rest.issues.listForRepo, { owner, repo, state: 'all', per_page: 100 });
  core.info(`Issues lidas: ${issues.length}`);
  const alunos = lerCheckpoints(issues, core);

  await validarPresenca({ github, context, core, eventos, presencas, agora });

  // Quem tem perfil: qualquer pessoa com checkpoint ou presença.
  const logins = new Map();
  for (const login of alunos.keys()) logins.set(login.toLowerCase(), login);
  for (const [chave, p] of presencas) if (!logins.has(chave)) logins.set(chave, p.login);

  const atualizarNomes = context.eventName === 'workflow_dispatch';
  const perfis = [];
  for (const [chave, login] of logins) {
    const anterior = anteriores.get(chave);
    let nome = anterior ? anterior.nome : undefined;
    if (nome === undefined || atualizarNomes) {
      try { nome = (await github.rest.users.getByUsername({ username: login })).data.name || null; }
      catch (e) { core.warning(`Não consegui ler o nome de @${login}: ${e.message}`); nome = nome || null; }
    }
    perfis.push(montarPerfil({ login, aluno: alunos.get(login), presenca: presencas.get(chave), nome, anterior, agora }));
  }

  // membros/perfis/*.json (remove quem não tem mais nenhum registro)
  const esperados = new Set(perfis.map(p => p.login.toLowerCase() + '.json'));
  for (const f of fs.readdirSync(pastaPerfis).filter(f => f.endsWith('.json'))) {
    if (!esperados.has(f)) fs.unlinkSync(path.join(pastaPerfis, f));
  }
  for (const p of perfis) {
    fs.writeFileSync(path.join(pastaPerfis, p.login.toLowerCase() + '.json'), JSON.stringify(p, null, 2) + '\n');
  }

  // membros/index.json — a lista que o site usa para busca e ranking
  perfis.sort((a, b) => b.totalModulos - a.totalModulos || b.eventos.length - a.eventos.length || a.login.localeCompare(b.login));
  const indice = perfis.map(p => ({
    login: p.login, nome: p.nome, avatar: p.avatar, totalModulos: p.totalModulos,
    medalhas: p.medalhas.map(m => m.emoji), eventos: p.eventos.length,
    trilhasConcluidas: p.trilhas.filter(t => t.concluida).map(t => t.slug),
  }));
  fs.writeFileSync(arq(CFG.ARQ_INDICE), JSON.stringify(indice, null, 2) + '\n');

  // PROGRESSO.md
  const ordenados = [...alunos.entries()].sort((a, b) => somaDe(b[1]) - somaDe(a[1]));
  fs.writeFileSync(arq('PROGRESSO.md'), montarProgressoMd(ordenados, agora));

  // Comentário na Issue de checkpoint que disparou a execução
  const issue = context.payload.issue;
  if (issue && ehCheckpoint(issue) && ['opened', 'edited', 'reopened'].includes(context.payload.action)) {
    const login = issue.user.login;
    const aluno = alunos.get(login);
    if (aluno) {
      const completas = TRILHAS.filter(t => concluiu(aluno, t));
      const corpo = [
        `### 📊 Progresso de @${login}`,
        '',
        cabecalho,
        linhasAluno(aluno),
        '',
        '#### 🏅 Medalhas',
        '',
        listaMedalhas(medalhasDe(aluno)),
        '',
        `**${somaDe(aluno)} módulos concluídos.** Veja a turma inteira em [PROGRESSO.md](../blob/main/PROGRESSO.md). Bora construir! 🚀`,
        '',
        `🌐 **Seu perfil público:** ${CFG.SITE}/u/${login} <sub>(atualiza em alguns minutos)</sub>`,
        ...completas.map(t => `🎓 **Trilha completa!** Emita seu certificado de ${t.rotulo}: ${CFG.SITE}/certificado?u=${login}&trilha=${t.slug}`),
      ].join('\n');

      const comentarios = await github.paginate(github.rest.issues.listComments, { owner, repo, issue_number: issue.number, per_page: 100 });
      const meu = comentarios.find(c => c.user.type === 'Bot' && c.body.includes('### 📊 Progresso de'));
      if (meu) await github.rest.issues.updateComment({ owner, repo, comment_id: meu.id, body: corpo });
      else await github.rest.issues.createComment({ owner, repo, issue_number: issue.number, body: corpo });
    }
  }

  return { perfis: perfis.length, alunos: alunos.size };
};

module.exports.hashCodigo = hashCodigo;
