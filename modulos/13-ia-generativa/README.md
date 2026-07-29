# Módulo 13 — IA generativa e modelos de fundação

`AIF-C01 D2` · ⏱ ~5h · [◀ índice](../../README.md)

> **Status:** `[ ] não iniciado` · `[ ] estudando` · `[ ] concluído` · `[ ] revisado`

---

## Por que este módulo existe

O que realmente acontece quando você manda um prompt. Sem esse módulo, Bedrock vira mágica — e mágica não passa em prova nem constrói produto.

## O que você vai saber fazer no fim

- [ ] Explicar token, embedding, janela de contexto e inferência
- [ ] Explicar em alto nível o que um transformer faz
- [ ] Ajustar temperature, top-p e top-k com intenção
- [ ] Explicar por que modelos alucinam
- [ ] Escolher um modelo de fundação com critérios objetivos

## Roteiro da aula

1. Modelo de fundação e LLM: o que muda de escala e de uso
2. Tokens: como o texto vira número e por que você paga por isso
3. Embeddings e espaço vetorial: significado como geometria
4. Transformers e o mecanismo de atenção (intuição, sem matemática pesada)
5. Modelos de difusão e geração de imagem
6. Janela de contexto e suas consequências práticas
7. Parâmetros de inferência: temperature, top-p, top-k, max tokens, stop sequences
8. Alucinação, não determinismo e corte de conhecimento
9. Critérios de escolha de modelo: modalidade, custo, latência, contexto, idioma
10. Amazon Bedrock: acesso serverless a modelos de vários provedores
11. SageMaker JumpStart, Amazon Q, PartyRock

## Perguntas-guia

Estas são as perguntas que valem mais que a leitura. Tente respondê-las **antes** de estudar (você vai errar, tudo bem) e de novo **depois**, sem consultar.

1. Por que dois prompts idênticos podem gerar respostas diferentes?
2. Temperature 0 elimina alucinação? Por quê?
3. O que significa dizer que embeddings próximos têm significado próximo?

## Laboratório

No playground do Bedrock, rode o mesmo prompt com temperature 0, 0.5 e 1.0. Depois peça um resumo factual e um poema com cada valor. Anote qual configuração serve a qual tarefa e por quê.

> ⚠️ Antes de qualquer lab: confira se o budget do módulo 10 está ativo e **destrua os recursos ao terminar**.

## Minhas anotações

<!-- Escreva aqui com suas palavras. Se você não consegue escrever, você não entendeu ainda. -->

_(vazio — preencher durante o estudo)_

## O que ainda não entendi

<!-- Lista honesta. Revisite antes da prova. -->

- [ ]

---

**Quiz:** [`quiz.md`](quiz.md) · rode também com `python quiz/quiz.py 13`
