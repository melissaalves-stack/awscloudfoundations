# Módulo 06 — Bancos de dados gerenciados

`CLF-C02 D3` · ⏱ ~4h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

A AWS tem mais de dez bancos porque não existe banco universal. O aprendizado aqui é escolher pelo formato do dado e pelo padrão de acesso.

## O que você vai saber fazer no fim

- [ ] Escolher entre relacional, chave-valor, documento, grafo e data warehouse
- [ ] Explicar a diferença entre Multi-AZ e Read Replica
- [ ] Explicar por que DynamoDB escala diferente de RDS
- [ ] Identificar quando usar cache

## Roteiro da aula

1. Relacional vs NoSQL: o trade-off real
2. RDS: engines, backups, Multi-AZ (disponibilidade) vs Read Replicas (leitura)
3. Aurora: por que é diferente de um MySQL comum
4. DynamoDB: chave de partição, escala, DAX, Global Tables
5. ElastiCache e MemoryDB
6. Bancos especializados: DocumentDB, Neptune, Timestream, Keyspaces, QLDB
7. OLTP vs OLAP e a entrada do Redshift
8. DMS e migração de bancos

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. Multi-AZ melhora performance de leitura? Por quê?
2. Por que a escolha da chave de partição no DynamoDB é decisão de arquitetura?
3. Quando um cache resolve e quando ele só esconde um problema?

## Laboratório

Suba um RDS PostgreSQL na free tier, conecte pelo psql, crie uma tabela. Depois habilite Multi-AZ e observe o que muda no endpoint (spoiler: nada — e entender por quê é o ponto).

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 06`
