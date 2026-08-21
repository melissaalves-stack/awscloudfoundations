# Módulo 16 · Planos de suporte e Trusted Advisor

> **Domínio:** 4 · Cobrança, Preços e Suporte · **Tempo estimado:** 2h · **Pré-requisitos:** Módulos 14 e 15

## 🎯 Objetivos de aprendizagem

Ao final deste módulo, você será capaz de:

- Diferenciar os **planos de suporte** da AWS.
- Entender o **AWS Trusted Advisor** e suas 5 categorias.
- Conhecer o **AWS Health Dashboard** e outros recursos de ajuda.

<br>

---

<br>

## 🧠 Conteúdo

<br>

### 1. Os planos de suporte da AWS

A AWS oferece **quatro** níveis de suporte, do gratuito ao premium:

| Plano | Para quem | Destaque |
|:--|:--|:--|
| 🆓 **Basic** | Todas as contas (grátis). | Documentação, fóruns e Trusted Advisor (checagens básicas). |
| 💬 **Developer** | Quem está experimentando/desenvolvendo. | Suporte técnico por e-mail em horário comercial. |
| 🏢 **Business** | Cargas de produção. | Suporte 24/7 por telefone/chat, Trusted Advisor **completo**. |
| 🏆 **Enterprise** | Grandes cargas críticas. | Um **TAM** (Technical Account Manager) dedicado e resposta mais rápida. |

> [!IMPORTANT]
> Dois pontos que caem na prova:
> - O **TAM (Technical Account Manager)** — um contato dedicado — vem no plano **Enterprise** (e no Enterprise On-Ramp).
> - O **Trusted Advisor completo** (todas as checagens) exige plano **Business** ou superior.

<br>

### 2. AWS Trusted Advisor — o consultor automático

O **AWS Trusted Advisor** examina sua conta e dá **recomendações** em cinco categorias:

| Categoria | Exemplo de recomendação |
|:--|:--|
| 💰 **Otimização de custos** | "Você tem instâncias ociosas — considere desligá-las." |
| ⚡ **Desempenho** | "Este recurso está subdimensionado." |
| 🔒 **Segurança** | "Este bucket S3 está público!" |
| 🛟 **Tolerância a falhas** | "Você não tem backups configurados aqui." |
| 📊 **Limites de serviço** | "Você está perto do limite de instâncias da Região." |

> [!TIP]
> Pense no Trusted Advisor como um "checkup automático" que aponta o que melhorar. Na conta **Basic**, ele faz apenas checagens básicas (algumas de segurança e limites). No **Business+**, libera **todas** as cinco categorias.

<br>

### 3. AWS Health Dashboard — status dos serviços

O **AWS Health Dashboard** mostra a saúde dos serviços da AWS e eventos que podem afetar seus recursos. Serve para você saber se um problema é seu... ou da própria AWS.

<br>

### 4. Onde mais buscar ajuda

| Recurso | Para quê |
|:--|:--|
| 📚 **Documentação AWS** | A referência oficial de tudo. |
| 🧠 **AWS Skill Builder** | Cursos e treinamentos (o que usamos na Liga!). |
| 🤝 **AWS Support / re:Post** | Fórum de perguntas e respostas da comunidade. |
| 🏗️ **AWS Well-Architected Tool** | Avalia sua arquitetura contra os pilares ([Módulo 02](../dominio-1-conceitos-de-nuvem/02-well-architected-e-caf.md)). |

> [!NOTE]
> 🎉 **Você chegou ao fim da trilha Cloud Practitioner!** Agora é revisar, praticar simulados e agendar sua prova. E não esqueça: a trilha de **[AI Practitioner](../../certificacao-ia/README.md)** te espera para a próxima certificação!

<br>

---

<br>

## ❓ Quiz — teste seus conhecimentos

<br>

**1. Qual plano de suporte inclui um Technical Account Manager (TAM) dedicado?**

- **A)** Basic.
- **B)** Developer.
- **C)** Business.
- **D)** Enterprise.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: D)** — O **TAM** dedicado vem no plano **Enterprise** (e Enterprise On-Ramp).

</details>

<br>

**2. Qual plano de suporte é gratuito e disponível para todas as contas?**

- **A)** Basic.
- **B)** Developer.
- **C)** Business.
- **D)** Enterprise.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: A)** — O plano **Basic** é gratuito e já vem com toda conta.

</details>

<br>

**3. O AWS Trusted Advisor faz recomendações em quantas categorias?**

- **A)** 3.
- **B)** 5.
- **C)** 6.
- **D)** 10.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — São **5 categorias**: custos, desempenho, segurança, tolerância a falhas e limites de serviço.

</details>

<br>

**4. Você quer o Trusted Advisor COMPLETO, com todas as checagens. Qual plano mínimo?**

- **A)** Basic.
- **B)** Developer.
- **C)** Business.
- **D)** Nenhum, ele é sempre completo.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: C)** — O Trusted Advisor completo exige plano **Business** ou superior. O Basic tem só checagens básicas.

</details>

<br>

**5. Onde você verifica se um problema é da própria AWS (e não seu)?**

- **A)** AWS Health Dashboard.
- **B)** AWS Pricing Calculator.
- **C)** Amazon Macie.
- **D)** AWS Budgets.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: A)** — O **AWS Health Dashboard** mostra a saúde dos serviços e eventos que afetam seus recursos.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → procure por *"AWS Support Plans"* e *"Trusted Advisor"*.
- 🔗 Faça um **simulado completo da CLF-C02** no Skill Builder e veja se está pronto(a) para a prova! 🏆

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Planos de suporte** | Basic, Developer, Business, Enterprise. |
| **TAM** | Technical Account Manager (contato dedicado, plano Enterprise). |
| **Trusted Advisor** | Consultor automático com 5 categorias de recomendação. |
| **AWS Health Dashboard** | Mostra a saúde e os eventos dos serviços AWS. |
| **re:Post** | Fórum de perguntas e respostas da comunidade AWS. |
| **Well-Architected Tool** | Avalia arquiteturas contra os 6 pilares. |

<br>

## ✅ Checklist de conclusão

- [ ] Li todo o conteúdo do módulo
- [ ] Diferencio os 4 planos de suporte
- [ ] Sei que o TAM é do Enterprise e o Trusted Advisor completo é do Business+
- [ ] Conheço as 5 categorias do Trusted Advisor
- [ ] Sei para que serve o Health Dashboard
- [ ] Fiz o quiz
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) — **fim da trilha!** 🎉

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 15](./15-ferramentas-de-custo.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 4](./README.md) &nbsp;·&nbsp; 🤖 [Ir para a trilha AI Practitioner](../../certificacao-ia/README.md)

</div>
