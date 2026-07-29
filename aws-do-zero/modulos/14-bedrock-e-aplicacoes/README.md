# Módulo 14 — Construindo com modelos: prompt, RAG e agentes

`AIF-C01 D3` · ⏱ ~5h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

O módulo mais pesado da prova de IA e o mais útil na vida real: como fazer um modelo genérico responder sobre o SEU domínio.

## O que você vai saber fazer no fim

- [ ] Aplicar zero-shot, few-shot e chain-of-thought com intenção
- [ ] Explicar o fluxo completo de RAG, passo a passo
- [ ] Escolher entre prompt, RAG, fine-tuning e pré-treino continuado justificando por custo
- [ ] Explicar o que é um agente e quando ele é necessário
- [ ] Escolher a métrica de avaliação certa

## Roteiro da aula

1. Engenharia de prompt: zero-shot, few-shot, chain-of-thought, system prompt
2. Riscos: prompt injection, jailbreaking, prompt leaking, poisoning
3. RAG do zero: chunking → embedding → banco vetorial → recuperação → geração
4. Bancos vetoriais na AWS: OpenSearch Serverless, pgvector, Neptune Analytics, Kendra
5. Bedrock Knowledge Bases
6. A escada de customização e o custo de cada degrau
7. Fine-tuning, instruction tuning, domain adaptation, RLHF, PEFT/LoRA
8. Agentes e function calling: Bedrock Agents
9. Guardrails
10. Avaliação: ROUGE, BLEU, BERTScore, perplexidade, avaliação humana

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. RAG e fine-tuning resolvem o mesmo problema? Onde cada um falha?
2. Por que chunking mal feito estraga um RAG inteiro?
3. Um agente que pode chamar APIs é um risco de segurança. Quais?

## Laboratório

Monte um Knowledge Base no Bedrock com 3 PDFs seus (apostilas da faculdade servem). Faça perguntas que só estão nos PDFs. Depois quebre de propósito: use chunks de 100 tokens e veja a qualidade cair.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 14`
