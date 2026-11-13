# 🤖 Automações da Liga — guia de quem mantém

Tudo aqui roda sozinho no GitHub Actions. Este arquivo é para a organização; alunos não precisam ler.

## O que cada peça faz

| Arquivo | Papel |
|:--|:--|
| `workflows/checkpoints.yml` | Dispara a cada Issue e chama `scripts/perfis.js` |
| `scripts/perfis.js` | Recalcula o progresso, valida presenças, escreve `PROGRESSO.md` e `membros/` e responde na Issue |
| `scripts/lib/trilhas.js` | **Catálogo das trilhas**: módulos, totais e medalhas. Criou um módulo? Acrescente aqui |
| `scripts/lib/config.js` | Endereço do site e caminhos dos arquivos |
| `eventos.json` | Lista de encontros e o hash do código de presença de cada um |
| `workflows/simulado-do-mes.yml` | Corrige o simulado, atualiza o ranking e grava `membros/simulados.json` |
| `scripts/testes/perfis.test.js` | Teste local, sem tocar no GitHub |

## Primeira vez

Depois de subir estes arquivos, abra **Actions → Atualizar progresso dos checkpoints → Run workflow**. Ele lê todas as Issues antigas e publica o perfil de todo mundo que já tem checkpoint. Rodar manualmente também atualiza os nomes vindos do GitHub.

## Liberar a presença de um encontro

1. Escolha um código para anunciar no dia (ex.: `NUVEM42`).
2. Gere o hash:

   ```bash
   node .github/scripts/gerar-codigo-evento.js NUVEM42
   ```

3. Cole o `codigoHash` no evento correspondente em `.github/eventos.json` e faça o commit.
4. No encontro, anuncie o código. Quem esteve lá abre a Issue **🎟️ Presença em Evento** ou digita o código direto em `awsbuildersunifal.vercel.app/certificado`.

Campos de cada evento:

| Campo | Para quê |
|:--|:--|
| `id` | Identificador único (não mude depois de usado) |
| `titulo`, `tipo` | Como o evento aparece no perfil |
| `data` | `AAAA-MM-DD`, usada só para ordenar |
| `dataTexto` | A data como aparece no perfil (ex.: `28 de outubro de 2026`) |
| `codigoHash` | Hash do código. `null` = presença ainda não liberada |
| `prazoPresenca` | Opcional. Data-limite para registrar presença por Issue (ex.: `2026-11-30T23:59:59-03:00`) |

> [!NOTE]
> O código é um controle leve, não um cadeado: o robô apaga o código da Issue, mas quem recebeu pode repassar. Use um código diferente por encontro e, se quiser, um `prazoPresenca` curto.

## Certificados

- **AWS Student Builder Group** — o site preenche o modelo oficial da AWS com a universidade e o nome. Seguindo as instruções do modelo, nada além desses dois textos é alterado.
- **Conclusão de trilha** — emitido pelo site só quando o perfil mostra todos os módulos do catálogo com checkpoint. O QR code aponta para o perfil público, que é a prova.

## Testar antes de mexer

```bash
node .github/scripts/testes/perfis.test.js
```
