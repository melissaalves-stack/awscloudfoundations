# Módulo 11 — Dados e analytics

`CLF-C02 D3 · base para AIF` · ⏱ ~3h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

Toda IA começa com dados. Este módulo é a ponte entre a metade de infraestrutura e a metade de inteligência artificial do repositório.

## O que você vai saber fazer no fim

- [ ] Explicar a diferença entre data lake e data warehouse
- [ ] Descrever um pipeline de dados típico na AWS
- [ ] Escolher entre Athena, Redshift e EMR
- [ ] Explicar o que é ETL e onde o Glue entra

## Roteiro da aula

1. Dado estruturado, semiestruturado e não estruturado
2. Data lake (S3) vs data warehouse (Redshift)
3. ETL e o AWS Glue + Data Catalog
4. Athena: SQL direto no S3
5. EMR: Spark e Hadoop gerenciados
6. Kinesis: dados em tempo real
7. QuickSight e OpenSearch
8. Lake Formation e governança

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. Por que um data lake guarda dado cru em vez de já tratado?
2. Athena cobra por consulta. Como o formato do arquivo muda esse custo?
3. Batch vs streaming: qual problema cada um resolve?

## Laboratório

Suba um CSV no S3, catalogue com o Glue Crawler e consulte com Athena. Depois converta para Parquet e compare o volume de dados escaneado na mesma consulta.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 11`
