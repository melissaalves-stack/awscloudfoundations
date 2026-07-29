# Módulo 08 — Observabilidade e automação

`CLF-C02 D2/D3` · ⏱ ~3h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

Se você não mede, você não opera. E se você clica no console para criar coisas, você não escala.

## O que você vai saber fazer no fim

- [ ] Explicar a diferença entre CloudWatch, CloudTrail e Config
- [ ] Criar um alarme que dispara uma ação
- [ ] Explicar o que é infraestrutura como código e por que importa
- [ ] Ler um template básico de CloudFormation

## Roteiro da aula

1. CloudWatch: métricas, logs, alarmes, dashboards
2. CloudTrail: auditoria de chamadas de API
3. AWS Config: histórico e conformidade de configuração
4. A tríade: como está × quem fez × como está configurado
5. AWS Health Dashboard e Trusted Advisor
6. Infraestrutura como código: CloudFormation e CDK
7. Systems Manager: Session Manager, Patch Manager, Parameter Store
8. Control Tower e Service Catalog

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. Alguém deletou um bucket. Qual serviço te diz quem foi?
2. Por que 'clicar no console' não é reproduzível?
3. O que um alarme deve fazer além de mandar e-mail?

## Laboratório

Crie um alarme no CloudWatch para CPU > 70% numa EC2, ligado a um tópico SNS que te manda e-mail. Force carga com `stress` e receba o alerta. Depois recrie a mesma EC2 via CloudFormation.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 08`
