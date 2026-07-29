# Módulo 03 — Computação: EC2, containers e serverless

`CLF-C02 D3` · ⏱ ~5h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

Onde seu código realmente roda. O eixo aqui é: quanto da máquina você quer gerenciar?

## O que você vai saber fazer no fim

- [ ] Escolher entre EC2, container e Lambda para um cenário dado
- [ ] Explicar os 5 modelos de compra de EC2 e quando cada um economiza
- [ ] Explicar o que é serverless de fato (e o que não é)
- [ ] Diferenciar ECS, EKS e Fargate

## Roteiro da aula

1. O espectro do gerenciamento: bare metal → VM → container → função
2. EC2: AMI, tipos de instância, famílias, user data
3. Modelos de compra: On-Demand, Reserved, Savings Plans, Spot, Dedicated
4. Quando Spot é genial e quando é suicídio
5. Containers: por que existem, ECS vs EKS, o papel do Fargate, ECR
6. AWS Lambda: modelo de evento, limite de 15 min, cold start
7. Elastic Beanstalk, Lightsail, Batch, App Runner

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. Por que Lambda tem limite de 15 minutos? O que isso diz sobre o modelo dele?
2. Um job de processamento de vídeo que roda 6h por noite e pode ser reiniciado: qual modelo de compra?
3. Fargate elimina servidores ou só esconde eles?

## Laboratório

Suba uma t3.micro com user data instalando um servidor web, acesse pelo IP público, depois refaça a mesma coisa com uma Lambda + Function URL. Compare o tempo até estar no ar e o custo.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 03`
