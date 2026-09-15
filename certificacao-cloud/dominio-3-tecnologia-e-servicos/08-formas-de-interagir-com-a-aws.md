# Módulo 08 · Formas de interagir com a AWS

> **Domínio:** 3 · Tecnologia e Serviços · **Tempo estimado:** 3h · **Pré-requisitos:** Domínios 1 e 2 completos
> **Peso na prova:** o Domínio 3 vale **34%** do CLF-C02 — o **maior** de todos. Começamos por como você "conversa" com a AWS.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Conhecer as **três portas de entrada** da AWS: Console, CLI e SDK — e quando usar cada uma.
- Entender que todas elas conversam com a AWS por baixo através de **APIs**.
- Saber o que é **Infraestrutura como Código (IaC)** e o papel do **AWS CloudFormation**.

<br>

---

<br>

## 🎬 A mesma casa, três chaves

Imagine que você precisa acender as luzes de uma casa inteligente. Você pode: apertar o interruptor na parede (simples e visual), dar um comando de voz ("acender a sala"), ou programar um app para acender tudo automaticamente às 18h. **Três formas diferentes de fazer a mesma coisa** — cada uma boa para um momento.

Com a AWS é igual. Você controla os mesmos recursos por três "portas" diferentes, e a prova gosta de perguntar qual é a mais adequada para cada situação.

<br>

---

<br>

## 🧠 Parte 1 — As três portas de entrada

| Forma | O que é | Para quem / quando |
|:--|:--|:--|
| 🖱️ **Console de Gerenciamento** | Interface **gráfica** no navegador (clicar e apontar). | Iniciantes, tarefas visuais, exploração, aprender. |
| ⌨️ **AWS CLI** (Command Line Interface) | Controlar a AWS por **comandos de terminal**. | Automação, scripts, tarefas repetitivas. |
| 🧩 **AWS SDK** (Software Development Kit) | Controlar a AWS **pelo código do seu app** (Python, Java, JS…). | Desenvolvedores integrando a AWS dentro das aplicações. |

> [!TIP]
> **Mapeando gatilho → resposta:**
> - "clicar visualmente / explorar / iniciante" → **Console**
> - "automatizar / script / terminal" → **CLI**
> - "integrar a AWS ao meu programa / dentro do código" → **SDK**

> [!IMPORTANT]
> **O detalhe que amarra tudo:** por baixo, as três portas fazem a mesma coisa — chamam a **API** da AWS. O Console traduz seus cliques em chamadas de API; a CLI traduz seus comandos; o SDK traduz as funções do seu código. É por isso que o **CloudTrail** (lembra do Domínio 2?) consegue registrar tudo: no fim, tudo vira uma chamada de API.

<br>

## 🏗️ Parte 2 — Infraestrutura como Código (IaC)

Imagine que você configurou uma infraestrutura inteira clicando no Console: uma VPC, três instâncias, um banco, regras de segurança. Agora precisa criar **tudo igual** num ambiente de testes. Refazer clique por clique? Lento e cheio de erros.

A solução é a **Infraestrutura como Código (IaC)**: em vez de clicar, você **descreve** a infraestrutura desejada num **arquivo de texto**, e a AWS a constrói sozinha a partir dele. O serviço que faz isso é o **AWS CloudFormation**.

> [!TIP]
> **A analogia da receita de bolo:** o Console é fazer o bolo "no olho", pitada por pitada — e cada vez sai um pouco diferente. A IaC é ter a **receita escrita**: qualquer um segue e o bolo sai **idêntico**, quantas vezes quiser. Com o CloudFormation, você versiona a receita, repete o ambiente sem erro e recria tudo em minutos.

> [!NOTE]
> Benefícios da IaC que a prova valoriza: **repetibilidade** (mesmo resultado sempre), **velocidade** (criar ambientes inteiros de uma vez), **rastreabilidade** (o arquivo fica versionado) e **menos erro humano**. Se a questão fala em "provisionar infraestrutura de forma automatizada, repetível e versionada", a resposta é **CloudFormation / IaC**.

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **Console = visual/gráfico. CLI = terminal/automação. SDK = dentro do código do app.**
> - Todas as três chamam a **API** por baixo — por isso tudo é auditável pelo CloudTrail.
> - **CloudFormation = Infraestrutura como Código** (provisionar por arquivo, repetível e versionado).
> - "Automatizar tarefas repetitivas no terminal" → CLI. "Recriar toda a infraestrutura de forma idêntica" → CloudFormation.

<br>

## 🗺️ Mapa rápido pra revisão

| Ferramenta | Em uma frase |
|:--|:--|
| Console | clicar e apontar (visual) |
| CLI | comandos no terminal (automação) |
| SDK | controlar a AWS pelo código do app |
| API | o que todas chamam por baixo |
| CloudFormation | a "receita escrita" da infraestrutura (IaC) |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Uma desenvolvedora quer que sua aplicação em Python crie e gerencie recursos da AWS diretamente pelo código. Qual ferramenta ela deve usar?**

- **A)** Console de Gerenciamento
- **B)** AWS CLI
- **C)** AWS SDK
- **D)** AWS CloudFormation

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) AWS SDK**
>
> O SDK permite controlar a AWS **de dentro do código** da aplicação (Python, Java, etc.).
>
> - **A)** ❌ — o Console é visual, para cliques manuais, não integração por código.
> - **B)** ❌ — a CLI é para comandos no terminal, não dentro da aplicação.
> - **D)** ❌ — CloudFormation provisiona infraestrutura por arquivo declarativo, não é a forma de um app chamar a AWS em tempo de execução.

</details>

<br>

**2. Uma equipe precisa recriar exatamente a mesma infraestrutura (VPC, instâncias, banco) em vários ambientes, de forma automatizada, repetível e versionada. Qual abordagem/serviço atende melhor?**

- **A)** Configurar tudo manualmente no Console em cada ambiente.
- **B)** Infraestrutura como Código com o AWS CloudFormation.
- **C)** Pedir para a AWS clonar a conta.
- **D)** Usar o AWS Artifact.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) CloudFormation (IaC)**
>
> Descrever a infraestrutura em um arquivo e deixar o CloudFormation construí-la garante repetibilidade e versionamento.
>
> - **A)** ❌ — manual é lento e propenso a erros e diferenças entre ambientes.
> - **C)** ❌ — não é assim que funciona.
> - **D)** ❌ — Artifact é para documentos de conformidade.

</details>

<br>

**3. Verdadeiro ou falso: "o Console, a CLI e o SDK controlam a AWS de formas independentes que não têm nada em comum."**

- **A)** Verdadeiro — são tecnologias totalmente separadas.
- **B)** Falso — por baixo, todos chamam a mesma API da AWS.
- **C)** Verdadeiro — só o Console usa a API.
- **D)** Falso — apenas a CLI e o SDK usam API; o Console não.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B)**
>
> As três são "tradutores" diferentes que, no fim, chamam a **mesma API** da AWS. Por isso tudo é auditável no CloudTrail.
>
> - **A), C), D)** ❌ — todas ignoram que o Console também converte cliques em chamadas de API.

</details>

<br>

**4. Selecione as DUAS afirmações corretas.** *(múltipla resposta — escolha 2)*

- **A)** A AWS CLI é ideal para automatizar tarefas repetitivas via scripts.
- **B)** O Console de Gerenciamento é a melhor opção para integrar a AWS dentro do código de uma aplicação.
- **C)** O CloudFormation permite provisionar infraestrutura de forma declarativa e repetível.
- **D)** O SDK e a CLI não têm relação com a API da AWS.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** (CLI para automação) e **C** (CloudFormation para IaC) estão corretas.
>
> - **B)** ❌ — integrar por código é papel do **SDK**, não do Console.
> - **D)** ❌ — ambos chamam a API da AWS por baixo.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos sobre *formas de interagir com a AWS* e *CloudFormation*.
- ✍️ **Desafio:** para 3 tarefas (explorar um serviço novo, rodar um script diário de backup, criar recursos dentro de um app), diga qual porta usar (Console/CLI/SDK) e por quê.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Console de Gerenciamento** | Interface gráfica da AWS no navegador. |
| **AWS CLI** | Interface de linha de comando, para automação e scripts. |
| **AWS SDK** | Kit para controlar a AWS pelo código da aplicação. |
| **API** | Camada que todas as formas de interação chamam por baixo. |
| **IaC (Infraestrutura como Código)** | Provisionar infraestrutura por meio de arquivos declarativos. |
| **AWS CloudFormation** | Serviço de IaC da AWS. |

<br>

## ✅ Checklist de conclusão

- [ ] Conheço as três portas: Console, CLI e SDK
- [ ] Sei quando usar cada uma
- [ ] Entendi que todas chamam a API por baixo
- [ ] Sei o que é IaC e o papel do CloudFormation
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

🏠 [Índice do Domínio 3](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 09 · Computação: EC2, containers e serverless](./09-computacao-ec2-containers-serverless.md)

</div>
