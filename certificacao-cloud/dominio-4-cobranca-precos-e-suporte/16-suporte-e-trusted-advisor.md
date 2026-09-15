# Módulo 16 · Suporte e Trusted Advisor

> **Domínio:** 4 · Cobrança, Preços e Suporte · **Tempo estimado:** 3h · **Pré-requisitos:** Módulos 14 e 15
> **Peso na prova:** fecha o Domínio 4 (**12%**) e a trilha. Planos de suporte e Trusted Advisor são pontos fáceis — garanta-os.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Conhecer os **4 planos de suporte** da AWS e para quem cada um serve.
- Saber o que é o **TAM** e em qual plano ele aparece.
- Entender o **Trusted Advisor** e suas 5 categorias de recomendação.
- Reconhecer o **AWS Health Dashboard** e onde mais buscar ajuda.

<br>

---

<br>

## 🎬 Quando algo dá errado às 3 da manhã

Seu sistema de produção cai numa madrugada de domingo. O que acontece agora depende de **uma decisão que você tomou meses atrás**: qual plano de suporte contratou. Se for o gratuito, você tem fóruns e documentação. Se for o Enterprise, você tem um telefone que atende em minutos e um gerente técnico que já conhece a sua conta. Este módulo é sobre essas escolhas — e sobre as ferramentas que evitam o problema antes dele acontecer.

<br>

---

<br>

## 🧠 Parte 1 — Os 4 planos de suporte da AWS

A AWS tem quatro níveis de suporte, do gratuito ao premium. A prova adora dar uma necessidade e perguntar o plano adequado.

| Plano | Para quem | Destaque |
|:--|:--|:--|
| 🆓 **Basic** | Todas as contas (grátis). | Documentação, fóruns e Trusted Advisor (checagens **básicas**). |
| 💬 **Developer** | Quem está experimentando/desenvolvendo. | Suporte técnico por **e-mail**, horário comercial. |
| 🏢 **Business** | Cargas de **produção**. | Suporte **24/7** por telefone/chat e Trusted Advisor **completo**. |
| 🏆 **Enterprise** | Grandes cargas **críticas**. | Um **TAM** (Technical Account Manager) **dedicado** e a resposta mais rápida. |

> [!IMPORTANT]
> Os dois gatilhos que mais caem:
> - **"Suporte 24/7 para cargas de produção"** → **Business** (é onde o 24/7 começa).
> - **"Gerente técnico dedicado (TAM) / carga crítica de missão"** → **Enterprise** (o TAM é exclusivo dele).
> - Todo mundo tem o **Basic** de graça; o **Developer** é o degrau de quem está só testando.

<br>

## 👤 Parte 2 — O TAM (Technical Account Manager)

O **TAM** é um contato técnico **dedicado** da AWS, que conhece a sua conta, ajuda no planejamento e é seu ponto focal. Ele existe **somente no plano Enterprise**.

> [!TIP]
> Se a questão menciona **"gerente/contato técnico dedicado"**, a resposta é **Enterprise** (por causa do TAM). É uma das associações mais diretas do Domínio 4.

<br>

## 💡 Parte 3 — AWS Trusted Advisor: o consultor automático

O **Trusted Advisor** (que você já encontrou no Domínio 2) analisa sua conta automaticamente e dá **recomendações** em **5 categorias**:

| Categoria | Exemplo de recomendação |
|:--|:--|
| 💰 **Otimização de custos** | "Você tem instâncias ociosas — considere desligá-las." |
| ⚡ **Desempenho** | "Este recurso pode ser ajustado para melhorar a performance." |
| 🔒 **Segurança** | "Este bucket S3 está público!" |
| 🛟 **Tolerância a falhas** | "Você não tem backups configurados aqui." |
| 📊 **Limites de serviço** | "Você está perto do limite de instâncias da Região." |

> [!NOTE]
> **Ligação com o suporte:** no plano **Basic**, o Trusted Advisor faz só um conjunto **básico** de verificações. O conjunto **completo** (as 5 categorias inteiras) vem nos planos **Business** e **Enterprise**. Se a questão fala em "acesso completo ao Trusted Advisor", pense em Business/Enterprise.

> [!TIP]
> Decore as **5 categorias** — a prova pode listar 4 verdadeiras e uma falsa e pedir qual **não** é do Trusted Advisor: custos, desempenho, segurança, tolerância a falhas e limites de serviço.

<br>

## 📡 Parte 4 — AWS Health Dashboard: status dos serviços

O **AWS Health Dashboard** mostra o **estado de saúde dos serviços da AWS** e eventos que podem afetar a sua conta especificamente (uma manutenção programada, um incidente em uma Região). É onde você olha para saber se "o problema é meu ou é da AWS".

> [!TIP]
> Gatilho: "verificar se há um incidente/interrupção nos serviços da AWS que afeta minha conta" → **AWS Health Dashboard**.

<br>

## 📚 Parte 5 — Onde mais buscar ajuda

Fechando a trilha, vale reconhecer os recursos de aprendizado e suporte que você já vem usando:

| Recurso | Para quê |
|:--|:--|
| 📚 **Documentação AWS** | A referência oficial de todos os serviços. |
| 🧠 **AWS Skill Builder** | Cursos e treinamentos (o que a Liga usa!). |
| 🤝 **AWS re:Post** | Fórum de perguntas e respostas da comunidade. |
| 🏗️ **AWS Well-Architected Tool** | Avalia sua arquitetura contra os pilares ([Módulo 02](../dominio-1-conceitos-de-nuvem/02-well-architected-e-caf.md)). |

> [!NOTE]
> 🎉 **Este é o último módulo da trilha Cloud Practitioner!** Você percorreu os 4 domínios: conceitos de nuvem, segurança, tecnologia/serviços e cobrança/suporte. O próximo passo é fixar tudo com os **simulados** — um por domínio e um geral. Bora fechar com chave de ouro!

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **Suporte 24/7 começa no Business.** Developer é só e-mail em horário comercial.
> - **TAM = só Enterprise.** "Gerente técnico dedicado" → Enterprise.
> - **Trusted Advisor completo = Business/Enterprise;** no Basic, só checagens básicas.
> - **5 categorias do Trusted Advisor:** custos, desempenho, segurança, tolerância a falhas, limites de serviço.
> - **AWS Health Dashboard** = saber se há incidente da AWS afetando sua conta.
> - Todos têm o **Basic** grátis.

<br>

## 🗺️ Mapa rápido pra revisão

| Item | Em uma frase |
|:--|:--|
| Basic | grátis: docs, fóruns, Trusted Advisor básico |
| Developer | testes: e-mail em horário comercial |
| Business | produção: 24/7 + Trusted Advisor completo |
| Enterprise | crítico: TAM dedicado + resposta mais rápida |
| Trusted Advisor | 5 categorias de recomendação automática |
| Health Dashboard | saúde dos serviços da AWS |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Uma empresa com carga de produção precisa de suporte técnico 24/7 por telefone e do Trusted Advisor completo, mas não precisa de um gerente dedicado. Qual plano é o mais adequado (e econômico)?**

- **A)** Basic
- **B)** Developer
- **C)** Business
- **D)** Enterprise

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) Business**
>
> O **Business** oferece 24/7 e o Trusted Advisor completo — sem o custo extra do TAM, que ela não precisa.
>
> - **A)** ❌ — Basic não tem 24/7 nem Trusted Advisor completo.
> - **B)** ❌ — Developer é só e-mail em horário comercial.
> - **D)** ❌ — Enterprise atende, mas é mais caro por incluir o TAM, que não é necessário aqui.

</details>

<br>

**2. Qual recurso é exclusivo do plano de suporte Enterprise?**

- **A)** Acesso à documentação.
- **B)** Um Technical Account Manager (TAM) dedicado.
- **C)** Fóruns da comunidade.
- **D)** O Trusted Advisor básico.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) TAM dedicado**
>
> O **TAM** é exclusivo do plano **Enterprise**.
>
> - **A), C), D)** ❌ — documentação, fóruns e Trusted Advisor básico estão disponíveis já no Basic (gratuito).

</details>

<br>

**3. Qual serviço analisa automaticamente sua conta e recomenda melhorias em custos, desempenho, segurança, tolerância a falhas e limites de serviço?**

- **A)** AWS CloudTrail
- **B)** AWS Trusted Advisor
- **C)** AWS Budgets
- **D)** AWS Health Dashboard

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) AWS Trusted Advisor**
>
> As 5 categorias de recomendação automática são a marca do Trusted Advisor.
>
> - **A)** ❌ — CloudTrail é auditoria de ações.
> - **C)** ❌ — Budgets alerta sobre orçamento.
> - **D)** ❌ — Health Dashboard mostra a saúde dos serviços da AWS, não recomendações da sua conta.

</details>

<br>

**4. Um administrador quer verificar se uma lentidão é causada por um incidente nos próprios serviços da AWS que afeta sua conta. Onde ele olha?**

- **A)** AWS Cost Explorer
- **B)** AWS Health Dashboard
- **C)** AWS Artifact
- **D)** AWS Pricing Calculator

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) AWS Health Dashboard**
>
> O Health Dashboard mostra o estado dos serviços da AWS e eventos que afetam a sua conta.
>
> - **A), C), D)** ❌ — custo, conformidade e estimativa de preços, respectivamente; nenhum mostra incidentes de serviço.

</details>

<br>

**5. Selecione as DUAS afirmações corretas.** *(múltipla resposta — escolha 2)*

- **A)** O suporte 24/7 por telefone está disponível a partir do plano Business.
- **B)** O plano Basic inclui um TAM dedicado.
- **C)** O Trusted Advisor completo (todas as 5 categorias) está disponível nos planos Business e Enterprise.
- **D)** O Developer oferece um gerente técnico dedicado.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** (24/7 começa no Business) e **C** (Trusted Advisor completo no Business/Enterprise) estão corretas.
>
> - **B)** ❌ — o TAM é exclusivo do Enterprise, não do Basic.
> - **D)** ❌ — o Developer não tem TAM; ele é só e-mail em horário comercial.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos sobre *planos de suporte* e *Trusted Advisor*.
- ✍️ **Desafio final da trilha:** para 3 empresas (uma testando ideias, uma com produção que precisa de 24/7, uma crítica que quer um gerente dedicado), diga o plano de suporte. Acertou as três? Você fechou o Domínio 4.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Planos de suporte** | Basic, Developer, Business, Enterprise. |
| **Basic** | Gratuito: documentação, fóruns, Trusted Advisor básico. |
| **Developer** | Suporte por e-mail em horário comercial (testes/dev). |
| **Business** | Suporte 24/7 e Trusted Advisor completo (produção). |
| **Enterprise** | TAM dedicado e resposta mais rápida (missão crítica). |
| **TAM** | Technical Account Manager: contato dedicado (só Enterprise). |
| **Trusted Advisor** | Consultor automático com 5 categorias de recomendação. |
| **AWS Health Dashboard** | Estado de saúde dos serviços da AWS e eventos que afetam a conta. |

<br>

## ✅ Checklist de conclusão

- [ ] Conheço os 4 planos de suporte e para quem servem
- [ ] Sei que o 24/7 começa no Business e o TAM é só do Enterprise
- [ ] Sei as 5 categorias do Trusted Advisor
- [ ] Reconheço o AWS Health Dashboard
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)
- [ ] 🎉 Concluí a trilha — hora dos simulados!

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 15](./15-ferramentas-de-custo.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 4](./README.md) &nbsp;·&nbsp; 🎯 [Ir para os Simulados](../simulados/README.md)

</div>
