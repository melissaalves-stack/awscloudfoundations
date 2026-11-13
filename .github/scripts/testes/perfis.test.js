// Teste local das automações, sem tocar no GitHub:
//   node .github/scripts/testes/perfis.test.js
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const atualizar = require('../perfis');
const { TRILHAS } = require('../lib/trilhas');

const raiz = fs.mkdtempSync(path.join(os.tmpdir(), 'lacen-'));
fs.mkdirSync(path.join(raiz, '.github'), { recursive: true });
fs.writeFileSync(path.join(raiz, '.github/eventos.json'), JSON.stringify([
  { id: 'ev-aberto', titulo: 'Evento Aberto', data: '2026-10-28', dataTexto: '28 de outubro de 2026', tipo: 'Certificação', codigoHash: atualizar.hashCodigo('NUVEM42') },
  { id: 'ev-vencido', titulo: 'Evento Vencido', data: '2026-08-10', codigoHash: atualizar.hashCodigo('ANTIGO'), prazoPresenca: '2026-08-12T23:59:59-03:00' },
  { id: 'ev-sem-codigo', titulo: 'Sem código', data: '2026-09-01', codigoHash: null },
]));

let n = 0;
const user = (login) => ({ login, avatar_url: `https://avatars.example/${login}`, type: 'User' });
const checkpoint = (login, trilha, modulo, data = '2026-09-10T12:00:00Z', extra = {}) => ({
  number: ++n, title: '[Checkpoint] Trilha · Módulo/Nível: x', labels: [{ name: 'checkpoint' }], user: user(login), created_at: data,
  body: `### Qual trilha?\n\n${trilha}\n\n### Módulo / Nível concluído\n\n${modulo}\n\n### Checklist de conclusão\n\n- [X] Li\n\n### O que você aprendeu de mais importante?\n\nMuito.`,
  ...extra,
});
const presenca = (login, codigo) => ({
  number: ++n, title: '[Presença] ', labels: [{ name: 'presenca' }], user: user(login), created_at: '2026-10-28T22:00:00Z',
  body: `### Código do evento\n\n${codigo}`,
});
const CLOUD = '🎓 Certificação Cloud Practitioner (CLF-C02)';
const IA = '🤖 Certificação AI Practitioner (AIF-C01)';

const issues = [];
for (let m = 0; m <= 16; m++) issues.push(checkpoint('Ana-Dev', CLOUD, `Domínio X · Módulo ${String(m).padStart(2, '0')} — título`, `2026-09-${String(m + 1).padStart(2, '0')}T12:00:00Z`));
issues.push(checkpoint('Ana-Dev', CLOUD, 'Módulo 3 de novo', '2026-11-01T00:00:00Z'));            // duplicado: não conta 2x
issues.push(checkpoint('Ana-Dev', IA, 'Módulo 00', '2026-10-02T00:00:00Z'));
for (const m of [0, 1, 2, 3]) issues.push(checkpoint('beto', CLOUD, `Módulo 0${m}`));
issues.push(checkpoint('beto', CLOUD, 'terminei o de redes'));                                    // texto livre: conta, sem medalha
issues.push({ ...checkpoint('carla', CLOUD, 'Módulo 01'), title: '[Simulado do Mês] x' });        // simulado: ignorado
issues.push({ ...checkpoint('pr-bot', CLOUD, 'Módulo 01'), pull_request: {} });                   // PR: ignorado

function mock(payload, eventName = 'issues') {
  const chamadas = { comentarios: [], updates: [], editados: [], nomes: [] };
  const github = {
    paginate: async (fn, args) => fn === github.rest.issues.listComments ? [] : issues,
    rest: {
      issues: {
        listForRepo: 'listForRepo', listComments: 'listComments',
        createComment: async (a) => chamadas.comentarios.push(a),
        updateComment: async (a) => chamadas.editados.push(a),
        update: async (a) => chamadas.updates.push(a),
      },
      users: { getByUsername: async ({ username }) => { chamadas.nomes.push(username); return { data: { name: username === 'Ana-Dev' ? 'Ana Clara de Souza' : null } }; } },
    },
  };
  const core = { info() {}, warning() {} };
  const context = { repo: { owner: 'o', repo: 'r' }, eventName, payload };
  return { github, core, context, chamadas };
}
const ler = (f) => JSON.parse(fs.readFileSync(path.join(raiz, f), 'utf8'));

(async () => {
  // 1) checkpoint que fecha a trilha Cloud da Ana
  let m = mock({ action: 'opened', issue: issues[16] });
  await atualizar({ ...m, raiz, agora: new Date('2026-11-13T12:00:00Z') });
  let ana = ler('membros/perfis/ana-dev.json');
  assert.strictEqual(ana.login, 'Ana-Dev');
  assert.strictEqual(ana.nome, 'Ana Clara de Souza');
  assert.strictEqual(ana.totalModulos, 18);
  const cloud = ana.trilhas.find(t => t.slug === 'cloud');
  assert.deepStrictEqual([cloud.feitos, cloud.total, cloud.pct, cloud.concluida, cloud.concluidaEm], [17, 17, 100, true, '2026-09-17']);
  assert.strictEqual(cloud.modulos[3].em, '2026-09-04');
  assert.strictEqual(ana.trilhas.find(t => t.slug === 'ia').concluida, false);
  assert.strictEqual(ana.desde, '2026-09-01');
  assert.deepStrictEqual(ana.medalhas.map(x => x.emoji), ['☁️', '🔐', '🧰', '💰', '🏆']);
  assert.ok(m.chamadas.comentarios[0].body.includes('/certificado?u=Ana-Dev&trilha=cloud'));
  assert.ok(m.chamadas.comentarios[0].body.includes('/u/Ana-Dev'));

  const beto = ler('membros/perfis/beto.json');
  assert.strictEqual(beto.totalModulos, 5);
  assert.strictEqual(beto.trilhas[0].concluida, false);
  assert.deepStrictEqual(beto.medalhas.map(x => x.emoji), ['☁️']);
  assert.ok(!fs.existsSync(path.join(raiz, 'membros/perfis/carla.json')));
  assert.ok(!fs.existsSync(path.join(raiz, 'membros/perfis/pr-bot.json')));

  const indice = ler('membros/index.json');
  assert.deepStrictEqual(indice.map(x => x.login), ['Ana-Dev', 'beto']);
  assert.deepStrictEqual(indice[0].trilhasConcluidas, ['cloud']);
  const md = fs.readFileSync(path.join(raiz, 'PROGRESSO.md'), 'utf8');
  assert.ok(md.includes('| 1 | [@Ana-Dev](https://github.com/Ana-Dev) | 18 | ☁️ 🔐 🧰 💰 🏆 |'));
  assert.ok(md.includes('| Certificação Cloud Practitioner | `████████████████████████` | 17/17 | 100% |'));

  // 2) presença válida de quem nunca fez checkpoint -> ganha perfil
  const pOk = presenca('Dani', ' nuvem 42 ');
  m = mock({ action: 'opened', issue: pOk });
  await atualizar({ ...m, raiz, agora: new Date('2026-11-13T12:00:00Z') });
  const dani = ler('membros/perfis/dani.json');
  assert.deepStrictEqual(dani.eventos.map(e => e.id), ['ev-aberto']);
  assert.strictEqual(dani.eventos[0].dataTexto, '28 de outubro de 2026');
  assert.ok(m.chamadas.comentarios[0].body.includes('Presença confirmada'));
  assert.strictEqual(m.chamadas.updates[0].state, 'closed');
  assert.ok(!m.chamadas.updates[0].body.toLowerCase().includes('nuvem'));       // código some da Issue
  assert.deepStrictEqual(m.chamadas.nomes, ['Dani']);                           // nomes antigos vêm do cache

  // 3) a presença sobrevive às execuções seguintes (o estado está no repositório)
  m = mock({ action: 'closed', issue: pOk });
  await atualizar({ ...m, raiz, agora: new Date('2026-11-14T12:00:00Z') });
  assert.deepStrictEqual(ler('membros/perfis/dani.json').eventos.map(e => e.id), ['ev-aberto']);
  assert.strictEqual(ler('membros/perfis/dani.json').atualizadoEm, '2026-11-13');  // nada mudou: sem commit novo
  assert.strictEqual(m.chamadas.comentarios.length, 0);

  // 4) mesma pessoa, mesmo evento: não duplica
  m = mock({ action: 'opened', issue: presenca('dani', 'NUVEM42') });
  await atualizar({ ...m, raiz });
  assert.strictEqual(ler('membros/perfis/dani.json').eventos.length, 1);

  // 5) código errado, prazo vencido, evento sem código e tentativa de forjar pelo corpo
  for (const [cod, trecho] of [['ERRADO', 'Não reconheci'], ['ANTIGO', 'prazo'], ['', 'Não reconheci'], ['null', 'Não reconheci']]) {
    m = mock({ action: 'opened', issue: presenca('eva', cod) });
    await atualizar({ ...m, raiz, agora: new Date('2026-11-13T12:00:00Z') });
    assert.ok(m.chamadas.comentarios[0].body.includes(trecho), cod);
    assert.ok(!fs.existsSync(path.join(raiz, 'membros/perfis/eva.json')));
  }

  // 6) Ana também registra presença: perfil junta trilhas + evento
  m = mock({ action: 'opened', issue: presenca('Ana-Dev', 'NUVEM42') });
  await atualizar({ ...m, raiz });
  ana = ler('membros/perfis/ana-dev.json');
  assert.strictEqual(ana.eventos.length, 1);
  assert.strictEqual(ana.totalModulos, 18);

  // catálogo coerente com os arquivos do repositório
  const repo = path.resolve(__dirname, '../../..');
  for (const t of TRILHAS) for (const mod of t.modulos) assert.ok(fs.existsSync(path.join(repo, mod.caminho)), mod.caminho);

  fs.rmSync(raiz, { recursive: true, force: true });
  console.log('✔ todos os testes passaram');
})().catch(e => { console.error(e); process.exit(1); });
