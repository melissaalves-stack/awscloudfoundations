# Módulo 12 · Bancos de dados na AWS

> **Domínio:** 3 · Tecnologia e Serviços · **Tempo estimado:** 2h30 · **Pré-requisitos:** Módulo 11

## 🎯 Objetivos de aprendizagem

Ao final deste módulo, você será capaz de:

- Diferenciar bancos **relacionais** e **não relacionais**.
- Conhecer **RDS**, **Aurora**, **DynamoDB** e outros bancos gerenciados.
- Escolher o banco certo para cada caso.

<br>

---

<br>

## 🧠 Conteúdo

<br>

### 1. Relacional vs. não relacional

| | **Relacional (SQL)** | **Não relacional (NoSQL)** |
|:--|:--|:--|
| Estrutura | Tabelas com linhas e colunas fixas. | Flexível (documentos, chave-valor). |
| Analogia | Uma planilha bem organizada. | Um caderno de anotações livres. |
| Bom para | Dados estruturados, relações complexas. | Escala massiva, dados variados, alta velocidade. |
| Exemplos AWS | Amazon RDS, Aurora | Amazon DynamoDB |

> [!TIP]
> Regra rápida: se seus dados cabem bem em **tabelas com relações** (clientes, pedidos, produtos), pense **relacional (RDS)**. Se você precisa de **escala enorme e flexibilidade** (carrinho de compras, sessões, IoT), pense **DynamoDB**.

<br>

### 2. Amazon RDS — banco relacional gerenciado

O **Amazon RDS (Relational Database Service)** roda bancos relacionais populares (**MySQL, PostgreSQL, MariaDB, Oracle, SQL Server**) sem você precisar cuidar do servidor: a AWS faz backups, patches e alta disponibilidade.

> [!NOTE]
> Lembra do [Módulo 04](../dominio-2-seguranca-e-conformidade/04-modelo-responsabilidade-compartilhada.md)? No RDS, a AWS cuida do SO e do patch do banco. Você cuida dos **dados** e do **acesso**.

<br>

### 3. Amazon Aurora — o "turbo" relacional da AWS

O **Amazon Aurora** é o banco relacional próprio da AWS, compatível com MySQL e PostgreSQL, porém **muito mais rápido** e com alta disponibilidade embutida. É a opção premium dentro do RDS.

<br>

### 4. Amazon DynamoDB — NoSQL serverless

O **Amazon DynamoDB** é um banco **não relacional** (chave-valor e documentos), **serverless**, com desempenho em **milissegundos** em qualquer escala. Não há servidor para gerenciar e ele escala praticamente sem limite.

<br>

### 5. Bancos para necessidades específicas

A AWS tem um banco "sob medida" para vários cenários. Você só precisa reconhecer o propósito de cada um:

| Serviço | Especialidade |
|:--|:--|
| ⚡ **Amazon ElastiCache** | Cache em memória (Redis/Memcached) para respostas ultrarrápidas. |
| 📊 **Amazon Redshift** | Data warehouse para análise de grandes volumes (BI). |
| 🕸️ **Amazon Neptune** | Banco de grafos (relações complexas, redes sociais). |
| 📄 **Amazon DocumentDB** | Banco de documentos compatível com MongoDB. |

```mermaid
flowchart TD
    Q["Preciso de um banco"] --> A{"Meus dados são<br/>estruturados/relacionais?"}
    A -->|Sim| RDS["🗄️ RDS / Aurora"]
    A -->|Não, preciso de escala<br/>e flexibilidade| DDB["⚡ DynamoDB"]
    Q --> B{"Preciso analisar<br/>grandes volumes (BI)?"}
    B -->|Sim| RS["📊 Redshift"]
    Q --> C{"Preciso de respostas<br/>ultrarrápidas em cache?"}
    C -->|Sim| EC["⚡ ElastiCache"]
```

<br>

---

<br>

## ❓ Quiz — teste seus conhecimentos

<br>

**1. Qual serviço é o banco de dados RELACIONAL gerenciado da AWS (MySQL, PostgreSQL etc.)?**

- **A)** Amazon DynamoDB.
- **B)** Amazon RDS.
- **C)** Amazon S3.
- **D)** Amazon Redshift.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — O **Amazon RDS** roda bancos **relacionais** gerenciados.

</details>

<br>

**2. Você precisa de um banco NoSQL, serverless, com desempenho em milissegundos em escala enorme. Qual usar?**

- **A)** Amazon RDS.
- **B)** Amazon Aurora.
- **C)** Amazon DynamoDB.
- **D)** Amazon Neptune.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: C)** — O **DynamoDB** é o banco **NoSQL serverless** da AWS, rápido e altamente escalável.

</details>

<br>

**3. Qual serviço é um data warehouse feito para análise de grandes volumes (BI)?**

- **A)** Amazon Redshift.
- **B)** Amazon ElastiCache.
- **C)** Amazon RDS.
- **D)** Amazon DynamoDB.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: A)** — O **Amazon Redshift** é o **data warehouse** para análises e Business Intelligence.

</details>

<br>

**4. Qual serviço fornece cache em memória (Redis/Memcached) para respostas ultrarrápidas?**

- **A)** Amazon Aurora.
- **B)** Amazon ElastiCache.
- **C)** Amazon Neptune.
- **D)** Amazon DocumentDB.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — O **Amazon ElastiCache** oferece **cache em memória** para acelerar aplicações.

</details>

<br>

**5. O Amazon Aurora é compatível com quais bancos?**

- **A)** Apenas Oracle.
- **B)** MySQL e PostgreSQL.
- **C)** Apenas SQL Server.
- **D)** Nenhum, é totalmente proprietário.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — O **Aurora** é compatível com **MySQL e PostgreSQL**, com desempenho e disponibilidade superiores.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → procure por *"Databases on AWS"* e *"Amazon RDS"*.
- 🔗 Para cada cenário (loja online, rede social, relatório financeiro), escolha mentalmente o banco mais adequado e justifique.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Relacional (SQL)** | Banco em tabelas com linhas e colunas. |
| **Não relacional (NoSQL)** | Banco flexível (chave-valor, documentos). |
| **Amazon RDS** | Banco relacional gerenciado. |
| **Amazon Aurora** | Banco relacional premium da AWS (MySQL/PostgreSQL). |
| **Amazon DynamoDB** | Banco NoSQL serverless. |
| **Amazon Redshift** | Data warehouse para BI. |
| **Amazon ElastiCache** | Cache em memória. |
| **Neptune / DocumentDB** | Bancos de grafos / documentos. |

<br>

## ✅ Checklist de conclusão

- [ ] Li todo o conteúdo do módulo
- [ ] Diferencio bancos relacionais e não relacionais
- [ ] Conheço RDS, Aurora e DynamoDB
- [ ] Reconheço Redshift, ElastiCache, Neptune e DocumentDB
- [ ] Sei escolher o banco certo por cenário
- [ ] Fiz o quiz
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 11](./11-redes-vpc-dns-cloudfront.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 3](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 13 · Escalabilidade e alta disponibilidade](./13-escalabilidade-e-alta-disponibilidade.md)

</div>
