# Módulo 04 — Armazenamento: objetos, blocos e arquivos

`CLF-C02 D3` · ⏱ ~4h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

Três modelos de armazenamento que resolvem problemas diferentes. Confundir os três é o erro mais comum de quem está começando.

## O que você vai saber fazer no fim

- [ ] Distinguir armazenamento de objeto, bloco e arquivo
- [ ] Escolher a classe do S3 certa a partir do padrão de acesso
- [ ] Explicar por que EBS é preso a uma AZ e o que isso implica
- [ ] Configurar ciclo de vida e versionamento

## Roteiro da aula

1. Objeto vs bloco vs arquivo: a diferença conceitual
2. S3: buckets, chaves, durabilidade de 11 noves, consistência
3. As classes de armazenamento do S3 e a lógica de custo (armazenar barato = recuperar caro)
4. Políticas de ciclo de vida e versionamento
5. S3 como site estático
6. EBS: tipos de volume, snapshots, limite de AZ
7. Instance Store: efêmero e rapidíssimo
8. EFS e FSx: sistema de arquivos compartilhado
9. Storage Gateway, AWS Backup, Snow Family

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. Por que S3 não é um sistema de arquivos, mesmo mostrando 'pastas'?
2. Um log que você quase nunca lê mas precisa guardar 7 anos: qual classe?
3. Duas EC2 em AZs diferentes precisam do mesmo diretório. EBS resolve?

## Laboratório

Crie um bucket, hospede um HTML estático, ative versionamento, sobrescreva o arquivo e recupere a versão anterior. Depois crie uma regra de ciclo de vida movendo para Glacier após 30 dias.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 04`
