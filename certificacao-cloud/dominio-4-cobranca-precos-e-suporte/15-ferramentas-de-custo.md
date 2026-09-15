# Módulo 15 · Ferramentas de custo

> **Domínio:** 4 · Cobrança, Preços e Suporte · **Tempo estimado:** 3h · **Pré-requisitos:** Módulo 14
> **Peso na prova:** parte do Domínio 4 (**12%**). Saber "qual ferramenta para antes/durante/depois do gasto" é um ponto fácil e recorrente.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Escolher a ferramenta de custo certa para cada momento: **antes, durante e depois** do gasto.
- Diferenciar **Pricing Calculator**, **Cost Explorer**, **Budgets** e **Cost & Usage Report**.
- Entender **AWS Organizations** e o **faturamento consolidado** de várias contas.

<br>

---

<br>

## 🎬 Três momentos do dinheiro

Pensa em como você lida com um gasto grande na vida. **Antes** de comprar, você faz um orçamento ("quanto vai custar?"). **Durante**, você acompanha para não estourar ("me avisa se eu passar do limite"). **Depois**, você olha o extrato ("para onde foi o dinheiro?"). A AWS tem uma ferramenta para cada um desses três momentos — e a prova adora perguntar qual é qual.

<br>

---

<br>

## 🧠 Parte 1 — A pergunta certa para a ferramenta certa

| Ferramenta | Responde à pergunta... | Momento |
|:--|:--|:--|
| 🧮 **AWS Pricing Calculator** | "Quanto **vai** custar antes de eu construir?" | **Antes** (estimativa) |
| 📊 **AWS Cost Explorer** | "Quanto eu **já** gastei e qual a tendência?" | **Depois** (análise) |
| 🎯 **AWS Budgets** | "Como sou **avisado** se passar de um limite?" | **Durante** (alerta) |
| 📄 **AWS Cost & Usage Report (CUR)** | "Onde está o **relatório mais detalhado** possível?" | Detalhamento total |

> [!IMPORTANT]
> Este quadro é o coração do módulo. Grave a associação **momento → ferramenta**: **antes** = Pricing Calculator (estimar); **durante** = Budgets (alertar); **depois** = Cost Explorer (analisar). O **CUR** é o relatório mais granular de todos, para quem precisa de detalhe linha a linha.

<br>

## 🧮 Parte 2 — Pricing Calculator: planejando o gasto (ANTES)

O **AWS Pricing Calculator** estima o custo de uma arquitetura **antes** de você construí-la. Você monta a configuração (tantas instâncias, tanto de S3, etc.) e ele projeta a fatura. Perfeito para planejar um projeto ou comparar o custo de migrar.

> [!TIP]
> Gatilho de prova: "estimar o custo **antes** de implantar / planejar o orçamento de um projeto novo" → **Pricing Calculator**.

<br>

## 📊 Parte 3 — Cost Explorer: enxergando o passado (DEPOIS)

O **AWS Cost Explorer** mostra **quanto você já gastou**, com gráficos e tendências ao longo do tempo. Dá para filtrar por serviço, por período, por tag — e entender **para onde o dinheiro está indo**.

> [!TIP]
> **A analogia do extrato bancário:** o Cost Explorer é o extrato — mostra o que **já** aconteceu. Gatilho: "analisar gastos passados / visualizar tendências de custo" → **Cost Explorer**.

<br>

## 🎯 Parte 4 — Budgets: limites e alertas (DURANTE)

O **AWS Budgets** deixa você definir um **orçamento** e receber **alertas** automáticos ao se aproximar (ou passar) do limite. É a proteção que evita o susto no fim do mês.

> [!TIP]
> **A analogia do alerta do app do banco:** "você já usou 80% do seu limite". Isso é o Budgets. Gatilho: "ser **avisado** ao ultrapassar um valor / definir um teto de gastos" → **Budgets**.

> [!CAUTION]
> **Pegadinha frequente — Cost Explorer × Budgets:** os dois lidam com custo, mas o **Cost Explorer analisa o passado** (o que já gastei) e o **Budgets alerta no presente/futuro** (me avise se eu passar). Se a palavra-chave é **"alerta/limite"**, é Budgets; se é **"analisar/visualizar o histórico"**, é Cost Explorer.

<br>

## 🏢 Parte 5 — AWS Organizations e faturamento consolidado

Quando uma empresa tem **várias contas AWS** (uma para cada time ou ambiente), gerenciar tudo separado é um caos. O **AWS Organizations** permite **gerenciar várias contas juntas**, com dois grandes benefícios de custo/governança:

- 💳 **Faturamento consolidado** — uma **fatura única** para todas as contas, e descontos por volume agregado (a soma do uso de todas conta como "usar mais", ativando economias de escala).
- 🛡️ **SCPs (Service Control Policies)** — políticas que **limitam o que cada conta pode fazer**, aplicando governança de cima para baixo (você viu as SCPs no contexto de permissões).

> [!TIP]
> Gatilho de prova: "gerenciar múltiplas contas / fatura única / aplicar políticas a várias contas" → **AWS Organizations** (com faturamento consolidado e SCPs).

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **Antes = Pricing Calculator. Durante = Budgets (alerta). Depois = Cost Explorer (análise).**
> - **Cost Explorer analisa o passado; Budgets alerta sobre limites.** Não troque.
> - **CUR** = o relatório de custo/uso **mais detalhado**.
> - **AWS Organizations** = várias contas + **faturamento consolidado** + **SCPs**.
> - Faturamento consolidado pode **reduzir custo** por agregar volume (economia de escala).

<br>

## 🗺️ Mapa rápido pra revisão

| Ferramenta | Momento / função |
|:--|:--|
| Pricing Calculator | ANTES — estimar |
| Budgets | DURANTE — alertar sobre limite |
| Cost Explorer | DEPOIS — analisar o gasto |
| Cost & Usage Report | detalhamento máximo |
| Organizations | várias contas: fatura única + SCPs |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Uma empresa quer estimar quanto custará uma nova arquitetura ANTES de construí-la. Qual ferramenta usar?**

- **A)** AWS Cost Explorer
- **B)** AWS Budgets
- **C)** AWS Pricing Calculator
- **D)** AWS Cost & Usage Report

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) AWS Pricing Calculator**
>
> Estimar custos **antes** de implantar é exatamente o papel da Pricing Calculator.
>
> - **A)** ❌ — Cost Explorer analisa o que **já** foi gasto.
> - **B)** ❌ — Budgets alerta sobre limites, não estima projetos novos.
> - **D)** ❌ — CUR é relatório detalhado do uso real, não estimativa prévia.

</details>

<br>

**2. Um gestor quer ser avisado automaticamente sempre que o gasto mensal se aproximar de R$ 5.000. Qual ferramenta atende?**

- **A)** AWS Budgets
- **B)** AWS Cost Explorer
- **C)** AWS Pricing Calculator
- **D)** AWS Trusted Advisor

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: A) AWS Budgets**
>
> Definir um teto e receber **alertas** ao se aproximar dele é a função do Budgets.
>
> - **B)** ❌ — Cost Explorer mostra o histórico, mas não é a ferramenta de alerta de limite.
> - **C)** ❌ — Pricing Calculator estima antes de construir.
> - **D)** ❌ — Trusted Advisor dá recomendações gerais, não alerta de orçamento definido.

</details>

<br>

**3. Uma equipe financeira quer visualizar graficamente quanto foi gasto por serviço nos últimos 6 meses e entender as tendências. Qual ferramenta?**

- **A)** AWS Pricing Calculator
- **B)** AWS Budgets
- **C)** AWS Cost Explorer
- **D)** AWS Artifact

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) AWS Cost Explorer**
>
> Analisar gastos passados e tendências, com gráficos e filtros, é o Cost Explorer.
>
> - **A) / B)** ❌ — estimativa prévia e alerta de limite, respectivamente.
> - **D)** ❌ — Artifact é documentos de conformidade.

</details>

<br>

**4. Uma corporação tem 12 contas AWS e quer uma fatura única, além de aplicar políticas que limitam o que cada conta pode fazer. Qual serviço usar?**

- **A)** AWS Organizations
- **B)** AWS Budgets
- **C)** IAM
- **D)** AWS Cost Explorer

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: A) AWS Organizations**
>
> Organizations gerencia várias contas com **faturamento consolidado** e **SCPs** (políticas por conta).
>
> - **B) / D)** ❌ — lidam com orçamento/análise, não com gestão de múltiplas contas.
> - **C)** ❌ — IAM gerencia identidades dentro de uma conta, não várias contas + fatura única.

</details>

<br>

**5. Selecione as DUAS afirmações corretas.** *(múltipla resposta — escolha 2)*

- **A)** O Cost Explorer é usado para analisar gastos que já ocorreram.
- **B)** O Pricing Calculator envia alertas quando você ultrapassa um orçamento.
- **C)** O faturamento consolidado do AWS Organizations pode reduzir custos ao agregar volume.
- **D)** O AWS Budgets serve para baixar relatórios de conformidade.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** (Cost Explorer analisa o passado) e **C** (faturamento consolidado agrega volume) estão corretas.
>
> - **B)** ❌ — alertas de orçamento são do **Budgets**, não da Pricing Calculator.
> - **D)** ❌ — relatórios de conformidade vêm do **Artifact**, não do Budgets.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos sobre *ferramentas de billing* no Cloud Practitioner Essentials.
- 🔗 Explore a **AWS Pricing Calculator** (sem login) e monte a estimativa de uma instância + um bucket.
- ✍️ **Desafio dos três momentos:** para "estimar um projeto novo", "ser avisado ao passar de um limite" e "ver para onde foi o gasto do trimestre", diga a ferramenta. Acertou as três? Módulo dominado.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Pricing Calculator** | Estima custos **antes** de construir. |
| **Cost Explorer** | Analisa gastos passados e tendências. |
| **AWS Budgets** | Define orçamentos e envia alertas de limite. |
| **Cost & Usage Report (CUR)** | Relatório mais detalhado de custo e uso. |
| **AWS Organizations** | Gerencia várias contas juntas. |
| **Faturamento consolidado** | Fatura única para várias contas (agrega volume). |
| **SCP (Service Control Policy)** | Política que limita o que uma conta pode fazer. |

<br>

## ✅ Checklist de conclusão

- [ ] Associo cada ferramenta ao seu momento (antes/durante/depois)
- [ ] Distingo Pricing Calculator, Cost Explorer, Budgets e CUR
- [ ] Não confundo Cost Explorer (análise) com Budgets (alerta)
- [ ] Entendi o AWS Organizations, faturamento consolidado e SCPs
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 14](./14-modelos-de-preco.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 4](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 16 · Suporte e Trusted Advisor](./16-suporte-e-trusted-advisor.md)

</div>
