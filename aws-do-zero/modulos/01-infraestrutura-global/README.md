# Módulo 01 — A infraestrutura global da AWS

`CLF-C02 D1` · ⏱ ~3h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

A AWS é feita de concreto, fibra e energia. Entender o mapa físico explica quase todas as decisões de arquitetura que você vai tomar depois.

## O que você vai saber fazer no fim

- [ ] Explicar Região, Zona de Disponibilidade e Edge Location e como se relacionam
- [ ] Escolher uma região justificando com 4 critérios
- [ ] Explicar por que 'multi-AZ' é a base da alta disponibilidade
- [ ] Identificar quando usar Local Zones, Outposts ou Wavelength

## Roteiro da aula

1. Região: o que é e por que são isoladas entre si
2. Zona de Disponibilidade: data centers separados, energia e rede independentes
3. Os 4 critérios de escolha de região: latência, conformidade, disponibilidade do serviço, preço
4. Edge Locations e a rede global da AWS
5. Serviços globais vs regionais vs zonais
6. Local Zones, Wavelength e Outposts

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. Por que uma AZ não é um data center só?
2. Seu app roda em uma única AZ. Liste 3 coisas que podem derrubá-lo.
3. Quais serviços da AWS são globais? Por que IAM é um deles?

## Laboratório

No console, abra o seletor de regiões e compare o preço de uma t3.micro em us-east-1, sa-east-1 e eu-west-1. Anote a diferença percentual e pense no porquê.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 01`
