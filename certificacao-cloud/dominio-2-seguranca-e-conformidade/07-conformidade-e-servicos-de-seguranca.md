# Módulo 07 · Conformidade e serviços de segurança

> **Domínio:** 2 · Segurança e Conformidade · **Tempo estimado:** 4h · **Pré-requisitos:** Módulos 04, 05 e 06
> **Peso na prova:** fecha o Domínio 2 (**30%**). Reconhecer "qual serviço de segurança faz o quê" é um dos temas mais recorrentes — este módulo é um mapa de serviços.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Entender o que é **conformidade (compliance)** e o papel do **AWS Artifact**.
- Saber para que serve cada serviço de segurança: **GuardDuty, Shield, WAF, Inspector**.
- Diferenciar **CloudTrail** (auditoria: quem fez o quê) de **CloudWatch** (monitoramento: saúde e desempenho) — a pegadinha campeã do Domínio 2.
- Reconhecer o **Trusted Advisor** como central de recomendações.

<br>

---

<br>

## 🎬 O prédio com muitos guardas

Voltando à analogia do prédio: uma empresa séria não tem só uma tranca. Ela tem um **detetive** que observa comportamentos estranhos, um **escudo** contra invasões em massa, um **porteiro** que barra visitantes suspeitos, um **médico** que faz check-up das instalações, um **livro de registro** de quem entrou e saiu, e um **painel** que mostra a saúde de tudo. Além disso, guarda os **certificados** que provam que segue as normas.

A AWS tem um serviço para cada um desses papéis. Este módulo é o seu **mapa de guardas** — e a prova adora perguntar "qual guarda faz o quê?".

<br>

---

<br>

## 📋 Parte 1 — O que é conformidade (compliance)?

**Conformidade é aderir a leis, normas e padrões** que regulam como dados devem ser tratados — como a **LGPD** (Brasil), a **GDPR** (Europa) ou a **PCI DSS** (cartões de crédito). Empresas de setores regulados (saúde, finanças) precisam **provar** que seguem essas regras.

O problema: como provar que a AWS, onde seus dados estão, cumpre esses padrões? A resposta é o **AWS Artifact**.

<br>

## 📂 Parte 2 — AWS Artifact: a sala de documentos

O **AWS Artifact** é um portal de **autoatendimento** onde você baixa os **relatórios de conformidade e certificações** da AWS (auditorias, atestados como SOC, ISO, PCI). É a "sala de documentos" que você mostra ao seu auditor para provar que a infraestrutura que você usa é certificada.

> [!TIP]
> Se a questão fala em "obter relatórios de conformidade / provar a um auditor que a AWS segue a norma X", a resposta é **AWS Artifact**. Lembre-se: a **conformidade também é compartilhada** — a AWS certifica a infraestrutura (Artifact prova isso), mas você ainda é responsável por usar os serviços de forma conforme.

<br>

## 🛡️ Parte 3 — Os guardiões: serviços de segurança

Aqui está o coração do módulo. Quatro serviços, quatro papéis distintos:

| Serviço | O que faz | Analogia | Frase-gatilho |
|:--|:--|:--|:--|
| 🔍 **Amazon GuardDuty** | Detecta **ameaças e atividades suspeitas** continuamente, analisando logs. | O detetive que vigia comportamentos estranhos | "detecção contínua de ameaças" |
| 🛡️ **AWS Shield** | Protege contra ataques **DDoS** (sobrecarga por tráfego em massa). | O escudo contra "tsunamis" de tráfego | "proteção contra DDoS" |
| 🧱 **AWS WAF** (Web Application Firewall) | Filtra tráfego malicioso em **aplicações web** (ex.: SQL injection, XSS). | O porteiro que barra pedidos maliciosos | "firewall de aplicação web / bloquear SQL injection" |
| 🩺 **Amazon Inspector** | Verifica **vulnerabilidades** em instâncias EC2 e aplicações. | O check-up de saúde do sistema | "varredura de vulnerabilidades" |

> [!CAUTION]
> **A confusão clássica — GuardDuty × Inspector:** o **GuardDuty** vigia **comportamento** em tempo real (detecta uma ameaça acontecendo). O **Inspector** faz um **check-up** procurando **vulnerabilidades** conhecidas (pontos fracos que *poderiam* ser explorados). Um flagra o ladrão agindo; o outro aponta a janela sem tranca antes do assalto.

> [!CAUTION]
> **Shield × WAF:** o **Shield** defende contra **DDoS** (volume massivo para derrubar). O **WAF** filtra **requisições maliciosas** específicas (injeção de código, etc.). Volume que sobrecarrega = Shield; conteúdo malicioso na requisição = WAF. Eles se complementam.

<br>

## 🔎 Parte 4 — Monitorando e auditando: CloudTrail vs. CloudWatch

Esta é, disparado, **a pegadinha número um do Domínio 2**. Dois serviços com nomes parecidos e papéis totalmente diferentes:

| Serviço | Responde à pergunta... | Pense em... |
|:--|:--|:--|
| 🔎 **AWS CloudTrail** | "**Quem** fez **qual** ação na minha conta, e **quando**?" | Câmera de segurança / livro de registro (**auditoria**) |
| 📊 **Amazon CloudWatch** | "Como estão a **saúde e o desempenho** dos meus recursos?" | Painel de sinais vitais / monitor cardíaco (**monitoramento**) |

> [!IMPORTANT]
> O truque para nunca mais errar:
> - **CloudTr> ail = Trilha de auditoria.** "Trail" = trilha de quem fez o quê. Se a questão fala em **auditoria, histórico de ações, quem chamou qual API**, é **CloudTrail**.
> - **CloudWat> ch = Watch (vigiar a saúde).** Se a questão fala em **métricas, logs de desempenho, alarmes, uso de CPU**, é **CloudWatch**.
> - Frase-resumo: **CloudTrail registra AÇÕES; CloudWatch mede DESEMPENHO.**

<br>

## 💡 Parte 5 — Trusted Advisor: o consultor automático

O **AWS Trusted Advisor** é uma ferramenta que **analisa sua conta automaticamente** e dá **recomendações** em 5 categorias: **otimização de custos, desempenho, segurança, tolerância a falhas e limites de serviço**.

> [!NOTE]
> Pense no Trusted Advisor como um **consultor que examina sua conta e aponta melhorias** ("esse bucket está público", "essa porta está aberta", "você poderia economizar aqui"). Aparece tanto no Domínio 2 (recomendações de **segurança**) quanto no Domínio 4 (recomendações de **custo**). Se a questão fala em "verificação automática de boas práticas / recomendações na conta", é **Trusted Advisor**.

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **CloudTrail = auditoria (quem fez o quê).** **CloudWatch = monitoramento (saúde/desempenho).** A pegadinha nº 1 — não troque.
> - **GuardDuty (detecta ameaças em tempo real) × Inspector (varre vulnerabilidades).**
> - **Shield (DDoS) × WAF (requisições maliciosas, ex.: SQL injection).**
> - **Artifact** = baixar relatórios/certificações de conformidade (provar ao auditor).
> - **Trusted Advisor** = recomendações automáticas (custos, segurança, desempenho, tolerância a falhas, limites).
> - **Macie** (do módulo anterior) descobre **dados sensíveis no S3** — não confunda com GuardDuty (ameaças de comportamento).

<br>

## 🗺️ Mapa rápido pra revisão

| Serviço | Papel em uma palavra |
|:--|:--|
| GuardDuty | detetive de ameaças |
| Inspector | check-up de vulnerabilidades |
| Shield | anti-DDoS |
| WAF | firewall de app web |
| CloudTrail | auditoria (ações) |
| CloudWatch | monitoramento (desempenho) |
| Artifact | documentos de conformidade |
| Trusted Advisor | recomendações automáticas |
| Macie | dados sensíveis no S3 |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Um auditor de segurança precisa saber exatamente quem chamou qual ação (API) na conta AWS e em que horário, nos últimos meses. Qual serviço fornece esse histórico?**

- **A)** Amazon CloudWatch
- **B)** AWS CloudTrail
- **C)** AWS Trusted Advisor
- **D)** Amazon Inspector

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) AWS CloudTrail**
>
> CloudTrail é a **trilha de auditoria**: registra quem fez qual ação/API e quando.
>
> - **A)** ❌ — CloudWatch mede saúde e desempenho (métricas/logs), não "quem fez o quê".
> - **C)** ❌ — Trusted Advisor dá recomendações, não histórico de ações.
> - **D)** ❌ — Inspector varre vulnerabilidades.

</details>

<br>

**2. Uma aplicação web sofre com um ataque que envia um volume gigantesco de tráfego para derrubá-la (DDoS). Qual serviço é projetado para mitigar isso?**

- **A)** AWS WAF
- **B)** AWS Shield
- **C)** Amazon Macie
- **D)** AWS Artifact

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) AWS Shield**
>
> Shield é a defesa contra **DDoS** (o "tsunami" de tráfego).
>
> - **A)** ❌ — WAF filtra requisições maliciosas (ex.: SQL injection), não o volume de um DDoS.
> - **C)** ❌ — Macie descobre dados sensíveis.
> - **D)** ❌ — Artifact é para documentos de conformidade.

</details>

<br>

**3. Uma empresa precisa baixar os relatórios de conformidade e certificações da AWS (como ISO e SOC) para apresentar a um auditor externo. Onde ela obtém esses documentos?**

- **A)** Amazon CloudWatch
- **B)** AWS Trusted Advisor
- **C)** AWS Artifact
- **D)** AWS Shield

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: C) AWS Artifact**
>
> Artifact é o portal de autoatendimento com os relatórios e certificações de conformidade da AWS.
>
> - **A), B), D)** ❌ — monitoramento, recomendações e anti-DDoS, respectivamente; nenhum fornece documentos de conformidade.

</details>

<br>

**4. Uma equipe quer detectar continuamente atividades suspeitas e ameaças na conta (como acessos anômalos e comunicação com IPs maliciosos). Qual serviço faz isso?**

- **A)** Amazon Inspector
- **B)** Amazon GuardDuty
- **C)** AWS Config
- **D)** AWS WAF

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Amazon GuardDuty**
>
> GuardDuty faz **detecção contínua de ameaças** analisando comportamento e logs.
>
> - **A)** ❌ — Inspector procura **vulnerabilidades** (pontos fracos), não ameaças em andamento.
> - **C)** ❌ — Config avalia conformidade de configurações de recursos.
> - **D)** ❌ — WAF filtra requisições web maliciosas.

</details>

<br>

**5. Selecione as DUAS afirmações corretas.** *(múltipla resposta — escolha 2)*

- **A)** O CloudTrail registra as ações/chamadas de API feitas na conta (auditoria).
- **B)** O CloudWatch serve para baixar certificados de conformidade.
- **C)** O AWS WAF ajuda a bloquear ataques como SQL injection em aplicações web.
- **D)** O Amazon Inspector protege contra ataques DDoS.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** descreve o CloudTrail (auditoria); **C** descreve o WAF (filtra requisições maliciosas web).
>
> - **B)** ❌ — certificados de conformidade vêm do **Artifact**, não do CloudWatch.
> - **D)** ❌ — DDoS é com o **Shield**; o Inspector varre vulnerabilidades.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos sobre *serviços de segurança* e *conformidade* no Cloud Practitioner Essentials.
- ✍️ **Desafio dos guardas:** feche os olhos e recite o papel de cada um em uma palavra — GuardDuty, Inspector, Shield, WAF, CloudTrail, CloudWatch, Artifact, Trusted Advisor. Se acertar os 8, o Domínio 2 está no bolso.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Conformidade (compliance)** | Aderência a leis e padrões (LGPD, GDPR, PCI DSS etc.). |
| **AWS Artifact** | Portal de relatórios e certificações de conformidade da AWS. |
| **Amazon GuardDuty** | Detecção contínua de ameaças e atividades suspeitas. |
| **AWS Shield** | Proteção contra ataques DDoS. |
| **AWS WAF** | Firewall de aplicações web (filtra requisições maliciosas). |
| **Amazon Inspector** | Varredura de vulnerabilidades em instâncias e aplicações. |
| **AWS CloudTrail** | Auditoria: registra quem fez qual ação e quando. |
| **Amazon CloudWatch** | Monitoramento: métricas, logs, alarmes e desempenho. |
| **AWS Trusted Advisor** | Recomendações automáticas em 5 categorias (inclui segurança e custos). |

<br>

## ✅ Checklist de conclusão

- [ ] Entendi o que é conformidade e o papel do AWS Artifact
- [ ] Sei o papel de GuardDuty, Shield, WAF e Inspector
- [ ] Não confundo GuardDuty (ameaças) com Inspector (vulnerabilidades)
- [ ] Não confundo Shield (DDoS) com WAF (requisições maliciosas)
- [ ] Distingo CloudTrail (auditoria) de CloudWatch (monitoramento) — a pegadinha nº 1
- [ ] Sei o que é o Trusted Advisor
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 06](./06-protecao-de-dados-e-criptografia.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 2](./README.md) &nbsp;·&nbsp; ➡️ [Domínio 3 · Tecnologia e Serviços](../dominio-3-tecnologia-e-servicos/README.md)

</div>
