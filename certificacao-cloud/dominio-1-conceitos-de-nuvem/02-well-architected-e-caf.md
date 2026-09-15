# Módulo 02 · Frameworks: Well-Architected e Cloud Adoption Framework

> **Domínio:** 1 · Conceitos de Nuvem · **Tempo estimado:** 4h · **Pré-requisitos:** Módulos 00 e 01
> **Peso na prova:** parte do Domínio 1 (**24%**). Os **6 pilares** do Well-Architected são presença quase garantida no exame.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Entender por que a AWS criou **frameworks** — e a diferença entre os dois principais.
- Saber os **6 pilares do Well-Architected** e reconhecer cada um em um cenário.
- Entender as **6 perspectivas do Cloud Adoption Framework (CAF)** e para que servem.
- Não confundir **Well-Architected (arquitetura) com CAF (organização)** — a pegadinha favorita da prova nesse tema.

<br>

---

<br>

## 🎬 Duas perguntas que toda empresa faz

Imagine que uma empresa decidiu ir pra nuvem. Duas perguntas surgem quase no mesmo dia, mas são bem diferentes:

1. *"Essa aplicação que a gente vai construir — ela está **bem feita**? É segura? Aguenta uma falha? Não está desperdiçando dinheiro?"*
2. *"E a **empresa** — ela está pronta pra isso? As pessoas sabem trabalhar com nuvem? Quem cuida do orçamento, do risco, da segurança organizacional?"*

Repare: a primeira pergunta é sobre **o sistema**. A segunda é sobre **a organização**. A AWS criou um framework pra cada uma — e a prova adora testar se você sabe qual responde o quê.

| Framework | Responde à pergunta... | Foco |
|:--|:--|:--|
| 🏗️ **Well-Architected** | "Minha **arquitetura** está bem construída?" | O sistema técnico |
| 🧭 **Cloud Adoption (CAF)** | "Minha **empresa** está pronta para adotar a nuvem?" | A organização |

> [!TIP]
> **Âncora de memória:** Well-**Archit> ected** = **arquitetura** (o sistema). **C**AF = **C**ompanhia (a empresa). Se o cenário fala de *como construir uma aplicação*, é Well-Architected. Se fala de *como preparar a empresa/as pessoas/a governança*, é CAF.

<br>

---

<br>

## 🏗️ Parte 1 — O Well-Architected Framework: os 6 pilares

Pensa numa casa bem construída. Não basta ser bonita: ela precisa ter fundação firme, instalação elétrica segura, encanamento que não vaza, contas de luz que cabem no bolso. Uma arquitetura de nuvem é igual — e a AWS resume "estar bem construída" em **6 pilares**. A prova espera que você conheça todos.

| Pilar | O que ele garante | Analogia da casa 🏠 |
|:--|:--|:--|
| ⚙️ **Excelência Operacional** | Rodar, monitorar e melhorar os sistemas continuamente | Manutenção regular da casa |
| 🔒 **Segurança** | Proteger dados, sistemas e ativos | Fechaduras, alarme e cofre |
| 🛟 **Confiabilidade** | Recuperar-se de falhas e escalar sob demanda | Gerador e caixa d'água de reserva |
| ⚡ **Eficiência de Performance** | Usar os recursos certos, na medida certa | O eletrodoméstico certo pra cada tarefa |
| 💰 **Otimização de Custos** | Não pagar por nada além do necessário | Não deixar luz acesa em cômodo vazio |
| 🌱 **Sustentabilidade** | Reduzir o impacto ambiental das cargas | Painéis solares e economia de água |

> [!NOTE]
> **O pilar mais novo é a Sustentabilidade** — foi adicionado depois dos outros cinco. A prova, atenta às tendências, gosta de checar se você sabe que ele **existe** e que trata de **impacto ambiental** (reduzir consumo de energia e recursos das cargas de trabalho).

> [!IMPORTANT]
> Você não precisa decorar a definição acadêmica de cada pilar — precisa **reconhecê-lo por um cenário**. Exemplos de gatilho:
> - "criptografar dados e controlar acesso" → **Segurança**
> - "o sistema precisa sobreviver à queda de uma AZ" → **Confiabilidade**
> - "reduzir a fatura eliminando recursos ociosos" → **Otimização de Custos**
> - "automatizar implantações e monitorar a saúde do sistema" → **Excelência Operacional**
> - "escolher o tipo de instância mais adequado para a carga" → **Eficiência de Performance**
> - "diminuir a pegada de carbono da infraestrutura" → **Sustentabilidade**

> [!TIP]
> Existe a **AWS Well-Architected Tool**, uma ferramenta gratuita no Console que faz perguntas sobre a sua arquitetura e aponta onde ela está fraca em cada pilar. Se a prova mencionar "avaliar/revisar a arquitetura contra boas práticas", pense nessa ferramenta.

<br>

## 🧭 Parte 2 — O Cloud Adoption Framework (CAF): as 6 perspectivas

Agora a **outra** pergunta: a empresa está pronta? Construir uma boa aplicação não adianta se a organização não sabe operar na nuvem, ninguém treinou as equipes, e não há controle de orçamento e risco. O **CAF** organiza essa preparação em **6 perspectivas** — e a AWS as agrupa em dois blocos.

**As que cuidam do lado humano/negócio (fundação):**

| Perspectiva | Sobre o quê |
|:--|:--|
| 💼 **Negócio (Business)** | Garantir que a nuvem gere valor real para os objetivos da empresa. |
| 👥 **Pessoas (People)** | Preparar cultura, habilidades e as equipes para a mudança. |
| 🏛️ **Governança (Governance)** | Gerenciar riscos, orçamentos e conformidade. |

**As que cuidam do lado técnico (execução):**

| Perspectiva | Sobre o quê |
|:--|:--|
| 🖥️ **Plataforma (Platform)** | Construir e modernizar a infraestrutura na nuvem. |
| 🔐 **Segurança (Security)** | Garantir confidencialidade, integridade e disponibilidade. |
| 🔧 **Operações (Operations)** | Manter os serviços funcionando no dia a dia. |

> [!TIP]
> Você não precisa decorar as seis com precisão cirúrgica para o Cloud Practitioner. O essencial é: o **CAF é sobre a jornada da organização** rumo à nuvem (pessoas, processos, governança, tecnologia), enquanto o **Well-Architected é sobre a qualidade técnica de uma arquitetura**. Essa distinção é o que a prova cobra.

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **Não troque Well-Architected por CAF.** Cenário sobre *construir/avaliar uma aplicação* = Well-Architected. Cenário sobre *preparar a empresa/pessoas/governança* = CAF.
> - **Sustentabilidade É um pilar** do Well-Architected (o 6º). Se a questão listar só 5 pilares e você tiver que achar o que falta, provavelmente é a Sustentabilidade.
> - **Segurança aparece nos dois** — é um pilar do Well-Architected E uma perspectiva do CAF. Isso é normal; o que muda é o contexto (arquitetura vs. organização).
> - **Well-Architected Tool** = ferramenta gratuita para revisar arquitetura contra os pilares.
> - Não invente pilares. Se a alternativa citar algo como "Pilar de Marketing" ou "Pilar de Velocidade", é distrator.

<br>

## 🗺️ Mapa rápido pra revisão

| | Well-Architected | CAF |
|:--|:--|:--|
| **Pergunta** | A arquitetura está bem feita? | A empresa está pronta? |
| **Foco** | Sistema técnico | Organização |
| **Divisões** | 6 pilares | 6 perspectivas |
| **Elementos** | Op. Excelência, Segurança, Confiabilidade, Performance, Custos, Sustentabilidade | Negócio, Pessoas, Governança, Plataforma, Segurança, Operações |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Uma equipe quer avaliar se a arquitetura de uma nova aplicação segue as boas práticas da AWS em segurança, custo e confiabilidade. Qual framework/ferramenta usar?**

- **A)** Cloud Adoption Framework (CAF)
- **B)** AWS Well-Architected Framework (e a Well-Architected Tool)
- **C)** AWS Organizations
- **D)** AWS Budgets

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B)**
>
> Avaliar a **qualidade de uma arquitetura** contra boas práticas é exatamente o papel do **Well-Architected** (e da sua ferramenta).
>
> - **A)** ❌ — o CAF é sobre a prontidão da *organização*, não sobre uma arquitetura específica.
> - **C)** ❌ — Organizations gerencia várias contas, não avalia arquitetura.
> - **D)** ❌ — Budgets controla orçamento; não avalia arquitetura.

</details>

<br>

**2. Qual destes é o pilar mais recente do Well-Architected Framework, focado em reduzir o impacto ambiental das cargas de trabalho?**

- **A)** Eficiência de Performance
- **B)** Confiabilidade
- **C)** Sustentabilidade
- **D)** Excelência Operacional

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) Sustentabilidade**
>
> É o 6º e mais novo pilar, sobre minimizar consumo de energia/recursos e a pegada ambiental.
>
> - **A)** ❌ — trata de usar recursos de forma eficiente para desempenho, não de meio ambiente.
> - **B)** ❌ — trata de resiliência e recuperação de falhas.
> - **D)** ❌ — trata de operar e melhorar sistemas.

</details>

<br>

**3. Uma empresa está começando sua jornada para a nuvem e precisa preparar as equipes, definir governança de orçamento e alinhar a nuvem aos objetivos de negócio. Qual framework guia esse esforço organizacional?**

- **A)** Well-Architected Framework
- **B)** Cloud Adoption Framework (CAF)
- **C)** Shared Responsibility Model
- **D)** Well-Architected Tool

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) CAF**
>
> Preparar **pessoas, governança e negócio** para adotar a nuvem é o território do CAF e suas perspectivas.
>
> - **A) / D)** ❌ — são sobre a qualidade técnica de arquiteturas.
> - **C)** ❌ — o modelo de responsabilidade compartilhada é sobre segurança (Domínio 2), não sobre a jornada de adoção.

</details>

<br>

**4. Um arquiteto quer eliminar recursos ociosos e escolher opções de compra mais baratas para reduzir a fatura mensal. Qual pilar do Well-Architected orienta isso?**

- **A)** Otimização de Custos
- **B)** Segurança
- **C)** Sustentabilidade
- **D)** Confiabilidade

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: A) Otimização de Custos**
>
> Não pagar além do necessário — eliminar ociosidade e escolher bem os modelos de compra — é o pilar de **custos**.
>
> - **B)** ❌ — proteção de dados/acesso.
> - **C)** ❌ — impacto ambiental (embora reduzir recursos ajude os dois, o gatilho aqui é "reduzir a fatura").
> - **D)** ❌ — resiliência e recuperação.

</details>

<br>

**5. Selecione os DOIS itens que são pilares do Well-Architected Framework.** *(múltipla resposta — escolha 2)*

- **A)** Excelência Operacional
- **B)** Pessoas (People)
- **C)** Confiabilidade
- **D)** Governança (Governance)

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **Excelência Operacional** e **Confiabilidade** são pilares do Well-Architected.
>
> - **B) Pessoas** e **D) Governança** ❌ — essas são **perspectivas do CAF**, não pilares do Well-Architected. É exatamente a troca que a prova arma.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulo sobre o *Well-Architected Framework* no Cloud Practitioner Essentials.
- 🔗 Leia a página oficial dos **6 pilares** no site da AWS (sem login) — passe o olho em cada pilar.
- ✍️ **Desafio:** pegue uma aplicação simples imaginária (ex.: um site de vendas) e escreva uma frase por pilar dizendo o que você faria para atendê-lo. Se conseguir, os 6 pilares gravaram.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Well-Architected Framework** | Conjunto de boas práticas para construir arquiteturas na nuvem (6 pilares). |
| **Pilar** | Cada uma das 6 dimensões de qualidade de uma arquitetura. |
| **Well-Architected Tool** | Ferramenta gratuita que avalia sua arquitetura contra os pilares. |
| **Cloud Adoption Framework (CAF)** | Guia para a adoção organizacional da nuvem (6 perspectivas). |
| **Perspectiva** | Cada uma das 6 áreas de foco do CAF. |
| **Sustentabilidade** | Pilar (o mais novo) que trata do impacto ambiental das cargas de trabalho. |

<br>

## ✅ Checklist de conclusão

- [ ] Entendi a diferença entre "arquitetura bem feita" e "empresa pronta"
- [ ] Sei os 6 pilares do Well-Architected e reconheço cada um por um cenário
- [ ] Sei que Sustentabilidade é o pilar mais novo (impacto ambiental)
- [ ] Entendi o propósito do CAF e suas 6 perspectivas
- [ ] Não confundo Well-Architected (arquitetura) com CAF (organização)
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 01](./01-infraestrutura-global-da-aws.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 1](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 03 · Economia da nuvem e migração](./03-economia-da-nuvem-e-migracao.md)

</div>
