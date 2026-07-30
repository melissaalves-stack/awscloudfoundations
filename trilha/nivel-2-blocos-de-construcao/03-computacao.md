# Módulo 03 · Computação: EC2, containers e serverless

> **Nível:** 2 · Os Blocos de Construção · **Tempo estimado:** 5h · **Pré-requisitos:** Nível 1 completo

## 🎯 Objetivos de aprendizagem
Ao final deste módulo, você será capaz de:
- [ ] Explicar o que é o Amazon EC2 e seus modelos de preço.
- [ ] Entender o conceito de containers (ECS, EKS, Fargate).
- [ ] Compreender o modelo serverless com o AWS Lambda.
- [ ] Escolher o serviço de computação certo para cada cenário.

---

## 🧠 Conteúdo

"Computação" é o poder de processamento — a parte que **executa** o seu código. A AWS oferece várias formas de obter esse poder, do mais controlável ao mais automático.

```mermaid
flowchart LR
    A[🖥️ EC2<br/>servidor completo] --> B[📦 Containers<br/>empacotado e leve]
    B --> C[⚡ Serverless<br/>só o código]
    A -.mais controle.-> A
    C -.menos gerência.-> C
```

### 1. Amazon EC2 — o servidor na nuvem

**EC2 (Elastic Compute Cloud)** é o serviço que te dá **servidores virtuais** (chamados **instâncias**) na nuvem. É como alugar um computador completo, que você liga em segundos e configura do seu jeito.

Você escolhe:
- 💪 **Tipo da instância** — quanta CPU e memória (de pequenininha a monstruosa).
- 💿 **AMI (Amazon Machine Image)** — o "molde" com o sistema operacional e programas.
- 🌍 **Região e AZ** — onde ela vai rodar (lembra do Módulo 01?).

> [!TIP]
> **Analogia:** EC2 é alugar um apartamento vazio. Você tem controle total — pinta, mobilia, decide tudo — mas também é responsável por cuidar de tudo lá dentro.

#### Modelos de preço do EC2
| Modelo | Quando usar | Vantagem |
|:--|:--|:--|
| **On-Demand** | Cargas curtas ou imprevisíveis | Paga por hora/segundo, sem compromisso |
| **Reserved / Savings Plans** | Cargas constantes e previsíveis | Grande desconto por compromisso de 1-3 anos |
| **Spot** | Tarefas que podem ser interrompidas | Descontos enormes usando capacidade ociosa |

### 2. Containers — empacotando sua aplicação

Um **container** empacota seu app com **tudo** que ele precisa para rodar (código, bibliotecas, dependências) em uma unidade leve e portátil. Assim, ele roda **igualzinho** em qualquer lugar.

> [!NOTE]
> **Analogia:** um container é como uma marmita 🍱. Tudo que a refeição precisa vem junto, fechadinho. Você leva pra onde quiser e ela continua a mesma.

Na AWS:
- **Amazon ECS** — orquestrador de containers da própria AWS.
- **Amazon EKS** — o mesmo, mas usando **Kubernetes** (padrão do mercado).
- **AWS Fargate** — roda containers **sem você gerenciar servidores** (modo serverless para containers).

### 3. Serverless — só o seu código

**Serverless** ("sem servidor") não significa que não existem servidores — significa que **você não precisa gerenciá-los**. Você entrega só o código, e a AWS cuida de tudo: provisiona, escala e cobra apenas pela execução.

O serviço-estrela é o **AWS Lambda**: você sobe uma função, define o **evento** que a dispara (ex.: alguém subiu um arquivo, uma API foi chamada) e pronto — ela roda sozinha.

```mermaid
flowchart LR
    E1[📤 Upload de arquivo] --> L[⚡ Função Lambda]
    E2[🌐 Chamada de API] --> L
    E3[⏰ Horário agendado] --> L
    L --> R[✅ Executa e cobra só pelo uso]
```

> [!TIP]
> **Analogia:** serverless é pegar um Uber 🚗. Você não compra o carro, não abastece, não estaciona. Você só pede a corrida quando precisa e paga pelo trajeto.

### 4. Qual escolher? 🤔

| Se você quer... | Use |
|:--|:--|
| Controle total sobre o servidor | 🖥️ **EC2** |
| Portabilidade e apps modernos empacotados | 📦 **Containers (ECS/EKS/Fargate)** |
| Rodar código pontual sem gerenciar nada | ⚡ **Lambda (serverless)** |

> [!NOTE]
> Não existe "o melhor" — existe o mais adequado. Grandes sistemas costumam **combinar os três**.

---

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → *"Compute"* no Cloud Practitioner Essentials + labs de EC2 e Lambda.
- 🔗 **AWS Builder Labs** → laboratório pré-configurado para lançar uma instância e criar uma função Lambda, **sem** conta própria.

---

## ❓ Quiz

<details>
<summary><b>1. O que é uma "instância" no EC2?</b></summary>

É um **servidor virtual** que você aluga na nuvem — um computador com CPU, memória e sistema operacional que você liga sob demanda.
</details>

<details>
<summary><b>2. Qual modelo de preço do EC2 dá os maiores descontos para tarefas interrompíveis?</b></summary>

O **Spot**, que usa a capacidade ociosa da AWS com grandes descontos — ideal para cargas que podem ser paradas e retomadas.
</details>

<details>
<summary><b>3. "Serverless" significa que não há servidores?</b></summary>

Não! Existem servidores, mas **você não os gerencia**. A AWS provisiona, escala e mantém tudo; você só cuida do seu código e paga pela execução.
</details>

<details>
<summary><b>4. Um app precisa rodar igual em qualquer ambiente e ser portátil. Qual tecnologia ajuda?</b></summary>

**Containers** — eles empacotam o app com todas as suas dependências, garantindo que rode da mesma forma em qualquer lugar.
</details>

---

## 📔 Glossário
| Termo | Significado |
|:--|:--|
| **EC2** | Servidores virtuais (instâncias) sob demanda. |
| **AMI** | "Molde" com sistema operacional e software para uma instância. |
| **Container** | Pacote leve com app + dependências, portátil. |
| **ECS / EKS / Fargate** | Serviços da AWS para rodar containers. |
| **Serverless** | Modelo onde você não gerencia servidores. |
| **AWS Lambda** | Serviço serverless que roda funções acionadas por eventos. |

## ✅ Checklist de conclusão
- [ ] Li todo o conteúdo do módulo
- [ ] Entendi EC2 e seus modelos de preço
- [ ] Compreendi containers e serverless
- [ ] Sei escolher o serviço certo para cada caso
- [ ] Fiz o quiz
- [ ] Pratiquei em um Builder Lab

---
🏠 [Índice do Nível 2](./README.md) · ➡️ [Módulo 04 · Armazenamento](./04-armazenamento.md)
