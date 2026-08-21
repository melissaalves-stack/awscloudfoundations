# Módulo 03 · Economia da nuvem e migração

> **Domínio:** 1 · Conceitos de Nuvem · **Tempo estimado:** 2h30 · **Pré-requisitos:** Módulos 00 a 02

## 🎯 Objetivos de aprendizagem

Ao final deste módulo, você será capaz de:

- Explicar a diferença entre **CapEx e OpEx** e por que a nuvem favorece o OpEx.
- Entender conceitos de **economia da nuvem** (custo total de propriedade, economia de escala).
- Conhecer as **estratégias de migração (os 7 Rs)**.

<br>

---

<br>

## 🧠 Conteúdo

<br>

### 1. CapEx vs. OpEx (de novo, mas para valer)

No [Módulo 00](./00-por-que-a-nuvem-existe.md) você viu essa troca. Agora vamos aprofundar, porque ela cai bastante:

| | **CapEx** (Despesa de Capital) | **OpEx** (Despesa Operacional) |
|:--|:--|:--|
| O que é | Grande gasto inicial em um ativo | Pagamento contínuo pelo uso |
| Exemplo on-premises | Comprar 50 servidores de uma vez | — |
| Exemplo nuvem | — | Pagar por hora de EC2 usada |
| Risco | Alto (e se você errar a previsão?) | Baixo (ajusta conforme usa) |

> [!TIP]
> **Analogia do carro** 🚗
> CapEx é **comprar** um carro à vista (gasto enorme na hora, e ele é seu para sempre — mesmo parado). OpEx é usar **aplicativos de carona**: você paga só pelas corridas que fizer. A nuvem é o "app de carona" da computação.

<br>

### 2. Economia de escala

A AWS atende **milhões** de clientes. Comprando hardware e energia nessa escala gigante, ela consegue preços que nenhuma empresa sozinha conseguiria — e **repassa** parte dessa economia para você, com preços cada vez menores.

> [!NOTE]
> É por isso que os preços da AWS **caem** ao longo do tempo: quanto mais gente usa, maior a escala, menor o custo por unidade.

<br>

### 3. Custo Total de Propriedade (TCO)

O **TCO** (*Total Cost of Ownership*) é o custo **completo** de manter algo — não só o preço de compra, mas tudo em volta.

On-premises, o TCO inclui: servidores, sala refrigerada, energia, refrigeração, segurança física, equipe de manutenção, licenças... Na nuvem, muitos desses custos **desaparecem** ou entram no preço do serviço.

> [!IMPORTANT]
> A AWS oferece a ferramenta **AWS Pricing Calculator** para estimar custos na nuvem. Guarde esse nome — voltaremos a ele no [Domínio 4](../dominio-4-cobranca-precos-e-suporte/README.md).

<br>

### 4. Estratégias de migração: os 7 Rs

Quando uma empresa decide levar seus sistemas para a nuvem, ela escolhe uma estratégia para cada aplicação. A AWS resume tudo nos **7 Rs**:

| R | Nome | O que significa |
|:--|:--|:--|
| 1 | **Rehost** ("lift and shift") | Mover como está, sem mudanças. Rápido e simples. |
| 2 | **Replatform** ("lift, tinker and shift") | Mover fazendo pequenos ajustes de otimização. |
| 3 | **Repurchase** | Trocar por uma solução pronta (ex.: migrar para um SaaS). |
| 4 | **Refactor** / Re-architect | Reescrever a aplicação para aproveitar melhor a nuvem. |
| 5 | **Retire** | Desligar o que não é mais necessário. |
| 6 | **Retain** | Manter on-premises por enquanto (não migrar agora). |
| 7 | **Relocate** | Mover a hospedagem sem alterar (ex.: VMware para a nuvem). |

> [!TIP]
> Para a prova, você não precisa decorar os 7 na ponta da língua, mas saiba reconhecer os mais comuns: **Rehost** (mover sem mexer), **Replatform** (mover com ajustes) e **Refactor** (reescrever). Esses três aparecem muito.

<br>

---

<br>

## ❓ Quiz — teste seus conhecimentos

<br>

**1. A nuvem favorece qual modelo de despesa?**

- **A)** CapEx, porque exige compra de hardware.
- **B)** OpEx, porque você paga pelo uso ao longo do tempo.
- **C)** Nenhum dos dois.
- **D)** Apenas custos fixos anuais.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — A nuvem transforma grandes investimentos iniciais (CapEx) em pagamentos variáveis pelo uso (**OpEx**).

</details>

<br>

**2. Por que os preços da AWS tendem a cair com o tempo?**

- **A)** Porque a AWS está perdendo clientes.
- **B)** Por causa da economia de escala — mais clientes reduzem o custo por unidade.
- **C)** Porque a nuvem está ficando obsoleta.
- **D)** Por imposição do governo.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — A **economia de escala** permite à AWS reduzir custos e repassar essa economia aos clientes.

</details>

<br>

**3. O que o TCO (Total Cost of Ownership) representa?**

- **A)** Apenas o preço de compra de um servidor.
- **B)** O custo completo de manter algo, incluindo energia, equipe, refrigeração etc.
- **C)** O lucro da AWS.
- **D)** O número de Regiões disponíveis.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — O **TCO** soma **todos** os custos de propriedade — muitos deles somem ou diminuem na nuvem.

</details>

<br>

**4. Uma empresa move sua aplicação para a nuvem sem alterar nada nela. Qual estratégia é essa?**

- **A)** Refactor.
- **B)** Retire.
- **C)** Rehost ("lift and shift").
- **D)** Repurchase.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: C)** — Mover "como está" é o **Rehost**, também chamado de *lift and shift*. É a estratégia mais rápida.

</details>

<br>

**5. Qual estratégia significa "desligar sistemas que não são mais necessários"?**

- **A)** Retain.
- **B)** Retire.
- **C)** Relocate.
- **D)** Replatform.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — **Retire** é aposentar (desligar) o que não é mais útil. Não confunda com **Retain**, que é *manter* on-premises por ora.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → procure por *"Cloud Economics"* ou *"Migration"* para exemplos guiados.
- 🔗 Explore a **AWS Pricing Calculator** (sem login) e monte um orçamento fictício de um servidor EC2 — veja como o custo muda conforme o uso.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **CapEx** | Despesa de capital: investimento inicial em ativos. |
| **OpEx** | Despesa operacional: pagamento recorrente pelo uso. |
| **Economia de escala** | Redução de custo por unidade conforme o volume cresce. |
| **TCO** | Custo total de propriedade — todos os custos de manter algo. |
| **7 Rs** | As sete estratégias de migração para a nuvem. |
| **Rehost / Replatform / Refactor** | Mover sem mexer / com ajustes / reescrevendo. |

<br>

## ✅ Checklist de conclusão

- [ ] Li todo o conteúdo do módulo
- [ ] Entendo a diferença entre CapEx e OpEx
- [ ] Sei o que é economia de escala e TCO
- [ ] Reconheço as principais estratégias dos 7 Rs
- [ ] Fiz o quiz
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 02](./02-well-architected-e-caf.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 1](./README.md) &nbsp;·&nbsp; ➡️ [Domínio 2 · Segurança e Conformidade](../dominio-2-seguranca-e-conformidade/README.md)

</div>
