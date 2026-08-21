# Módulo 10 · Viés, justiça e os riscos da IA

> **Domínio:** 4 · IA Responsável · **Tempo estimado:** 2h30 · **Pré-requisitos:** Domínios 1 a 3

## 🎯 Objetivos de aprendizagem

Ao final deste módulo, você será capaz de:

- Explicar o que é **viés (bias)** e de onde ele vem.
- Entender **justiça (fairness)** em IA.
- Reconhecer os principais **riscos** de sistemas de IA.

<br>

---

<br>

## 🧠 Conteúdo

<br>

### 1. O que é viés (bias)?

**Viés** é quando um modelo trata certos grupos de forma **injusta ou desequilibrada**, geralmente porque **aprendeu** isso dos dados de treino.

> [!IMPORTANT]
> A IA é um **espelho dos dados**. Se os dados históricos contêm preconceitos (por gênero, raça, região...), o modelo pode **reproduzir e até amplificar** esses preconceitos. Dados enviesados → modelo enviesado.

**Exemplo:** um modelo de triagem de currículos treinado só com contratações passadas de um grupo pode passar a favorecer esse grupo, sendo injusto com os demais.

<br>

### 2. De onde vem o viés?

| Fonte | Exemplo |
|:--|:--|
| 📊 **Dados enviesados** | Faltam exemplos de certos grupos, ou há preconceitos históricos. |
| 🏷️ **Rotulagem** | Quem rotulou os dados carregava seus próprios preconceitos. |
| ⚙️ **Escolhas de projeto** | Quais variáveis usar, como medir "sucesso". |

<br>

### 3. Justiça (fairness)

**Justiça** é o objetivo de garantir que o sistema trate as pessoas de forma **equitativa**, sem discriminação indevida. Não existe uma única definição matemática perfeita de justiça — por isso é preciso escolher critérios conscientes e testá-los.

> [!TIP]
> Testar justiça envolve comparar o desempenho do modelo **entre diferentes grupos**. Se ele acerta muito mais para um grupo do que para outro, há um problema de justiça a corrigir.

<br>

### 4. Os principais riscos da IA generativa

| Risco | O que é |
|:--|:--|
| 🌫️ **Alucinação** | Gerar informação falsa que parece verdadeira. |
| ☣️ **Toxicidade** | Produzir conteúdo ofensivo, tóxico ou perigoso. |
| ⚖️ **Viés/discriminação** | Tratar grupos de forma injusta. |
| 🔓 **Privacidade** | Vazar dados sensíveis presentes no treino ou no input. |
| 🎭 **Uso indevido** | Desinformação, deepfakes, fraudes. |
| 📚 **Propriedade intelectual** | Gerar conteúdo que copia obras protegidas. |

> [!WARNING]
> Reconhecer esses riscos é parte de construir IA responsável. Muitos deles são mitigados com **supervisão humana**, **guardrails** e boas práticas — tema do próximo módulo.

<br>

### 5. A dimensão de sustentabilidade e impacto

IA responsável também considera o **impacto ambiental** (modelos grandes consomem muita energia) e o **impacto social** (empregos, acesso, inclusão). Decisões responsáveis pesam esses fatores.

<br>

---

<br>

## ❓ Quiz — teste seus conhecimentos

<br>

**1. O que é viés (bias) em um modelo de IA?**

- **A)** Um erro de rede.
- **B)** Quando o modelo trata certos grupos de forma injusta, geralmente por causa dos dados de treino.
- **C)** Um tipo de criptografia.
- **D)** A velocidade do modelo.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — **Viés** é tratamento injusto/desequilibrado, muitas vezes aprendido de **dados enviesados**.

</details>

<br>

**2. De onde o viés geralmente vem?**

- **A)** Apenas do hardware.
- **B)** Dos dados de treino (que refletem preconceitos históricos ou faltam grupos).
- **C)** Da internet lenta.
- **D)** Do tamanho do bucket.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — O viés costuma vir dos **dados**: a IA é um espelho do que aprende.

</details>

<br>

**3. O que é justiça (fairness) em IA?**

- **A)** Deixar o modelo mais rápido.
- **B)** Garantir tratamento equitativo, sem discriminação indevida entre grupos.
- **C)** Reduzir o custo do treino.
- **D)** Aumentar a temperatura.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — **Justiça** busca tratamento **equitativo** entre grupos, sem discriminação.

</details>

<br>

**4. Gerar conteúdo ofensivo ou perigoso é qual risco?**

- **A)** Toxicidade.
- **B)** Alucinação.
- **C)** Overfitting.
- **D)** Latência.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: A)** — Produzir conteúdo ofensivo/perigoso é **toxicidade**.

</details>

<br>

**5. Como testar se um modelo é justo?**

- **A)** Verificando apenas a velocidade.
- **B)** Comparando o desempenho entre diferentes grupos e checando desequilíbrios.
- **C)** Aumentando o número de tokens.
- **D)** Trocando a Região.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — Avaliar justiça envolve **comparar o desempenho entre grupos** e corrigir desequilíbrios.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → procure por *"Responsible AI"* e *"Bias and Fairness"*.
- 🔗 Pense em um sistema de IA (ex.: aprovar bolsas de estudo) e liste onde poderia surgir viés e como testá-lo.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Viés (bias)** | Tratamento injusto/desequilibrado aprendido dos dados. |
| **Justiça (fairness)** | Tratamento equitativo entre grupos. |
| **Alucinação** | Informação falsa que parece verdadeira. |
| **Toxicidade** | Conteúdo ofensivo ou perigoso. |
| **Privacidade** | Proteção contra vazamento de dados sensíveis. |
| **Uso indevido** | Desinformação, deepfakes, fraudes. |

<br>

## ✅ Checklist de conclusão

- [ ] Li todo o conteúdo do módulo
- [ ] Entendo o que é viés e de onde vem
- [ ] Entendo o conceito de justiça em IA
- [ ] Reconheço os principais riscos da IA generativa
- [ ] Sei que justiça se testa comparando grupos
- [ ] Fiz o quiz
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

🏠 [Índice do Domínio 4](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 11 · Transparência e ferramentas](./11-transparencia-e-ferramentas.md)

</div>
