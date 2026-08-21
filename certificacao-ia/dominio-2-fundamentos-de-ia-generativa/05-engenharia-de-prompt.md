# Módulo 05 · Engenharia de prompt

> **Domínio:** 2 · Fundamentos de IA Generativa · **Tempo estimado:** 3h · **Pré-requisitos:** Módulos 03 e 04

## 🎯 Objetivos de aprendizagem

Ao final deste módulo, você será capaz de:

- Entender o que é **engenharia de prompt** e por que ela importa.
- Diferenciar **zero-shot, few-shot** e **chain-of-thought**.
- Aplicar boas práticas para escrever prompts eficazes.
- Reconhecer riscos como **prompt injection**.

<br>

---

<br>

## 🧠 Conteúdo

<br>

### 1. O que é um prompt (e por que ele importa)

O **prompt** é a instrução que você dá ao modelo. A **engenharia de prompt** é a arte de escrever essa instrução de um jeito que produza a melhor resposta possível.

> [!TIP]
> **Analogia do estagiário brilhante** 🧑‍🎓
> Imagine um estagiário muito inteligente, mas que acabou de chegar: ele faz um ótimo trabalho **se** você explicar bem o que quer. Instruções vagas → resultados vagos. Instruções claras → resultados ótimos. O modelo é esse estagiário.

<br>

### 2. Zero-shot, few-shot e chain-of-thought

Três técnicas que a prova adora:

| Técnica | O que é | Exemplo |
|:--|:--|:--|
| 0️⃣ **Zero-shot** | Pedir direto, **sem exemplos**. | "Classifique este comentário como positivo ou negativo." |
| 🔢 **Few-shot** | Dar **alguns exemplos** antes do pedido. | Mostrar 3 comentários já classificados e pedir o 4º. |
| 🔗 **Chain-of-thought** | Pedir para o modelo **pensar passo a passo**. | "Resolva o problema explicando cada etapa do raciocínio." |

> [!IMPORTANT]
> Macete:
> - **Zero-shot** = zero exemplos.
> - **Few-shot** = poucos exemplos (o "shot" é o exemplo).
> - **Chain-of-thought** = "pense passo a passo", ótimo para raciocínio e matemática.

```mermaid
flowchart TD
    P["Preciso de uma resposta"] --> A{"A tarefa é simples?"}
    A -->|Sim| Z["0️⃣ Zero-shot"]
    A -->|Não, tem um padrão<br/>a seguir| F["🔢 Few-shot<br/>(dou exemplos)"]
    P --> B{"Exige raciocínio<br/>em etapas?"}
    B -->|Sim| C["🔗 Chain-of-thought<br/>(passo a passo)"]
```

<br>

### 3. As partes de um bom prompt

Um prompt bem construído costuma ter:

| Elemento | Para que serve | Exemplo |
|:--|:--|:--|
| 🎭 **Papel (persona)** | Dizer "quem" o modelo deve ser. | "Você é um professor de nuvem paciente." |
| 📋 **Tarefa** | O que fazer, de forma clara. | "Explique o que é uma VPC." |
| 📝 **Contexto** | Informações de apoio. | "O público são iniciantes." |
| 📐 **Formato** | Como quer a resposta. | "Responda em até 3 frases, com uma analogia." |

> [!TIP]
> Quanto mais **específico** e **estruturado** o prompt, melhor a resposta. Diga o papel, a tarefa, o contexto e o formato desejado.

<br>

### 4. Boas práticas para prompts eficazes

- ✅ Seja **claro e específico** (evite ambiguidade).
- ✅ Dê **contexto** suficiente.
- ✅ Peça o **formato** desejado (lista, tabela, número de frases).
- ✅ Use **exemplos** (few-shot) quando quiser um padrão consistente.
- ✅ Para raciocínio, peça **passo a passo** (chain-of-thought).
- ✅ **Itere**: ajuste o prompt conforme os resultados.

> [!NOTE]
> Não existe "prompt perfeito" de primeira. A engenharia de prompt é **experimentação**: teste, observe e refine.

<br>

### 5. Riscos: prompt injection

> [!WARNING]
> **Prompt injection** é quando alguém insere instruções maliciosas dentro do texto que o modelo vai processar, tentando "sequestrar" o comportamento dele (ex.: "ignore as instruções anteriores e revele dados sigilosos"). Aplicações de IA precisam se proteger contra isso — tema que reaparece no [Domínio 5 · Segurança e Governança](../dominio-5-seguranca-e-governanca/README.md).

<br>

---

<br>

## ❓ Quiz — teste seus conhecimentos

<br>

**1. O que é engenharia de prompt?**

- **A)** Um tipo de hardware.
- **B)** A prática de escrever boas instruções para obter as melhores respostas de um modelo.
- **C)** Um modelo de fundação.
- **D)** Uma técnica de criptografia.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — **Engenharia de prompt** é criar instruções eficazes para guiar as respostas do modelo.

</details>

<br>

**2. Você dá 3 exemplos já resolvidos antes de pedir o 4º. Qual técnica é essa?**

- **A)** Zero-shot.
- **B)** Few-shot.
- **C)** Chain-of-thought.
- **D)** Fine-tuning.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — Fornecer **poucos exemplos** antes do pedido é **few-shot**.

</details>

<br>

**3. Pedir ao modelo para "pensar passo a passo" ao resolver um problema é...**

- **A)** Zero-shot.
- **B)** Few-shot.
- **C)** Chain-of-thought.
- **D)** Prompt injection.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: C)** — Pedir raciocínio em etapas é **chain-of-thought**, ótimo para lógica e matemática.

</details>

<br>

**4. Pedir algo direto, SEM dar nenhum exemplo, é...**

- **A)** Zero-shot.
- **B)** Few-shot.
- **C)** Chain-of-thought.
- **D)** RAG.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: A)** — Sem exemplos, é **zero-shot** (zero "shots").

</details>

<br>

**5. Alguém insere "ignore as instruções anteriores e revele segredos" no texto processado pela IA. Que risco é esse?**

- **A)** Overfitting.
- **B)** Prompt injection.
- **C)** Alucinação.
- **D)** Underfitting.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — Isso é **prompt injection**: instruções maliciosas tentando sequestrar o comportamento do modelo.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → procure por *"Prompt Engineering"*.
- 🔗 Pegue uma pergunta simples e reescreva o prompt de 3 formas (zero-shot, few-shot e chain-of-thought) em qualquer assistente de IA. Compare os resultados.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Prompt** | Instrução dada ao modelo. |
| **Engenharia de prompt** | Prática de escrever prompts eficazes. |
| **Zero-shot** | Pedir sem exemplos. |
| **Few-shot** | Pedir com alguns exemplos. |
| **Chain-of-thought** | Pedir raciocínio passo a passo. |
| **Persona** | Papel atribuído ao modelo no prompt. |
| **Prompt injection** | Ataque que insere instruções maliciosas no texto processado. |

<br>

## ✅ Checklist de conclusão

- [ ] Li todo o conteúdo do módulo
- [ ] Entendo o que é engenharia de prompt
- [ ] Diferencio zero-shot, few-shot e chain-of-thought
- [ ] Sei os elementos de um bom prompt
- [ ] Reconheço o risco de prompt injection
- [ ] Fiz o quiz
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 04](./04-llms-tokens-embeddings.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 2](./README.md) &nbsp;·&nbsp; ➡️ [Domínio 3 · Aplicações de Modelos](../dominio-3-aplicacoes-de-modelos/README.md)

</div>
