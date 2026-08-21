# Módulo 10 · Armazenamento: S3, EBS e EFS

> **Domínio:** 3 · Tecnologia e Serviços · **Tempo estimado:** 3h · **Pré-requisitos:** Módulo 09

## 🎯 Objetivos de aprendizagem

Ao final deste módulo, você será capaz de:

- Diferenciar armazenamento de **objetos**, **blocos** e **arquivos**.
- Entender o **Amazon S3** e suas classes de armazenamento.
- Saber quando usar **EBS** e **EFS**.

<br>

---

<br>

## 🧠 Conteúdo

<br>

### 1. Três jeitos de guardar dados

A AWS oferece três **tipos** de armazenamento, cada um para um cenário:

| Tipo | O que é | Analogia 📦 | Serviço |
|:--|:--|:--|:--|
| 🗂️ **Objetos** | Arquivos guardados como "objetos" com metadados, acessados pela internet. | Um guarda-volumes gigante e infinito. | Amazon S3 |
| 🧱 **Blocos** | Um "HD virtual" ligado a uma instância EC2. | Um HD interno do seu PC. | Amazon EBS |
| 📁 **Arquivos** | Um sistema de arquivos compartilhado por várias instâncias. | Uma pasta de rede compartilhada. | Amazon EFS |

<br>

### 2. Amazon S3 — o armazenamento de objetos

O **Amazon S3 (Simple Storage Service)** guarda qualquer quantidade de arquivos ("objetos") dentro de "pastas" chamadas **buckets**. É praticamente **infinito**, muito durável e acessível pela internet.

> [!TIP]
> **Durabilidade de 11 noves** (99,999999999%): o S3 replica seus dados automaticamente por várias AZs. A chance de perder um objeto é minúscula. A prova adora essa "durabilidade de 11 noves".

Usos comuns: hospedar arquivos de sites, backups, data lakes, armazenar imagens e vídeos de aplicativos.

> [!CAUTION]
> Por padrão, buckets S3 são **privados**. Deixar um bucket público por engano é uma das falhas de segurança mais comuns — lembre-se do [Módulo 04](../dominio-2-seguranca-e-conformidade/04-modelo-responsabilidade-compartilhada.md): proteger os dados é responsabilidade **sua**.

<br>

### 3. Classes de armazenamento do S3

Nem todo dado é acessado com a mesma frequência. O S3 tem **classes** que equilibram custo e velocidade de acesso:

| Classe | Para quê | Custo |
|:--|:--|:--|
| **S3 Standard** | Dados acessados com frequência. | 💵💵💵 |
| **S3 Intelligent-Tiering** | A AWS move o dado para a classe ideal automaticamente. | Variável |
| **S3 Standard-IA** (Infrequent Access) | Acesso pouco frequente, mas rápido quando preciso. | 💵💵 |
| **S3 Glacier / Deep Archive** | Arquivamento de longo prazo (recuperação em minutos/horas). | 💵 (bem barato) |

> [!NOTE]
> Macete: quanto **menos** você acessa, **mais barato** guardar — mas mais "devagar/caro" para recuperar. O **Glacier** é o "porão gelado" dos backups antigos.

<br>

### 4. Amazon EBS — o HD da sua instância

O **Amazon EBS (Elastic Block Store)** é um volume de armazenamento em **blocos** que se conecta a **uma** instância EC2, como um HD. Os dados **persistem** mesmo se a instância for desligada.

> [!IMPORTANT]
> O EBS é **zonal**: fica em uma AZ específica, presa à instância. Você pode tirar **snapshots** (backups) do EBS e guardá-los no S3.

<br>

### 5. Amazon EFS — o sistema de arquivos compartilhado

O **Amazon EFS (Elastic File System)** é um sistema de arquivos que **várias** instâncias EC2 podem acessar **ao mesmo tempo**. Cresce e encolhe automaticamente conforme você adiciona ou remove arquivos.

| | EBS | EFS |
|:--|:--|:--|
| Ligado a... | **1** instância | **Várias** instâncias |
| Analogia | HD interno | Pasta de rede compartilhada |
| Escopo | Uma AZ | Regional (várias AZs) |

<br>

---

<br>

## ❓ Quiz — teste seus conhecimentos

<br>

**1. Qual serviço é o armazenamento de OBJETOS da AWS, ideal para backups e arquivos de sites?**

- **A)** Amazon EBS.
- **B)** Amazon EFS.
- **C)** Amazon S3.
- **D)** Amazon EC2.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: C)** — O **Amazon S3** é o armazenamento de **objetos**, guardando arquivos em **buckets**.

</details>

<br>

**2. Você precisa de um "HD virtual" preso a uma única instância EC2. Qual serviço usar?**

- **A)** Amazon S3.
- **B)** Amazon EBS.
- **C)** Amazon EFS.
- **D)** AWS Lambda.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — O **Amazon EBS** é armazenamento em **blocos**, como um HD ligado a uma instância.

</details>

<br>

**3. Várias instâncias EC2 precisam acessar os mesmos arquivos ao mesmo tempo. Qual serviço atende?**

- **A)** Amazon EBS.
- **B)** Amazon EFS.
- **C)** Amazon Glacier.
- **D)** Amazon EC2.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — O **Amazon EFS** é um sistema de **arquivos compartilhado** entre várias instâncias.

</details>

<br>

**4. Qual classe do S3 é a mais indicada para arquivar dados por longo prazo com o menor custo?**

- **A)** S3 Standard.
- **B)** S3 Standard-IA.
- **C)** S3 Glacier / Deep Archive.
- **D)** S3 Intelligent-Tiering.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: C)** — O **S3 Glacier / Deep Archive** é o mais barato, ideal para **arquivamento de longo prazo**.

</details>

<br>

**5. Qual característica é famosa no Amazon S3?**

- **A)** Durabilidade de "11 noves" (99,999999999%).
- **B)** Só funciona em uma AZ.
- **C)** É público por padrão.
- **D)** Não permite backups.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: A)** — O S3 tem **durabilidade de 11 noves**, replicando dados por várias AZs. (E é **privado** por padrão!)

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → procure por *"Storage Fundamentals"* e *"Amazon S3"*.
- 🔗 **AWS SimuLearn** → jornada de **armazenamento**: pratique criar um bucket S3 e definir permissões em ambiente simulado.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Armazenamento de objetos** | Arquivos com metadados, acessados pela internet (S3). |
| **Armazenamento em blocos** | "HD virtual" ligado a uma instância (EBS). |
| **Armazenamento de arquivos** | Sistema de arquivos compartilhado (EFS). |
| **Bucket** | "Pasta" de nível superior do S3. |
| **Classe de armazenamento** | Nível de custo/acesso do S3 (Standard, IA, Glacier...). |
| **Durabilidade** | Probabilidade de não perder um dado (S3: 11 noves). |
| **Snapshot** | Backup pontual de um volume EBS, guardado no S3. |

<br>

## ✅ Checklist de conclusão

- [ ] Li todo o conteúdo do módulo
- [ ] Diferencio objetos, blocos e arquivos
- [ ] Entendo o S3, buckets e suas classes
- [ ] Sei quando usar EBS e quando usar EFS
- [ ] Lembro da durabilidade de 11 noves e que buckets são privados por padrão
- [ ] Fiz o quiz
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 09](./09-computacao-ec2-containers-serverless.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 3](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 11 · Redes](./11-redes-vpc-dns-cloudfront.md)

</div>
