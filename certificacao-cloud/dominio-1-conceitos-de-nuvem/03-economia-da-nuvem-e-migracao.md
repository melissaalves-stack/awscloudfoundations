# Módulo 03 · Economia da nuvem e migração

> **Domínio:** 1 · Conceitos de Nuvem · **Tempo estimado:** 4h · **Pré-requisitos:** Módulos 00, 01 e 02
> **Peso na prova:** parte do Domínio 1 (**24%**). CapEx/OpEx, TCO e os **7 Rs** aparecem com frequência.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Dominar de vez a diferença **CapEx × OpEx** — e por que ela é o coração econômico da nuvem.
- Entender **economia de escala** e como ela derruba o seu preço.
- Saber o que é o **TCO (Custo Total de Propriedade)** e por que ele muda a conversa sobre "o que é mais barato".
- Reconhecer as **7 estratégias de migração (os 7 Rs)** num cenário de prova.

<br>

---

<br>

## 🎬 A conta que engana

Um diretor olha dois orçamentos. Montar o próprio data center: "R$ 500 mil, uma vez". Ir pra nuvem: "R$ 15 mil por mês". Ele faz uma continha rápida: *"Em três anos a nuvem custa R$ 540 mil, mais que o data center! Vou de data center."*

Ele acabou de cometer o erro mais comum da economia de nuvem. Aquele "R$ 500 mil, uma vez" **esconde** o custo da sala refrigerada, da energia, da equipe de plantão, da troca de hardware que queima, do espaço ocioso comprado "por garantia", e do dinheiro parado que poderia estar rendendo. Quando você soma **tudo**, a conta vira outra.

Este módulo é sobre enxergar a conta **de verdade** — e é exatamente isso que a prova cobra no Domínio 1.

<br>

---

<br>

## 💰 Parte 1 — CapEx vs. OpEx (agora pra valer)

Você já viu esses termos no Módulo 00. Aqui a gente aprofunda, porque é a base de tudo.

| | **CapEx** (Despesa de Capital) | **OpEx** (Despesa Operacional) |
|:--|:--|:--|
| O que é | Grande gasto **inicial** em um ativo | Pagamento **contínuo** pelo uso |
| Exemplo on-premises | Comprar 50 servidores de uma vez | — |
| Exemplo nuvem | — | Pagar pelas horas de EC2 usadas |
| Quando você paga | **Antes** de usar | **Conforme** usa |
| Risco | **Alto** — e se você errar a previsão? | **Baixo** — ajusta conforme a demanda |

> [!TIP]
> **A analogia do carro (de novo, porque funciona):** comprar um carro à vista é **CapEx** — um gastão adiantado pra ter o ativo, e o risco é seu (desvaloriza, quebra, fica parado na garagem). Pegar **Uber** é **OpEx** — você paga só quando anda, sem capital preso, sem risco de manutenção. A nuvem te tira do "comprar o carro" e te põe no "pagar pela corrida".

> [!IMPORTANT]
> A frase que resume o Domínio 1 inteiro: **a nuvem troca CapEx por OpEx.** Grande investimento antecipado e arriscado → pagamento variável, sob demanda e de baixo risco.

<br>

## 📉 Parte 2 — Economia de escala: por que a AWS é barata

Aqui vai algo contraintuitivo: como a nuvem consegue ser mais barata do que você fazer sozinho? A resposta é **economia de escala**.

A AWS compra servidores, energia e rede em uma quantidade **absurda** — milhões de clientes usando a mesma infraestrutura gigante. Comprando nessa escala, o custo por unidade despenca. E parte dessa economia é repassada a você em preços menores.

> [!TIP]
> **A analogia do atacado:** comprar um pacote de arroz no mercadinho é caro por quilo. Comprar uma tonelada de arroz direto do produtor é baratíssimo por quilo. A AWS compra "toneladas" de computação — e você aproveita o preço de atacado sem precisar comprar uma tonelada. É por isso que "muitos clientes na mesma infraestrutura" aparece na prova como sinônimo de **economia de escala**.

<br>

## 🧮 Parte 3 — TCO: o Custo Total de Propriedade

Volte ao diretor do começo. O erro dele foi comparar só o preço de etiqueta. O conceito que corrige isso é o **TCO (Total Cost of Ownership)** — o **custo total** de ter algo, somando tudo o que costuma ficar invisível.

No data center próprio, o TCO inclui, além dos servidores: o prédio, a energia, a refrigeração, a equipe de TI, a segurança física, a manutenção, a troca de hardware e a **capacidade ociosa** comprada por precaução. Na nuvem, muitos desses custos **somem** (viram responsabilidade da AWS) ou viram variáveis.

> [!NOTE]
> A AWS oferece a **AWS Pricing Calculator** para estimar o custo de uma arquitetura na nuvem antes de construir. Se a prova falar em "estimar custos previamente" ou "comparar o custo de migrar", pense nessa calculadora. (Você verá as ferramentas de custo em detalhe no Domínio 4.)

> [!CAUTION]
> **Pegadinha de prova:** "a nuvem é sempre mais barata" é **falso**. Nem sempre — depende da carga de trabalho. O que a nuvem quase sempre melhora é o **TCO** e a **flexibilidade** (você para de pagar pelo que não usa). Cuidado com alternativas absolutas como "sempre" ou "nunca".

<br>

## 🚚 Parte 4 — Como migrar: os 7 Rs

Decidido ir pra nuvem, surge a pergunta: *como* mover o que já existe? A AWS descreve **7 estratégias de migração** — os famosos **7 Rs**. A prova não exige que você seja um especialista em migração, mas gosta de te dar a descrição de uma estratégia e pedir o nome (ou vice-versa).

| R | Nome | O que significa | Frase-gatilho |
|:--:|:--|:--|:--|
| 1 | **Rehost** ("lift and shift") | Mover como está, sem mudanças. Rápido e simples. | "mover sem alterar, o mais rápido possível" |
| 2 | **Replatform** ("lift, tinker and shift") | Mover fazendo pequenos ajustes de otimização. | "pequenas melhorias durante a migração" |
| 3 | **Repurchase** | Trocar por uma solução pronta (ex.: migrar para um SaaS). | "substituir por um produto SaaS" |
| 4 | **Refactor / Re-architect** | Reescrever a aplicação para aproveitar de verdade a nuvem. | "reprojetar para usar recursos nativos" |
| 5 | **Retire** | Desligar o que não é mais necessário. | "desativar sistemas obsoletos" |
| 6 | **Retain** | Manter on-premises por enquanto (não migrar agora). | "manter no local por ora" |
| 7 | **Relocate** | Mover a hospedagem sem alterar (ex.: VMware para a nuvem). | "transferir a hospedagem, sem mudar a aplicação" |

> [!TIP]
> **Os dois que mais caem:** **Rehost** (o "lift and shift" — mover tudo como está, sem mexer) e **Refactor** (reescrever pra aproveitar a nuvem). Se o cenário enfatiza **velocidade e mínimo esforço**, é Rehost. Se enfatiza **modernizar/aproveitar recursos nativos**, é Refactor.

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **CapEx → OpEx**, nunca o contrário. A nuvem sai da compra antecipada para o pagamento pelo uso.
> - **"A nuvem é sempre mais barata" é falso.** O que melhora é o TCO e a flexibilidade. Fuja de "sempre/nunca".
> - **Economia de escala** = muitos clientes dividindo uma infraestrutura gigante → preço de atacado pra você.
> - **TCO** inclui os custos escondidos (energia, equipe, espaço, ociosidade), não só o preço do servidor.
> - **Rehost = lift and shift** (mover sem mudar). Não confunda com Refactor (reescrever).
> - **Pricing Calculator** = estimar custos antes de construir/migrar.

<br>

## 🗺️ Mapa rápido pra revisão

| Conceito | Em uma frase |
|:--|:--|
| CapEx → OpEx | de "comprar o carro" para "pagar o Uber" |
| Economia de escala | preço de atacado por muitos clientes juntos |
| TCO | o custo real, com tudo o que costuma ficar invisível |
| 7 Rs | as formas de migrar (Rehost, Replatform, Repurchase, Refactor, Retire, Retain, Relocate) |
| Rehost | "lift and shift" — mover sem mudar |
| Refactor | reescrever pra aproveitar a nuvem |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Uma empresa quer migrar rapidamente sua aplicação para a AWS, sem fazer nenhuma alteração no código, priorizando velocidade. Qual estratégia de migração é essa?**

- **A)** Refactor
- **B)** Rehost ("lift and shift")
- **C)** Retire
- **D)** Repurchase

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Rehost**
>
> Mover "como está", sem mudanças, priorizando velocidade, é a definição de **Rehost** (lift and shift).
>
> - **A) Refactor** ❌ — envolve reescrever a aplicação (o oposto de "sem alterações").
> - **C) Retire** ❌ — é desligar o que não se usa mais.
> - **D) Repurchase** ❌ — é trocar por uma solução SaaS pronta.

</details>

<br>

**2. Um gestor afirma: "migrar para a nuvem será sempre mais barato que manter nosso data center." Qual é a avaliação mais correta dessa afirmação?**

- **A)** Correta — a nuvem é sempre mais barata.
- **B)** Incorreta — depende da carga de trabalho; o que a nuvem costuma melhorar é o TCO e a flexibilidade.
- **C)** Correta — porque elimina 100% dos custos.
- **D)** Incorreta — a nuvem é sempre mais cara.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B)**
>
> Não é "sempre" — depende do caso. A nuvem geralmente melhora o **custo total de propriedade (TCO)** e a **flexibilidade** (pagar pelo uso), mas afirmações absolutas costumam estar erradas.
>
> - **A) / C)** ❌ — absolutos ("sempre", "100%") são bandeira vermelha.
> - **D)** ❌ — também absoluto, e no sentido errado.

</details>

<br>

**3. Como a AWS consegue oferecer preços mais baixos do que a maioria das empresas conseguiria sozinha?**

- **A)** Porque não tem custos de infraestrutura.
- **B)** Por economia de escala: milhões de clientes compartilham uma infraestrutura enorme, reduzindo o custo por unidade.
- **C)** Porque cobra taxas escondidas depois.
- **D)** Porque usa hardware de baixa qualidade.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Economia de escala**
>
> Comprar em escala massiva derruba o custo por unidade, e parte dessa economia chega a você (o "preço de atacado").
>
> - **A)** ❌ — a AWS tem custos enormes de infra; a escala é que os dilui.
> - **C) / D)** ❌ — distratores; não é o mecanismo.

</details>

<br>

**4. Ao comparar o custo de um data center próprio com a nuvem, um analista lembra de incluir energia, refrigeração, equipe, espaço físico e capacidade ociosa — não só o preço dos servidores. Que conceito ele está aplicando?**

- **A)** CapEx
- **B)** Economia de escala
- **C)** Custo Total de Propriedade (TCO)
- **D)** Rehost

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) TCO**
>
> Somar **todos** os custos (inclusive os escondidos) para comparar de verdade é o **Custo Total de Propriedade**.
>
> - **A)** ❌ — CapEx é só o gasto de capital inicial, uma parte do TCO.
> - **B)** ❌ — é sobre por que a nuvem é barata, não sobre somar custos.
> - **D)** ❌ — é uma estratégia de migração.

</details>

<br>

**5. Selecione as DUAS afirmações corretas sobre CapEx e OpEx.** *(múltipla resposta — escolha 2)*

- **A)** CapEx é um grande gasto inicial em um ativo; OpEx é o pagamento contínuo pelo uso.
- **B)** A nuvem substitui OpEx por CapEx.
- **C)** Migrar para a nuvem geralmente troca CapEx por OpEx.
- **D)** CapEx e OpEx são a mesma coisa com nomes diferentes.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** define corretamente os dois; **C** descreve a direção certa da mudança na nuvem.
>
> - **B)** ❌ — está invertido (a nuvem troca CapEx *por* OpEx).
> - **D)** ❌ — são conceitos distintos: capital antecipado vs. despesa pelo uso.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos sobre *economia da nuvem* e *migração* no Cloud Practitioner Essentials.
- 🔗 Explore a **AWS Pricing Calculator** (sem login) e monte uma estimativa simples de um servidor rodando o mês todo.
- ✍️ **Desafio:** liste 5 custos "escondidos" de um data center próprio que entram no TCO mas não aparecem no preço do servidor. Se listar, você entendeu TCO de verdade.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **CapEx** | Despesa de capital: grande investimento inicial em um ativo. |
| **OpEx** | Despesa operacional: pagamento recorrente e variável pelo uso. |
| **Economia de escala** | Redução do custo por unidade por comprar/operar em grande volume. |
| **TCO (Custo Total de Propriedade)** | Soma de todos os custos de ter uma solução, incluindo os invisíveis. |
| **AWS Pricing Calculator** | Ferramenta para estimar custos de uma arquitetura antes de construir. |
| **7 Rs** | As 7 estratégias de migração para a nuvem. |
| **Rehost** | "Lift and shift": mover sem alterações. |
| **Refactor** | Reescrever a aplicação para aproveitar recursos nativos da nuvem. |

<br>

## ✅ Checklist de conclusão

- [ ] Domino a diferença entre CapEx e OpEx (e a direção da mudança)
- [ ] Entendi economia de escala (o "preço de atacado")
- [ ] Sei o que é TCO e por que "só o preço do servidor" engana
- [ ] Sei que "a nuvem é sempre mais barata" é uma armadilha
- [ ] Reconheço as 7 estratégias de migração, em especial Rehost e Refactor
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 02](./02-well-architected-e-caf.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 1](./README.md) &nbsp;·&nbsp; ➡️ [Domínio 2 · Segurança e Conformidade](../dominio-2-seguranca-e-conformidade/README.md)

</div>
