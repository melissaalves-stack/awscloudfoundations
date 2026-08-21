# Módulo 13 · Governança e conformidade em IA

> **Domínio:** 5 · Segurança e Governança · **Tempo estimado:** 2h30 · **Pré-requisitos:** Módulo 12

## 🎯 Objetivos de aprendizagem

Ao final deste módulo, você será capaz de:

- Entender **governança de dados e de modelos**.
- Conhecer ferramentas de auditoria: **CloudTrail, AWS Config, Audit Manager**.
- Reconhecer normas e frameworks de conformidade aplicáveis à IA.

<br>

---

<br>

## 🧠 Conteúdo

<br>

### 1. O que é governança?

**Governança** é o conjunto de **políticas, processos e controles** que garantem que a IA seja usada de forma responsável, rastreável e em conformidade com as regras da organização e das leis.

> [!TIP]
> Se a **segurança** ([Módulo 12](./12-seguranca-de-solucoes-de-ia.md)) responde "como proteger?", a **governança** responde "quem pode fazer o quê, com quais dados, e como provamos isso?".

<br>

### 2. Governança de dados

Modelos são tão bons e tão confiáveis quanto os dados que recebem. Governar dados envolve:

- 📋 **Linhagem (data lineage)** — saber de onde vieram os dados e como foram transformados.
- 🏷️ **Classificação** — rotular dados por sensibilidade (público, interno, confidencial).
- ✅ **Qualidade** — garantir dados corretos, completos e sem viés.
- 🗄️ **Catálogo** — o **AWS Glue Data Catalog** ajuda a organizar e encontrar dados.

<br>

### 3. Auditoria: provando o que aconteceu

Para governança, você precisa **registrar e auditar** tudo:

| Serviço | Para que serve |
|:--|:--|
| 🔎 **AWS CloudTrail** | Registra **quem** chamou **qual** API e **quando** (inclusive chamadas ao Bedrock). |
| ⚙️ **AWS Config** | Registra o **histórico de configurações** dos recursos e checa conformidade. |
| 📋 **AWS Audit Manager** | Automatiza a **coleta de evidências** para auditorias e frameworks. |
| 📜 **AWS Artifact** | Baixa relatórios de **conformidade** da AWS ([lembra do Cloud?](../../certificacao-cloud/dominio-2-seguranca-e-conformidade/07-conformidade-e-servicos-de-seguranca.md)). |

> [!IMPORTANT]
> Macete de prova: **CloudTrail** = "quem fez o quê" (ações). **Config** = "como o recurso estava configurado ao longo do tempo". **Audit Manager** = "juntar evidências para a auditoria".

<br>

### 4. Governança de modelos

Além dos dados, governe os **modelos**:

- 🗂️ **Model Cards** ([Módulo 11](../dominio-4-ia-responsavel/11-transparencia-e-ferramentas.md)) documentam cada modelo.
- 🔁 **Versionamento** — saber qual versão está em produção.
- 📊 **Monitoramento** — acompanhar desempenho e **desvio (drift)** ao longo do tempo com o **SageMaker Model Monitor**.
- ✅ **Aprovações** — fluxos que exigem revisão antes de um modelo ir para produção.

<br>

### 5. Conformidade e frameworks

A IA precisa respeitar leis de proteção de dados e normas do setor:

| Norma / Framework | Foco |
|:--|:--|
| 🇧🇷 **LGPD** | Proteção de dados pessoais no Brasil. |
| 🇪🇺 **GDPR** | Proteção de dados na Europa. |
| 🌐 **ISO / SOC** | Padrões internacionais de segurança e controles. |
| 🤖 **Frameworks de IA** | Diretrizes específicas para IA responsável e governança de risco. |

> [!NOTE]
> Você não precisa decorar cada norma para a prova. Reconheça que **soluções de IA também estão sujeitas à conformidade** (especialmente proteção de dados) e que a AWS oferece ferramentas para comprovar e manter essa conformidade.

<br>

### 6. Fechando a trilha 🎉

> [!TIP]
> 🏆 **Você concluiu a trilha AI Practitioner!** Você entende IA/ML, IA generativa, como aplicar modelos (Bedrock/SageMaker), IA responsável e agora segurança e governança. Revise, faça simulados e agende sua **AIF-C01**. E se ainda não fez a **[Cloud Practitioner](../../certificacao-cloud/README.md)**, ela te espera — duas certificações são melhores que uma! 💪

<br>

---

<br>

## ❓ Quiz — teste seus conhecimentos

<br>

**1. O que é governança em IA?**

- **A)** Apenas criptografar dados.
- **B)** Políticas, processos e controles para uso responsável, rastreável e em conformidade.
- **C)** Um tipo de modelo de fundação.
- **D)** Uma instância EC2.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — **Governança** define regras, processos e controles — "quem pode o quê, com quais dados, e como provamos".

</details>

<br>

**2. Qual serviço registra quem chamou qual API e quando (inclusive no Bedrock)?**

- **A)** AWS CloudTrail.
- **B)** Amazon Polly.
- **C)** AWS Budgets.
- **D)** Amazon EFS.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: A)** — O **CloudTrail** audita **ações/chamadas de API** — essencial para governança.

</details>

<br>

**3. O que é "data lineage" (linhagem de dados)?**

- **A)** Um tipo de criptografia.
- **B)** Saber de onde os dados vieram e como foram transformados.
- **C)** O custo dos dados.
- **D)** A velocidade da rede.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — **Linhagem** é rastrear a **origem e as transformações** dos dados.

</details>

<br>

**4. Qual serviço ajuda a monitorar o desvio (drift) de um modelo em produção?**

- **A)** SageMaker Model Monitor.
- **B)** Amazon Translate.
- **C)** AWS Artifact.
- **D)** Amazon Rekognition.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: A)** — O **SageMaker Model Monitor** acompanha desempenho e **drift** ao longo do tempo.

</details>

<br>

**5. Soluções de IA precisam respeitar normas como a LGPD?**

- **A)** Não, IA é isenta de leis.
- **B)** Sim — IA que trata dados pessoais está sujeita à conformidade (LGPD, GDPR etc.).
- **C)** Só se rodarem na Europa.
- **D)** Apenas modelos de imagem.

<details>
<summary>💡 Ver resposta</summary>

> ✅ **Resposta: B)** — Soluções de IA **estão sujeitas** às leis de proteção de dados, como qualquer sistema que trate dados pessoais.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → procure por *"AI Governance"* e *"AWS Audit Manager"*.
- 🔗 Faça um **simulado completo da AIF-C01** e comemore o fim da trilha! 🏆

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Governança** | Políticas e controles para uso responsável e rastreável. |
| **Data lineage** | Origem e transformações dos dados. |
| **CloudTrail** | Auditoria de ações/APIs. |
| **AWS Config** | Histórico de configurações e conformidade. |
| **Audit Manager** | Coleta de evidências para auditoria. |
| **Model Monitor** | Monitora desempenho e drift de modelos. |
| **LGPD / GDPR** | Leis de proteção de dados (Brasil / Europa). |

<br>

## ✅ Checklist de conclusão

- [ ] Li todo o conteúdo do módulo
- [ ] Entendo o que é governança de dados e de modelos
- [ ] Diferencio CloudTrail, Config e Audit Manager
- [ ] Sei o que é data lineage e drift
- [ ] Reconheço a conformidade aplicável à IA
- [ ] Fiz o quiz
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) — **fim da trilha!** 🎉

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 12](./12-seguranca-de-solucoes-de-ia.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 5](./README.md) &nbsp;·&nbsp; 🔬 [Ir para a trilha de Aprofundamento](../../aprofundamento/README.md)

</div>
