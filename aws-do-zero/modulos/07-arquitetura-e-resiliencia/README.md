# Módulo 07 — Arquitetura, escala e resiliência

`CLF-C02 D1/D3` · ⏱ ~4h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

Aqui as peças se juntam. Você para de ver serviços isolados e começa a ver sistemas.

## O que você vai saber fazer no fim

- [ ] Explicar como load balancer + auto scaling produzem elasticidade
- [ ] Diferenciar alta disponibilidade de tolerância a falhas e de DR
- [ ] Calcular RTO e RPO para um cenário
- [ ] Aplicar os 6 pilares do Well-Architected a um desenho

## Roteiro da aula

1. Acoplamento forte vs fraco; por que filas salvam sistemas
2. SQS e SNS: os dois padrões de mensageria
3. Elastic Load Balancing: ALB, NLB, GWLB
4. Auto Scaling: políticas, health checks, escala horizontal
5. Alta disponibilidade, tolerância a falhas e disaster recovery
6. As 4 estratégias de DR e o custo de cada uma
7. RTO e RPO
8. Well-Architected Framework: os 6 pilares
9. AWS Cloud Adoption Framework e os 7 Rs de migração

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. Por que escalar horizontalmente é quase sempre melhor que verticalmente na nuvem?
2. Um sistema com 99,99% de disponibilidade pode ficar quanto tempo fora por mês?
3. Qual estratégia de DR você escolheria para um e-commerce? E para um blog?

## Laboratório

Monte um Auto Scaling Group com ALB e 2 instâncias. Termine uma instância manualmente e cronometre quanto tempo leva para o grupo se recuperar sozinho.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 07`
