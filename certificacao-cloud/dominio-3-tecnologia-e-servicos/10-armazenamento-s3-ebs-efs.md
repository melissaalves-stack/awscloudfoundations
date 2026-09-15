# Módulo 10 · Armazenamento: S3, EBS e EFS

> **Domínio:** 3 · Tecnologia e Serviços · **Tempo estimado:** 4h · **Pré-requisitos:** Módulo 09
> **Peso na prova:** parte do Domínio 3 (**34%**). Os **três tipos de armazenamento** e as **classes do S3** são recorrentes.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Diferenciar os **três tipos de armazenamento**: objetos (S3), blocos (EBS) e arquivos (EFS).
- Entender o **Amazon S3**, sua durabilidade e as **classes de armazenamento**.
- Saber quando usar **EBS** (disco de uma instância) vs. **EFS** (compartilhado).
- Reconhecer o cenário certo para cada serviço na prova.

<br>

---

<br>

## 🎬 Onde você guarda suas coisas?

Pensa em três formas de guardar objetos na vida real. Você tem um **guarda-volumes** para coisas que quer acessar de qualquer lugar (fotos, documentos). Tem o **HD do seu computador**, colado à máquina, para o que ela usa o tempo todo. E tem uma **pasta compartilhada** que a família inteira acessa ao mesmo tempo.

A AWS tem exatamente esses três tipos — e a prova adora dar um cenário e perguntar qual usar. Vamos aos três.

<br>

---

<br>

## 🧠 Parte 1 — Os três jeitos de guardar dados

| Tipo | O que é | Analogia | Serviço AWS |
|:--|:--|:--|:--|
| 🗂️ **Objetos** | Arquivos guardados como "objetos" com metadados, acessados pela internet. | Guarda-volumes gigante e infinito | **Amazon S3** |
| 🧱 **Blocos** | Um "HD virtual" ligado a **uma** instância EC2. | O HD interno do seu PC | **Amazon EBS** |
| 📁 **Arquivos** | Um sistema de arquivos compartilhado por **várias** instâncias. | Pasta de rede compartilhada | **Amazon EFS** |

> [!IMPORTANT]
> Essa tabela é o coração do módulo. A pergunta-chave para escolher: **"quantas máquinas precisam acessar, e como?"** Acesso pela internet, qualquer arquivo, escala infinita → **S3**. Disco rápido colado a **uma** instância → **EBS**. Pasta compartilhada por **várias** instâncias ao mesmo tempo → **EFS**.

<br>

## 🗂️ Parte 2 — Amazon S3: o armazenamento de objetos

O **Amazon S3 (Simple Storage Service)** guarda **qualquer quantidade** de arquivos (objetos) dentro de "pastas" de nível superior chamadas **buckets**. É acessível pela internet, escala praticamente sem limite e é um dos serviços mais usados da AWS — para backups, fotos, vídeos, sites estáticos, data lakes.

O que torna o S3 especial:
- **Durabilidade de 99,999999999%** — os famosos **"11 noves"**. Na prática, a AWS replica cada objeto por vários dispositivos e AZs, tornando a perda de dados quase impossível.
- Escala automática: você não provisiona tamanho; joga o dado e pronto.

> [!NOTE]
> Lembra do Domínio 1? O **nome do bucket é único no mundo inteiro**, mas o **S3 é um serviço regional** (seus dados vivem na Região escolhida, replicados entre AZs). "Nome global, serviço regional" — pegadinha que já vimos e que volta aqui.

> [!TIP]
> **Durabilidade ≠ disponibilidade.** Durabilidade (11 noves) = seu dado **não se perde**. Disponibilidade = você **consegue acessá-lo agora**. São métricas diferentes; a prova gosta de testar se você sabe distinguir.

<br>

## 🎚️ Parte 3 — Classes de armazenamento do S3

Nem todo dado é acessado com a mesma frequência. Guardar uma foto que você vê todo dia e um backup de 5 anos atrás pelo mesmo preço seria desperdício. Por isso o S3 tem **classes**, cada uma com um equilíbrio custo × acesso:

| Classe | Para quê | Custo |
|:--|:--|:--|
| **S3 Standard** | Dados acessados com frequência. | 💵💵💵 |
| **S3 Intelligent-Tiering** | A AWS move o dado para a classe ideal **automaticamente**, conforme o uso. | Variável |
| **S3 Standard-IA** (Infrequent Access) | Acesso **pouco frequente**, mas rápido quando preciso. | 💵💵 |
| **S3 Glacier / Deep Archive** | **Arquivamento** de longo prazo (recuperação em minutos a horas). | 💵 (baixíssimo) |

> [!TIP]
> **Mapeando gatilho → classe:**
> - "acesso frequente" → **Standard**
> - "não sei o padrão de acesso / quero automático" → **Intelligent-Tiering**
> - "raramente acessado, mas preciso rápido às vezes" → **Standard-IA**
> - "arquivo morto / conformidade / anos guardado, pode demorar pra recuperar" → **Glacier / Deep Archive**

> [!CAUTION]
> **Pegadinha:** escolher **Glacier** para dados que precisam ser acessados a todo momento. Glacier é baratíssimo justamente porque a recuperação **não é instantânea** — é para arquivo morto. Se precisa de acesso rápido e frequente, é Standard.

<br>

## 🧱 Parte 4 — Amazon EBS: o HD da sua instância

O **Amazon EBS (Elastic Block Store)** é um **volume de blocos** — um "HD virtual" que você conecta a **uma** instância EC2. É onde ficam o sistema operacional e os dados que a instância acessa constantemente, com baixa latência.

Características que caem:
- Ligado a **uma única** instância, dentro de **uma AZ** (é **zonal**).
- Você pode tirar **snapshots** (backups pontuais), que são guardados no **S3** e permitem recriar o volume — inclusive em outra AZ.

> [!TIP]
> Pense no EBS como o **HD interno** do computador: rápido, dedicado àquela máquina. Se a questão fala em "disco persistente para uma instância EC2", é **EBS**.

<br>

## 📁 Parte 5 — Amazon EFS: o sistema de arquivos compartilhado

E quando **várias** instâncias precisam acessar os **mesmos** arquivos ao mesmo tempo? Aí entra o **Amazon EFS (Elastic File System)** — um sistema de arquivos compartilhado que várias instâncias montam simultaneamente, e que cresce e encolhe sozinho.

| | **Amazon EBS** | **Amazon EFS** |
|:--|:--|:--|
| Ligado a... | **1** instância | **Várias** instâncias |
| Analogia | HD interno | Pasta de rede compartilhada |
| Escopo | Uma AZ (zonal) | Regional (várias AZs) |

> [!IMPORTANT]
> A distinção **EBS × EFS** é resposta de prova pura: **um** servidor precisando de disco → **EBS**; **vários** servidores compartilhando os mesmos arquivos → **EFS**.

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **S3 = objetos (internet). EBS = blocos (1 instância). EFS = arquivos (várias instâncias).**
> - **S3: 11 noves de durabilidade.** Durabilidade (não perder) ≠ disponibilidade (acessar agora).
> - **Nome do bucket é global; o serviço S3 é regional.**
> - **Glacier = arquivo morto** (recuperação lenta). Não use para acesso frequente.
> - **EBS = 1 instância (zonal); EFS = várias instâncias (regional).**
> - **Snapshot de EBS vai para o S3** e pode recriar volumes em outra AZ.

<br>

## 🗺️ Mapa rápido pra revisão

| Serviço/conceito | Em uma frase |
|:--|:--|
| S3 | guarda-volumes infinito de objetos (11 noves) |
| Classes S3 | Standard (frequente) · IA (raro) · Glacier (arquivo) · Intelligent (automático) |
| EBS | HD virtual de UMA instância (zonal) |
| EFS | pasta compartilhada por VÁRIAS instâncias (regional) |
| Snapshot | backup do EBS guardado no S3 |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Uma empresa precisa armazenar milhões de imagens acessíveis pela internet, com escalabilidade praticamente ilimitada e altíssima durabilidade. Qual serviço?**

- **A)** Amazon EBS
- **B)** Amazon S3
- **C)** Amazon EFS
- **D)** Instance Store

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Amazon S3**
>
> Armazenamento de **objetos**, acessível pela internet, escala ilimitada e 11 noves de durabilidade — o caso clássico do S3.
>
> - **A)** ❌ — EBS é disco de uma instância, não escala "infinita" pela internet.
> - **C)** ❌ — EFS é sistema de arquivos compartilhado entre instâncias, não o ideal para servir milhões de imagens pela web.
> - **D)** ❌ — Instance Store é temporário e some quando a instância para.

</details>

<br>

**2. Um backup precisa ser guardado por 7 anos por exigência legal, quase nunca será acessado, e o custo deve ser o menor possível (tudo bem se a recuperação demorar). Qual classe do S3?**

- **A)** S3 Standard
- **B)** S3 Standard-IA
- **C)** S3 Glacier Deep Archive
- **D)** S3 Intelligent-Tiering

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) S3 Glacier Deep Archive**
>
> Arquivamento de **longo prazo**, acesso raríssimo e **custo mínimo** (recuperação pode demorar) = Glacier Deep Archive.
>
> - **A)** ❌ — Standard é caro para dado que quase nunca se acessa.
> - **B)** ❌ — IA é para acesso pouco frequente mas rápido; mais caro que Glacier para arquivo morto.
> - **D)** ❌ — Intelligent-Tiering serve quando o padrão de acesso é imprevisível, não para arquivo morto conhecido.

</details>

<br>

**3. Uma única instância EC2 precisa de um volume de disco persistente e de baixa latência para o sistema operacional e os dados da aplicação. Qual serviço?**

- **A)** Amazon S3
- **B)** Amazon EFS
- **C)** Amazon EBS
- **D)** Amazon Glacier

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) Amazon EBS**
>
> Disco de **blocos** persistente ligado a **uma** instância = EBS (o "HD interno").
>
> - **A)** ❌ — S3 é objetos pela internet, não disco de instância.
> - **B)** ❌ — EFS é para compartilhar entre várias instâncias.
> - **D)** ❌ — Glacier é arquivamento no S3.

</details>

<br>

**4. Várias instâncias EC2 precisam ler e gravar nos MESMOS arquivos simultaneamente. Qual serviço atende?**

- **A)** Amazon EBS
- **B)** Amazon EFS
- **C)** Amazon S3 Glacier
- **D)** Instance Store

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Amazon EFS**
>
> Sistema de arquivos **compartilhado** por várias instâncias ao mesmo tempo = EFS.
>
> - **A)** ❌ — um volume EBS se liga a uma instância por vez.
> - **C)** ❌ — Glacier é arquivamento.
> - **D)** ❌ — Instance Store é temporário e local a uma instância.

</details>

<br>

**5. Selecione as DUAS afirmações corretas.** *(múltipla resposta — escolha 2)*

- **A)** O S3 oferece durabilidade de 11 noves (99,999999999%).
- **B)** Durabilidade e disponibilidade são exatamente a mesma métrica.
- **C)** O EBS liga-se tipicamente a uma instância e reside em uma AZ (zonal).
- **D)** O Glacier é ideal para dados acessados a cada segundo.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** (11 noves) e **C** (EBS zonal, ligado a uma instância) estão corretas.
>
> - **B)** ❌ — durabilidade (não perder) ≠ disponibilidade (acessar agora).
> - **D)** ❌ — Glacier é arquivo morto; recuperação não é instantânea.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos de *Storage*, *S3*, *EBS* e *EFS* no Cloud Practitioner Essentials.
- ✍️ **Desafio dos três baldes:** para 5 cenários (foto de app, disco de um servidor, pasta compartilhada por 10 servidores, backup de 10 anos, dado com acesso imprevisível), diga o serviço/classe. Acertou os 5? Módulo dominado.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Armazenamento de objetos** | Arquivos com metadados, acessados pela internet (S3). |
| **Armazenamento em blocos** | "HD virtual" ligado a uma instância (EBS). |
| **Armazenamento de arquivos** | Sistema de arquivos compartilhado entre instâncias (EFS). |
| **Bucket** | "Pasta" de nível superior do S3 (nome único global). |
| **Classe de armazenamento** | Nível de custo/acesso do S3 (Standard, IA, Glacier, Intelligent-Tiering). |
| **Durabilidade** | Probabilidade de não perder um dado (S3: 11 noves). |
| **Disponibilidade** | Capacidade de acessar o dado quando necessário. |
| **Snapshot** | Backup pontual de um volume EBS, guardado no S3. |

<br>

## ✅ Checklist de conclusão

- [ ] Diferencio objetos (S3), blocos (EBS) e arquivos (EFS)
- [ ] Entendi o S3, os buckets e os 11 noves de durabilidade
- [ ] Sei escolher a classe do S3 pelo padrão de acesso
- [ ] Não confundo durabilidade com disponibilidade
- [ ] Distingo EBS (1 instância) de EFS (várias)
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 09](./09-computacao-ec2-containers-serverless.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 3](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 11 · Redes: VPC, DNS e CloudFront](./11-redes-vpc-dns-cloudfront.md)

</div>
