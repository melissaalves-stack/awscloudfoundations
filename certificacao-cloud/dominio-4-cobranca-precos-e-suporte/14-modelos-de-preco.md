# Módulo 14 · Modelos de preço

> **Domínio:** 4 · Cobrança, Preços e Suporte · **Tempo estimado:** 3h · **Pré-requisitos:** Domínios 1 a 3 completos
> **Peso na prova:** o Domínio 4 vale **12%** do CLF-C02. Pequeno em peso, mas cheio de pontos fáceis — não deixe escapar.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Entender os **três pilares de preço** da AWS: computação, armazenamento e transferência de dados.
- Saber por que **dados que saem** custam, mas **dados que entram** costumam ser grátis.
- Entender a filosofia **pay-as-you-go** aplicada ao dinheiro.
- Conhecer o **AWS Free Tier** (camada gratuita) e seus três tipos.

<br>

---

<br>

## 🎬 A conta de três linhas

No fim do mês chega a fatura da AWS. Ela pode ter centenas de itens, mas quase tudo se resume a **três perguntas**: *quanto você processou?*, *quanto você guardou?* e *quanto de dado saiu para a internet?*. Entender essas três linhas é entender como a AWS cobra — e evitar aquele susto de fatura que derruba muita startup.

<br>

---

<br>

## 🧠 Parte 1 — Os três pilares de preço da AWS

Praticamente todo custo na AWS cai em um destes três baldes:

| Pilar | O que significa |
|:--|:--|
| 💻 **Computação** | Você paga pelo **tempo de processamento** que usa (ex.: horas de EC2, execuções de Lambda). |
| 💾 **Armazenamento** | Você paga pela **quantidade de dados guardados** (ex.: GB no S3). |
| 🌐 **Transferência de dados** | Dados que **saem** da AWS para a internet são cobrados. Dados que **entram** costumam ser **gratuitos**. |

> [!IMPORTANT]
> **A pegadinha do tráfego (cai muito):** entrada de dados (**inbound**) é geralmente **grátis**; saída de dados (**outbound**, para a internet) é **cobrada**. A lógica da AWS é: é fácil colocar seus dados lá dentro (de graça), mas tirá-los custa. Se a questão pergunta "qual tipo de transferência costuma ser gratuito?", a resposta é **entrada (inbound)**.

<br>

## 💧 Parte 2 — A filosofia: pague pelo que usar

Toda a precificação gira em torno do **pay-as-you-go** (pague conforme o uso), que você viu lá no Domínio 1. Três princípios que a AWS destaca:

- **Pague pelo que usar** — sem contratos gigantes obrigatórios; ligou, pagou; desligou, parou de pagar.
- **Pague menos ao se comprometer** — Reserved/Savings Plans dão desconto por compromisso (Módulo 09).
- **Pague menos usando mais** — quanto maior o volume (ex.: de armazenamento), menor o preço por unidade (economia de escala, Módulo 03).

> [!TIP]
> Isto amarra o curso inteiro: a nuvem troca **CapEx por OpEx** (Módulo 03), e a fatura reflete exatamente o que você consumiu. "Otimizar custos" (o pilar do Well-Architected, Módulo 02) é, em boa parte, **desligar o que não está em uso**.

<br>

## 🆓 Parte 3 — O AWS Free Tier (camada gratuita)

Para você aprender e experimentar sem gastar, a AWS oferece o **Free Tier** — e ele tem **três tipos** distintos, que a prova gosta de diferenciar:

| Tipo | Como funciona | Exemplo |
|:--|:--|:--|
| 🕐 **Gratuito por 12 meses** | Grátis no **primeiro ano** após criar a conta. | 750h/mês de EC2 t2.micro |
| ♾️ **Sempre gratuito** | Grátis **para sempre**, dentro de um limite mensal. | 1 milhão de execuções/mês do Lambda |
| 🧪 **Testes (trials)** | Grátis por um **curto período** para experimentar. | Alguns serviços por 30/60 dias |

> [!NOTE]
> É por meio do espírito do Free Tier (e das plataformas de laboratório gratuitas) que a Liga consegue ensinar prática **sem exigir cartão de crédito**. Para a prova, saiba distinguir os **três tipos**: 12 meses, sempre grátis, e testes.

<br>

## 🎯 Parte 4 — Arquitetura barata é decisão consciente

Custo não é sorte — é design. Escolhas que você já viu ao longo do curso são, no fundo, decisões de custo: usar **Spot** para cargas tolerantes (Módulo 09), a **classe certa do S3** para cada dado (Módulo 10), **desligar** ambientes de teste à noite, definir o **máximo** do Auto Scaling (Módulo 13), e reduzir **tráfego de saída** com cache no CloudFront.

> [!TIP]
> Se a questão descreve uma situação de desperdício ("instâncias ligadas sem uso", "dados frequentes no Glacier", "sem limite no Auto Scaling") e pede a melhoria, ela está testando **otimização de custos** — o pilar do Well-Architected na prática.

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **Entrada de dados (inbound) costuma ser grátis; saída (outbound) é cobrada.** A pegadinha nº 1 do Domínio 4.
> - Os três pilares de custo: **computação, armazenamento, transferência**.
> - **Free Tier tem 3 tipos:** 12 meses, sempre gratuito, e testes (trials).
> - **Pague pelo uso / menos ao comprometer / menos usando mais** são os princípios de preço.
> - Reduzir custo = desligar ocioso, classe certa do S3, Spot, máximo no Auto Scaling, cache para reduzir saída.

<br>

## 🗺️ Mapa rápido pra revisão

| Conceito | Em uma frase |
|:--|:--|
| 3 pilares de preço | computação · armazenamento · transferência |
| Inbound × outbound | entrada grátis · saída cobrada |
| Pay-as-you-go | pagar pelo que usar |
| Free Tier | 12 meses · sempre grátis · testes |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Na AWS, qual tipo de transferência de dados é geralmente gratuito?**

- **A)** Dados que saem da AWS para a internet (outbound).
- **B)** Dados que entram na AWS vindos da internet (inbound).
- **C)** Toda transferência é sempre cobrada.
- **D)** Toda transferência é sempre gratuita.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Entrada (inbound)**
>
> Colocar dados na AWS costuma ser grátis; **tirá-los** (saída para a internet) é cobrado.
>
> - **A)** ❌ — saída (outbound) é justamente o que costuma ter custo.
> - **C) / D)** ❌ — absolutos incorretos; depende da direção.

</details>

<br>

**2. Uma estudante quer usar o EC2 gratuitamente no primeiro ano após criar a conta, dentro de um limite de horas mensais. Que parte do Free Tier ela está usando?**

- **A)** Sempre gratuito
- **B)** Gratuito por 12 meses
- **C)** Teste (trial) de 30 dias
- **D)** Savings Plans

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Gratuito por 12 meses**
>
> 750h/mês de EC2 t2.micro no primeiro ano é o tipo **"gratuito por 12 meses"** do Free Tier.
>
> - **A)** ❌ — "sempre gratuito" vale para sempre (ex.: execuções do Lambda), não é o caso do EC2.
> - **C)** ❌ — trials são por curtos períodos para serviços específicos.
> - **D)** ❌ — Savings Plans é modelo de compra com desconto, não Free Tier.

</details>

<br>

**3. Quais são os três principais fatores (pilares) que compõem o custo na AWS?**

- **A)** Número de usuários, cor da interface e Região.
- **B)** Computação, armazenamento e transferência de dados.
- **C)** Suporte, treinamento e certificação.
- **D)** CPU, GPU e RAM apenas.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B)**
>
> Os três pilares de custo são **computação, armazenamento e transferência de dados**.
>
> - **A), C), D)** ❌ — não são os pilares de precificação da AWS.

</details>

<br>

**4. Selecione as DUAS afirmações corretas sobre preços na AWS.** *(múltipla resposta — escolha 2)*

- **A)** O modelo pay-as-you-go cobra conforme o uso, sem grande compromisso inicial obrigatório.
- **B)** Dados que entram na AWS quase sempre custam mais que dados que saem.
- **C)** O Free Tier inclui uma categoria "sempre gratuita", dentro de limites mensais.
- **D)** Desligar recursos ociosos não afeta a fatura.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** (pay-as-you-go) e **C** (categoria "sempre gratuita" do Free Tier) estão corretas.
>
> - **B)** ❌ — é o contrário: entrada costuma ser grátis, saída é cobrada.
> - **D)** ❌ — desligar o ocioso **reduz** a fatura (é otimização de custos).

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos de *Billing and Pricing* no Cloud Practitioner Essentials.
- 🔗 Explore o **AWS Free Tier** no site oficial e veja os três tipos listados.
- ✍️ **Desafio:** liste 4 formas de reduzir a fatura de uma arquitetura (uma para cada: computação, armazenamento, transferência, escalonamento). Se listar, você conectou custo com o resto do curso.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Pilares de preço** | Computação, armazenamento e transferência de dados. |
| **Pay-as-you-go** | Pagar conforme o uso. |
| **Transferência de saída (outbound)** | Dados que saem para a internet (cobrados). |
| **Transferência de entrada (inbound)** | Dados que entram na AWS (geralmente gratuitos). |
| **Free Tier** | Camada gratuita: 12 meses, sempre grátis e testes. |
| **Otimização de custos** | Pilar do Well-Architected focado em não desperdiçar. |

<br>

## ✅ Checklist de conclusão

- [ ] Entendi os três pilares de preço
- [ ] Sei que entrada é grátis e saída é cobrada
- [ ] Entendi o pay-as-you-go e os princípios de preço
- [ ] Conheço os três tipos do Free Tier
- [ ] Sei conectar custo com decisões de arquitetura
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

🏠 [Índice do Domínio 4](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 15 · Ferramentas de custo](./15-ferramentas-de-custo.md)

</div>
