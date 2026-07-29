# Módulo 05 — Redes: VPC, DNS e entrega de conteúdo

`CLF-C02 D3` · ⏱ ~5h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

A VPC é o seu data center virtual. Este é o módulo mais técnico da metade de infraestrutura — e o que mais separa quem entende de quem decorou.

## O que você vai saber fazer no fim

- [ ] Desenhar uma VPC com sub-rede pública e privada e explicar o tráfego
- [ ] Explicar a diferença entre Internet Gateway e NAT Gateway
- [ ] Diferenciar Security Group de NACL em 3 aspectos
- [ ] Escolher entre Direct Connect e VPN

## Roteiro da aula

1. CIDR e endereçamento: o mínimo necessário
2. VPC, sub-redes, tabelas de rotas
3. Internet Gateway vs NAT Gateway
4. Security Groups (stateful) vs NACLs (stateless)
5. VPC Peering, Transit Gateway, VPC Endpoints e PrivateLink
6. Route 53: DNS e políticas de roteamento
7. CloudFront: CDN, cache e edge locations
8. Direct Connect, Site-to-Site VPN, Global Accelerator

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. O que faz uma sub-rede ser 'pública'? (dica: não é uma caixinha marcada)
2. Por que NAT Gateway fica na sub-rede pública se ele serve a privada?
3. Stateful vs stateless: o que muda na prática ao liberar a porta 443?

## Laboratório

Crie uma VPC do zero (sem o wizard): 2 sub-redes, IGW, tabelas de rotas. Suba uma EC2 na pública e outra na privada. Faça a privada acessar a internet via NAT e comprove com um `curl`.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 05`
