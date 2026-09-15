# Módulo 09 · Computação: EC2, containers e serverless

> **Domínio:** 3 · Tecnologia e Serviços · **Tempo estimado:** 5h · **Pré-requisitos:** Módulo 08
> **Peso na prova:** parte do Domínio 3 (**34%**). Computação é um dos assuntos mais densos do exame — e os **modelos de compra do EC2** são presença quase garantida.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Entender o **Amazon EC2** e escolher a **família de instância** certa para cada carga.
- Dominar os **modelos de compra** (On-Demand, Reserved/Savings Plans, Spot, Dedicated) — o tema que mais cai.
- Entender **containers** (ECS, EKS, Fargate) e o modelo **serverless** (Lambda).
- Saber **escolher** entre EC2, containers e serverless para cada situação.

<br>

---

<br>

## 🎬 Aluguel, apartamento mobiliado ou hotel?

Pensa em três formas de ter onde morar. Você pode **construir sua casa** (controle total, mas você cuida de tudo). Pode **alugar um apartamento mobiliado** (mais praticidade, menos trabalho). Ou pode **se hospedar num hotel** e pagar só as noites que ficou (zero manutenção, paga pelo uso).

Computação na AWS é exatamente isso: **EC2** é construir/alugar sua máquina (você gerencia mais), **containers** são um meio-termo empacotado, e **serverless** é o hotel — você só traz seu código e paga pelo uso, sem pensar em servidor. Vamos aos três.

<br>

---

<br>

## 🖥️ Parte 1 — Amazon EC2: o servidor na nuvem

O **Amazon EC2 (Elastic Compute Cloud)** entrega **servidores virtuais** (chamados **instâncias**) sob demanda. É o serviço de computação mais fundamental da AWS — a "casa que você aluga e configura do seu jeito".

Cada instância nasce de uma **AMI (Amazon Machine Image)** — um "molde" com o sistema operacional e os programas já instalados. Você escolhe a AMI, o tamanho e onde rodar, e em minutos tem um servidor no ar.

> [!NOTE]
> Lembra do Domínio 1? A instância EC2 é **zonal** (roda numa AZ específica). É por isso que, para alta disponibilidade, você distribui instâncias em **várias AZs** — assunto que fecha este domínio no Módulo 13.

<br>

## 🧬 Parte 2 — Famílias de instância: cada tarefa, um tipo

Nem toda carga precisa da mesma coisa: um site pequeno pede equilíbrio; um treino de IA pede GPU. A AWS agrupa as instâncias em **famílias otimizadas**:

| Família | Otimizada para | Exemplo de uso |
|:--|:--|:--|
| ⚖️ **Uso geral** | Equilíbrio entre CPU, memória e rede | Servidores web, apps pequenos |
| 🧮 **Otimizada para computação** | Muito processamento (CPU) | Análise científica, jogos |
| 🧠 **Otimizada para memória** | Muita RAM | Bancos de dados em memória |
| 💾 **Otimizada para armazenamento** | Muito acesso a disco | Data warehouses |
| 🎮 **Computação acelerada** | GPUs | Machine learning, renderização |

> [!TIP]
> Você não precisa decorar nomes técnicos (m5, c6, r6…). Basta **casar a necessidade com a família**: "precisa de muita RAM" → memória; "precisa de GPU pra IA" → computação acelerada; "site comum" → uso geral.

<br>

## 💰 Parte 3 — Modelos de compra (a parte que MAIS cai)

Aqui está o tema campeão de questões do Domínio 3. A mesma instância pode ser paga de quatro formas, cada uma para um cenário:

| Modelo | Como funciona | Melhor para | Frase-gatilho |
|:--|:--|:--|:--|
| ⏱️ **On-Demand** | Paga pelo uso, sem compromisso. | Cargas **imprevisíveis**, testes, curta duração. | "sem compromisso / imprevisível" |
| 📉 **Savings Plans / Reserved** | Compromisso de **1–3 anos** por grande desconto. | Cargas **estáveis e previsíveis**. | "carga constante / reduzir custo a longo prazo" |
| 🏷️ **Spot** | Usa capacidade **ociosa** com até ~90% de desconto, mas **pode ser interrompida**. | Tarefas **tolerantes a interrupção** (lote, processamento em massa). | "pode ser interrompida / máximo desconto" |
| 🖥️ **Dedicated Hosts** | Um servidor **físico inteiro só para você**. | Exigências de **licenciamento** ou conformidade. | "hardware dedicado / licença específica" |

> [!IMPORTANT]
> **O mapa de decisão que resolve a maioria das questões:**
> - Imprevisível, curto, sem querer se comprometer → **On-Demand**
> - Roda o tempo todo, previsível, quer economizar → **Reserved / Savings Plans**
> - Pode ser interrompida sem problema e quer o **maior desconto** → **Spot**
> - Precisa de servidor físico exclusivo (licença/conformidade) → **Dedicated Hosts**

> [!CAUTION]
> **Pegadinha clássica:** usar **Spot** para uma carga crítica que **não pode parar** (ex.: o banco de dados de produção). Errado — Spot pode ser interrompido a qualquer momento. Spot é para o que **tolera** interrupção (processamento em lote, renderização). Carga crítica e constante = Reserved/Savings.

<br>

## 📦 Parte 4 — Além das máquinas virtuais: containers

Um **container** empacota sua aplicação com tudo que ela precisa para rodar (código, bibliotecas, dependências) numa unidade leve e portátil — que roda igual em qualquer lugar. É mais leve e rápido que uma máquina virtual inteira.

Na AWS, três serviços cuidam disso:

| Serviço | O que é |
|:--|:--|
| 🐳 **Amazon ECS** | Orquestrador de containers **próprio da AWS** (mais simples). |
| ☸️ **Amazon EKS** | **Kubernetes** gerenciado (o padrão de mercado, portável). |
| 🚀 **AWS Fargate** | Roda containers **sem você gerenciar servidores** — serverless para containers. |

> [!TIP]
> Distinção que cai: **ECS/EKS** ainda podem exigir que você gerencie os servidores (as instâncias EC2 por baixo). O **Fargate** tira isso de você — é a opção **serverless** para containers. "Rodar containers sem gerenciar a infraestrutura" → **Fargate**.

<br>

## ⚡ Parte 5 — Serverless: esqueça os servidores

**Serverless** ("sem servidor") não significa que não há servidores — significa que **você não os gerencia**. Você entrega só o **código**, e a AWS cuida de provisionar, escalar e cobrar apenas pela execução.

O serviço-estrela é o **AWS Lambda**: você sobe uma função, ela é disparada por um **evento** (um upload no S3, uma chamada de API, um horário) e roda sozinha. Você paga **apenas pelo tempo de execução** — se ninguém chama, você não paga nada.

> [!TIP]
> **A analogia do hotel:** você não constrói o prédio nem contrata a equipe — só se hospeda quando precisa e paga as noites que usou. O Lambda é o hotel da computação. Gatilhos de prova para Lambda: "executar código em resposta a eventos", "sem gerenciar servidores", "pagar só pela execução".

<br>

## 🤔 Parte 6 — Como escolher?

| Se você precisa de... | Use |
|:--|:--|
| Controle total do servidor e do SO | 🖥️ **EC2** |
| Empacotar apps de forma portátil, com orquestração | 📦 **Containers (ECS/EKS)** |
| Rodar containers sem gerenciar servidores | 🚀 **Fargate** |
| Executar código por evento, sem servidor, pagando pelo uso | ⚡ **Lambda (serverless)** |

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **On-Demand** = imprevisível/sem compromisso. **Reserved/Savings** = constante/previsível (economiza). **Spot** = tolera interrupção (maior desconto). **Dedicated** = hardware exclusivo (licença).
> - **Não use Spot para carga crítica que não pode parar.**
> - **Fargate** = containers **sem gerenciar servidores** (serverless para containers).
> - **Lambda** = código por evento, sem servidor, paga pela execução.
> - **Serverless não é "sem servidor"** — é "sem *gerenciar* servidor".
> - Escolha a **família** pela necessidade (memória, CPU, GPU…), não pelo nome técnico.

<br>

## 🗺️ Mapa rápido pra revisão

| Conceito | Em uma frase |
|:--|:--|
| EC2 | servidor virtual que você configura (a casa alugada) |
| AMI | molde com SO e software |
| On-Demand / Reserved / Spot / Dedicated | pagar por uso / compromisso / ociosa barata / hardware exclusivo |
| ECS / EKS | orquestração de containers (AWS / Kubernetes) |
| Fargate | containers sem gerenciar servidor |
| Lambda | código por evento, serverless (o hotel) |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Uma empresa roda um processamento de dados em lote que pode ser interrompido e retomado sem problemas, e quer o menor custo possível. Qual modelo de compra do EC2 é o ideal?**

- **A)** On-Demand
- **B)** Reserved Instances
- **C)** Spot
- **D)** Dedicated Hosts

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) Spot**
>
> Cargas **tolerantes a interrupção** que buscam o **máximo desconto** são o caso perfeito para Spot (até ~90% off usando capacidade ociosa).
>
> - **A)** ❌ — On-Demand não dá o maior desconto.
> - **B)** ❌ — Reserved é para cargas constantes de longo prazo, não para lote interrompível.
> - **D)** ❌ — Dedicated é para licenciamento/hardware exclusivo, mais caro.

</details>

<br>

**2. Uma aplicação roda 24/7 o ano inteiro, com uso estável e previsível. A empresa quer reduzir custos comprometendo-se por alguns anos. Qual modelo escolher?**

- **A)** Spot
- **B)** On-Demand
- **C)** Savings Plans / Reserved Instances
- **D)** Fargate

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) Savings Plans / Reserved**
>
> Carga **constante e previsível** + disposição para compromisso de 1–3 anos = maior desconto com Reserved/Savings.
>
> - **A)** ❌ — Spot pode ser interrompido; ruim para carga contínua crítica.
> - **B)** ❌ — On-Demand é mais caro para uso constante.
> - **D)** ❌ — Fargate é forma de rodar containers, não um modelo de compra de EC2.

</details>

<br>

**3. Uma equipe quer executar uma função em resposta a cada upload de arquivo em um bucket S3, sem provisionar nem gerenciar servidores, pagando apenas quando a função roda. Qual serviço?**

- **A)** Amazon EC2
- **B)** AWS Lambda
- **C)** Amazon EKS
- **D)** Dedicated Hosts

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) AWS Lambda**
>
> Código disparado por **evento** (upload no S3), **sem gerenciar servidor**, pagando **pela execução** — é a definição do Lambda.
>
> - **A)** ❌ — EC2 exige provisionar e gerenciar o servidor.
> - **C)** ❌ — EKS orquestra containers; não é a forma mais simples de reagir a um evento pontual.
> - **D)** ❌ — Dedicated Hosts é o oposto de serverless.

</details>

<br>

**4. Uma empresa quer rodar aplicações em containers, mas não quer gerenciar as instâncias/servidores por baixo. Qual serviço atende melhor?**

- **A)** Amazon EC2
- **B)** AWS Fargate
- **C)** Amazon RDS
- **D)** AWS CloudFormation

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) AWS Fargate**
>
> Fargate roda containers em modelo **serverless** — sem você gerenciar os servidores subjacentes.
>
> - **A)** ❌ — com EC2 você gerencia os servidores.
> - **C)** ❌ — RDS é banco de dados.
> - **D)** ❌ — CloudFormation é IaC, não execução de containers.

</details>

<br>

**5. Selecione as DUAS afirmações corretas sobre computação na AWS.** *(múltipla resposta — escolha 2)*

- **A)** "Serverless" significa que a AWS gerencia os servidores por você, não que eles deixam de existir.
- **B)** Instâncias Spot são recomendadas para bancos de dados de produção que não podem parar.
- **C)** O modelo On-Demand é adequado para cargas imprevisíveis e de curta duração.
- **D)** A AMI é um modelo de compra do EC2.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** define serverless corretamente; **C** descreve o uso ideal do On-Demand.
>
> - **B)** ❌ — Spot pode ser interrompido; jamais para carga crítica que não pode parar.
> - **D)** ❌ — a AMI é o **molde** (SO + software) da instância, não um modelo de compra.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos de *Compute*, *EC2*, *containers* e *Lambda* no Cloud Practitioner Essentials.
- 🔗 **AWS SimuLearn** → cenários guiados de lançar uma instância e criar uma função Lambda.
- ✍️ **Desafio dos 4 modelos:** para 4 cargas diferentes (site 24/7, teste de 2 dias, renderização em lote, app com licença que exige hardware dedicado), diga qual modelo de compra usar. Se acertar os 4, esse tema é seu.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Amazon EC2** | Serviço de servidores virtuais (instâncias) sob demanda. |
| **Instância** | Um servidor virtual EC2 em execução. |
| **AMI** | Molde com SO e software para criar instâncias. |
| **Família de instância** | Categoria otimizada (uso geral, computação, memória, storage, GPU). |
| **On-Demand** | Pagamento pelo uso, sem compromisso. |
| **Reserved / Savings Plans** | Desconto por compromisso de 1–3 anos (carga estável). |
| **Spot** | Capacidade ociosa com grande desconto, pode ser interrompida. |
| **Dedicated Hosts** | Servidor físico exclusivo (licenciamento/conformidade). |
| **Container** | Pacote leve e portátil com o app e suas dependências. |
| **ECS / EKS** | Orquestradores de containers (AWS / Kubernetes). |
| **AWS Fargate** | Executa containers sem gerenciar servidores (serverless). |
| **AWS Lambda** | Executa código por evento, serverless, pagando pela execução. |

<br>

## ✅ Checklist de conclusão

- [ ] Entendi o EC2, a AMI e as famílias de instância
- [ ] Domino os 4 modelos de compra e quando usar cada um
- [ ] Sei que Spot não serve para carga crítica que não pode parar
- [ ] Entendi containers (ECS/EKS) e o papel do Fargate
- [ ] Entendi serverless e o AWS Lambda
- [ ] Sei escolher entre EC2, containers e serverless
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 08](./08-formas-de-interagir-com-a-aws.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 3](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 10 · Armazenamento: S3, EBS e EFS](./10-armazenamento-s3-ebs-efs.md)

</div>
