# Módulo 12 · Bancos de dados

> **Domínio:** 3 · Tecnologia e Serviços · **Tempo estimado:** 4h · **Pré-requisitos:** Módulo 11
> **Peso na prova:** parte do Domínio 3 (**34%**). Relacional vs. NoSQL e "qual banco para qual caso" são recorrentes.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Diferenciar bancos **relacionais (SQL)** de **não relacionais (NoSQL)**.
- Entender **RDS**, **Aurora** e **DynamoDB** e quando usar cada um.
- Reconhecer os **bancos especializados** (Redshift, ElastiCache, Neptune, DocumentDB) pelo caso de uso.

<br>

---

<br>

## 🎬 Planilha ou caderno de anotações?

Pensa em duas formas de guardar informação. Uma **planilha**: tudo em linhas e colunas rígidas, tudo relacionado, ótima quando os dados têm estrutura clara (uma tabela de clientes, pedidos, produtos). E um **caderno de anotações livre**: cada página do jeito que precisar, flexível, rápido de folhear mesmo com milhões de páginas.

Essas são as duas grandes famílias de bancos de dados — **relacional** (a planilha) e **NoSQL** (o caderno). A AWS tem serviços gerenciados para as duas, e a prova adora dar um cenário e perguntar qual escolher.

<br>

---

<br>

## 🧠 Parte 1 — Relacional vs. não relacional

| | 🗃️ **Relacional (SQL)** | 📦 **Não relacional (NoSQL)** |
|:--|:--|:--|
| Estrutura | Tabelas com linhas e colunas fixas | Flexível (documentos, chave-valor) |
| Analogia | Planilha bem organizada | Caderno de anotações livres |
| Bom para | Dados estruturados, relações complexas, transações | Escala massiva, dados variados, altíssima velocidade |
| Exemplos AWS | **Amazon RDS, Aurora** | **Amazon DynamoDB** |

> [!TIP]
> **Como decidir na prova:** dados bem estruturados, com relações e necessidade de consistência forte (banco, e-commerce, ERP) → **relacional (RDS/Aurora)**. Escala enorme, dados flexíveis, velocidade em qualquer volume (carrinho de compras, sessões, jogos, IoT) → **NoSQL (DynamoDB)**.

<br>

## 🗃️ Parte 2 — Amazon RDS: banco relacional gerenciado

O **Amazon RDS (Relational Database Service)** roda os motores relacionais conhecidos — **MySQL, PostgreSQL, MariaDB, Oracle e SQL Server** — de forma **gerenciada**. Lembra do Domínio 2? "Gerenciado" significa que a AWS cuida de provisionamento, patches, backups e recuperação; você foca nos dados e nas consultas.

> [!NOTE]
> Dois recursos do RDS que a prova valoriza:
> - **Multi-AZ** → cria uma cópia (standby) em **outra AZ** para **alta disponibilidade**. Se a AZ principal cai, ele faz failover automático. É sobre **resiliência**.
> - **Read Replicas** → cópias somente leitura para **distribuir a carga de leitura** e melhorar desempenho. É sobre **escalar leitura**.

> [!CAUTION]
> **Pegadinha:** Multi-AZ é para **disponibilidade** (sobreviver a falhas), não para acelerar leitura; Read Replica é para **desempenho de leitura**, não para failover. Não troque os dois.

<br>

## 🚀 Parte 3 — Amazon Aurora: o "turbo" relacional da AWS

O **Amazon Aurora** é o banco relacional premium da própria AWS, **compatível com MySQL e PostgreSQL**, mas com desempenho muito superior (a AWS cita até 5x o MySQL padrão) e alta disponibilidade embutida (replicação entre várias AZs). É a escolha quando você quer o mundo relacional com performance e resiliência de ponta, sem gerenciar tudo isso na mão.

> [!TIP]
> Gatilho de prova: "banco relacional na nuvem, compatível com MySQL/PostgreSQL, com alto desempenho e alta disponibilidade gerenciada" → **Aurora**.

<br>

## ⚡ Parte 4 — Amazon DynamoDB: NoSQL serverless

O **Amazon DynamoDB** é o banco **NoSQL** (chave-valor e documentos) da AWS. É **serverless**, entrega desempenho de **milissegundos de um dígito em qualquer escala**, e cresce praticamente sem limites — sem você gerenciar servidores.

> [!TIP]
> Casos clássicos de DynamoDB (e da prova): carrinho de compras, sessões de usuário, placares de jogos, catálogos, aplicações de altíssimo tráfego. Gatilhos: "NoSQL", "serverless", "escala massiva com baixa latência", "chave-valor".

<br>

## 🧰 Parte 5 — Bancos para necessidades específicas

A AWS segue a filosofia do **"banco certo para cada trabalho"** (purpose-built). Além dos acima, você deve **reconhecer** estes pela especialidade:

| Serviço | Especialidade | Frase-gatilho |
|:--|:--|:--|
| ⚡ **Amazon ElastiCache** | **Cache em memória** (Redis/Memcached) para respostas ultrarrápidas. | "cache / acelerar leituras / em memória" |
| 📊 **Amazon Redshift** | **Data warehouse** para análise de grandes volumes (BI). | "data warehouse / análise / BI / OLAP" |
| 🕸️ **Amazon Neptune** | Banco de **grafos** (relações complexas, redes sociais). | "grafos / relações conectadas" |
| 📄 **Amazon DocumentDB** | Banco de **documentos** compatível com MongoDB. | "documentos / compatível com MongoDB" |

> [!IMPORTANT]
> Você não precisa ser especialista em cada um — precisa **casar a palavra-gatilho com o serviço**. "Análise de grandes volumes / BI" é quase sempre **Redshift**. "Cache para acelerar" é **ElastiCache". "Grafos" é **Neptune**.

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **Relacional (RDS/Aurora) = estruturado, com relações. NoSQL (DynamoDB) = flexível, escala massiva.**
> - **Multi-AZ = disponibilidade (failover). Read Replica = desempenho de leitura.** Não troque.
> - **Aurora** = relacional premium da AWS, compatível com MySQL/PostgreSQL.
> - **DynamoDB** = NoSQL serverless, milissegundos em qualquer escala.
> - **Redshift = data warehouse/BI** (não é banco transacional do dia a dia).
> - **ElastiCache = cache em memória.**

<br>

## 🗺️ Mapa rápido pra revisão

| Serviço | Em uma frase |
|:--|:--|
| RDS | relacional gerenciado (MySQL, PostgreSQL, etc.) |
| Aurora | relacional premium da AWS (rápido, HA) |
| DynamoDB | NoSQL serverless, escala massiva |
| Redshift | data warehouse (BI/análise) |
| ElastiCache | cache em memória (rapidez) |
| Neptune / DocumentDB | grafos / documentos (MongoDB) |
| Multi-AZ × Read Replica | disponibilidade × desempenho de leitura |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Uma aplicação de e-commerce precisa de um banco com estrutura bem definida (clientes, pedidos, produtos) e transações consistentes. Qual tipo/serviço é o mais adequado?**

- **A)** NoSQL com Amazon DynamoDB
- **B)** Relacional com Amazon RDS
- **C)** Cache com Amazon ElastiCache
- **D)** Data warehouse com Amazon Redshift

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Relacional com RDS**
>
> Dados estruturados com relações e transações consistentes = banco **relacional** gerenciado (RDS).
>
> - **A)** ❌ — NoSQL é melhor para dados flexíveis/escala massiva, não para relações estruturadas com transações.
> - **C)** ❌ — ElastiCache é cache, não o banco principal.
> - **D)** ❌ — Redshift é para análise/BI, não para o transacional do dia a dia.

</details>

<br>

**2. Um jogo online precisa de um banco que responda em milissegundos, escale para milhões de jogadores e não exija gerenciar servidores. Qual serviço?**

- **A)** Amazon RDS
- **B)** Amazon Redshift
- **C)** Amazon DynamoDB
- **D)** Amazon Aurora

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) Amazon DynamoDB**
>
> NoSQL **serverless**, latência de milissegundos em **qualquer escala** — perfeito para jogos de alto tráfego.
>
> - **A) / D)** ❌ — relacionais; não escalam tão facilmente para esse padrão nem são serverless como o DynamoDB.
> - **B)** ❌ — Redshift é data warehouse (análise), não banco de aplicação em tempo real.

</details>

<br>

**3. Uma empresa quer garantir que seu banco relacional continue disponível mesmo se uma AZ falhar, com failover automático. Qual recurso do RDS usar?**

- **A)** Read Replica
- **B)** Multi-AZ
- **C)** ElastiCache
- **D)** Intelligent-Tiering

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Multi-AZ**
>
> Multi-AZ mantém uma cópia standby em outra AZ e faz **failover automático** — é o recurso de **alta disponibilidade**.
>
> - **A)** ❌ — Read Replica é para escalar **leitura**, não para failover.
> - **C)** ❌ — ElastiCache é cache.
> - **D)** ❌ — Intelligent-Tiering é uma classe do S3.

</details>

<br>

**4. Uma equipe de dados precisa analisar terabytes de dados históricos para relatórios de BI. Qual serviço é o indicado?**

- **A)** Amazon DynamoDB
- **B)** Amazon Redshift
- **C)** Amazon RDS
- **D)** Amazon Neptune

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Amazon Redshift**
>
> Redshift é o **data warehouse** da AWS, feito para análise de grandes volumes e BI.
>
> - **A)** ❌ — DynamoDB é NoSQL transacional, não analítico.
> - **C)** ❌ — RDS é transacional do dia a dia, não otimizado para análise massiva.
> - **D)** ❌ — Neptune é banco de grafos.

</details>

<br>

**5. Selecione as DUAS afirmações corretas.** *(múltipla resposta — escolha 2)*

- **A)** No RDS, Read Replicas ajudam a escalar a carga de leitura.
- **B)** O DynamoDB é um banco relacional que exige gerenciar servidores.
- **C)** O Amazon Aurora é compatível com MySQL e PostgreSQL.
- **D)** O Redshift é o serviço de cache em memória da AWS.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** (Read Replicas escalam leitura) e **C** (Aurora compatível com MySQL/PostgreSQL) estão corretas.
>
> - **B)** ❌ — o DynamoDB é **NoSQL e serverless** (não relacional, não exige gerenciar servidores).
> - **D)** ❌ — cache em memória é o **ElastiCache**; o Redshift é data warehouse.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos de *Databases* no Cloud Practitioner Essentials.
- ✍️ **Desafio do banco certo:** para 5 cenários (e-commerce, jogo massivo, relatórios de BI, cache de sessões, rede social com relações complexas), diga o serviço. Acertou os 5? Você já casa caso de uso com banco.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Relacional (SQL)** | Banco em tabelas com linhas e colunas, com relações. |
| **Não relacional (NoSQL)** | Banco flexível (chave-valor, documentos), escala massiva. |
| **Amazon RDS** | Banco relacional gerenciado (MySQL, PostgreSQL, etc.). |
| **Amazon Aurora** | Banco relacional premium da AWS (compatível MySQL/PostgreSQL). |
| **Amazon DynamoDB** | Banco NoSQL serverless, milissegundos em qualquer escala. |
| **Multi-AZ** | Cópia standby em outra AZ para alta disponibilidade (failover). |
| **Read Replica** | Cópia somente leitura para escalar desempenho de leitura. |
| **Amazon Redshift** | Data warehouse para análise/BI. |
| **Amazon ElastiCache** | Cache em memória (Redis/Memcached). |
| **Neptune / DocumentDB** | Bancos de grafos / de documentos (MongoDB). |

<br>

## ✅ Checklist de conclusão

- [ ] Diferencio relacional (SQL) de NoSQL
- [ ] Entendi RDS, Aurora e DynamoDB e quando usar cada um
- [ ] Distingo Multi-AZ (disponibilidade) de Read Replica (leitura)
- [ ] Reconheço Redshift, ElastiCache, Neptune e DocumentDB pelo caso
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 11](./11-redes-vpc-dns-cloudfront.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 3](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 13 · Escalabilidade e alta disponibilidade](./13-escalabilidade-e-alta-disponibilidade.md)

</div>
