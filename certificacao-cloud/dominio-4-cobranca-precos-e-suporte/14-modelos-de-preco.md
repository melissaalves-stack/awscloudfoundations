# Módulo 14 · Modelos de preço e o Free Tier

> **Domínio:** 4 · Cobrança, Preços e Suporte · **Tempo estimado:** 2h · **Pré-requisitos:** Domínios 1 a 3

## 🎯 Objetivos de aprendizagem

Ao final deste módulo, você será capaz de:

- Explicar os **três pilares de preço** da AWS.
- Entender o **AWS Free Tier** e seus três tipos.
- Reconhecer como as escolhas de arquitetura afetam o custo.

<br>

---

<br>

## 🧠 Conteúdo

<br>

### 1. Os três pilares de preço da AWS

Apesar de milhares de serviços, a lógica de cobrança gira em torno de três ideias:

| Pilar | O que significa |
|:--|:--|
| 💻 **Computação** | Você paga pelo tempo de processamento que usa (ex.: horas de EC2). |
| 💾 **Armazenamento** | Você paga pela quantidade de dados guardados (ex.: GB no S3). |
| 🌐 **Transferência de dados (saída)** | Dados que **saem** da AWS para a internet são cobrados. Dados que **entram** costumam ser gratuitos. |

> [!IMPORTANT]
> Detalhe que cai na prova: **transferência de entrada (inbound)** geralmente é **grátis**; a **saída (outbound)** para a internet é **cobrada**. Movimentação de dados é uma fonte comum de custo "escondido".

<br>

### 2. A filosofia: pague pelo que usar

A AWS resume seu modelo em três princípios:

1. **Pague conforme o uso** (pay-as-you-go) — sem contratos longos obrigatórios.
2. **Pague menos reservando** — compromissos (Savings Plans/Reserved) trazem descontos.
3. **Pague menos usando mais** — quanto maior o volume, menor o preço por unidade (economia de escala).

<br>

### 3. O AWS Free Tier (camada gratuita)

Para você aprender e testar **sem gastar**, a AWS oferece o **Free Tier**, com três tipos:

| Tipo | Como funciona | Exemplo |
|:--|:--|:--|
| 🕐 **Gratuito por 12 meses** | Grátis no primeiro ano após criar a conta. | 750h/mês de EC2 t2.micro. |
| ♾️ **Sempre gratuito** | Grátis para sempre, dentro de um limite. | 1 milhão de requisições Lambda/mês. |
| 🧪 **Testes (trials)** | Grátis por um curto período para experimentar. | Alguns serviços por 30/60 dias. |

> [!TIP]
> Como membro da Liga, você aprende **sem** precisar de conta pessoal — usa Skill Builder, Builder Labs e SimuLearn. Mas é bom **conhecer** o Free Tier, porque ele cai na prova. E com o [Student Rewards](../../blog/2026-08-21-aws-student-rewards.md) você ainda ganha créditos! 🎁

<br>

### 4. Arquitetura barata é decisão consciente

Suas escolhas técnicas mexem diretamente no valor da fatura:

- Usar **Spot** em vez de On-Demand para tarefas tolerantes a falhas.
- Escolher a **classe de S3** certa (Glacier para arquivamento).
- **Desligar** recursos ociosos (Auto Scaling ajuda nisso).
- Escolher a **Região** com melhor preço quando a latência permitir.

> [!NOTE]
> É o pilar de **Otimização de Custos** do Well-Architected ([Módulo 02](../dominio-1-conceitos-de-nuvem/02-well-architected-e-caf.md)) na prática.

<br>

---

<br>

## ❓ Quiz — teste seus conhecimentos

<br>

**1. Quais são os três pilares fundamentais de preço da AWS?**

- **A)** Segurança, rede e identidade.
- **B)** Computação, armazenamento e transferência de dados.
- **C)** EC2, S3 e Lambda.
- **D)** Console, CLI e SDK.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — Os três pilares são **computação, armazenamento e transferência de dados**.

</details>

<br>

**2. Sobre transferência de dados, o que geralmente é GRATUITO?**

- **A)** A saída de dados para a internet.
- **B)** A entrada de dados (inbound) para a AWS.
- **C)** Toda transferência é paga.
- **D)** Toda transferência é grátis.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — A **entrada** costuma ser grátis; a **saída** para a internet é cobrada.

</details>

<br>

**3. "1 milhão de requisições Lambda por mês, para sempre" é qual tipo de Free Tier?**

- **A)** Gratuito por 12 meses.
- **B)** Sempre gratuito.
- **C)** Teste (trial).
- **D)** Não faz parte do Free Tier.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — É do tipo **sempre gratuito** (always free), dentro do limite mensal.

</details>

<br>

**4. Qual princípio de preço se resume em "pague menos reservando"?**

- **A)** Pague conforme o uso.
- **B)** Descontos por compromisso (Savings Plans / Reserved).
- **C)** Free Tier.
- **D)** Transferência de dados.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — Reservar capacidade (compromisso de 1–3 anos) gera **descontos**.

</details>

<br>

**5. Qual destas é uma decisão de arquitetura que REDUZ custos?**

- **A)** Usar On-Demand para tudo, sempre.
- **B)** Deixar recursos ociosos ligados 24/7.
- **C)** Arquivar dados raramente acessados no S3 Glacier.
- **D)** Guardar backups no S3 Standard para sempre.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: C)** — Mover dados frios para o **Glacier** reduz muito o custo de armazenamento.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → procure por *"AWS Pricing"* e *"AWS Free Tier"*.
- 🔗 Consulte a página oficial do **Free Tier** e liste 3 serviços "sempre gratuitos" que você usaria em um projeto.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Pilares de preço** | Computação, armazenamento e transferência de dados. |
| **Pay-as-you-go** | Pagar conforme o uso. |
| **Transferência de saída (outbound)** | Dados que saem para a internet (cobrados). |
| **Free Tier** | Camada gratuita da AWS (12 meses, sempre grátis, testes). |
| **Otimização de custos** | Pilar do Well-Architected focado em não desperdiçar. |

<br>

## ✅ Checklist de conclusão

- [ ] Li todo o conteúdo do módulo
- [ ] Sei os três pilares de preço
- [ ] Entendo que saída é cobrada e entrada costuma ser grátis
- [ ] Conheço os três tipos de Free Tier
- [ ] Sei como decisões de arquitetura afetam o custo
- [ ] Fiz o quiz
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

🏠 [Índice do Domínio 4](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 15 · Ferramentas de custo](./15-ferramentas-de-custo.md)

</div>
