# Módulo 09 — Segurança em profundidade

`CLF-C02 D2 · AIF-C01 D5` · ⏱ ~4h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

Segurança na nuvem não é um produto, é um conjunto de camadas. Este módulo organiza o zoológico de serviços por função.

## O que você vai saber fazer no fim

- [ ] Explicar o modelo de responsabilidade compartilhada e como ele muda por serviço
- [ ] Dizer qual serviço de segurança resolve qual problema, de memória
- [ ] Explicar criptografia em repouso e em trânsito e o papel do KMS
- [ ] Descrever o que é defesa em profundidade

## Roteiro da aula

1. Modelo de responsabilidade compartilhada, serviço a serviço
2. Detecção: GuardDuty, Inspector, Macie, Detective, Security Hub
3. Proteção de borda: Shield (DDoS) e WAF (camada 7), Firewall Manager
4. Criptografia: KMS, CloudHSM, ACM
5. Segredos: Secrets Manager vs Parameter Store
6. Conformidade: Artifact, Audit Manager, programas e certificações
7. LGPD e residência de dados

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. Em quais serviços a responsabilidade do cliente é maior? Por quê?
2. Shield e WAF protegem contra a mesma coisa?
3. O que é sempre responsabilidade sua, em qualquer serviço da AWS?

## Laboratório

Ative o GuardDuty (free trial de 30 dias), gere um achado de exemplo, e configure o Security Hub para agregar. Depois crie uma chave no KMS e criptografe um objeto no S3 com ela.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 09`
