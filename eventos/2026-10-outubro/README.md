<div align="center">

# 📅 Outubro de 2026

**2 encontros · AWS Kiro e trilha de certificação**

<sub>LACEN · Liga Acadêmica de Computação em Nuvem · UNIFAL-MG</sub>

</div>

---

| Encontro | Quando / Tipo | Materiais |
|:--|:--|:--|
| [👻 AWS Kiro](#-aws-kiro) | 20 a 22 out | _a publicar_ |
| [🔐 Segurança na Nuvem AWS](#-segurança-na-nuvem-aws) | 28 out · Certificação · Domínio 2 | Slides |

📸 **Fotos do mês:** _link do Drive em breve_

---

## 👻 AWS Kiro

| Campo | Detalhe |
|:--|:--|
| 📅 **Data** | 20 a 22 de outubro de 2026 |
| 🏷️ **Tema** | Kiro, o ambiente de desenvolvimento com agentes de IA da AWS |
| 🎥 **Gravação** | _a publicar_ |
| 📂 **Materiais** | _a publicar_ |

---

## 🔐 Segurança na Nuvem AWS

**Domínio 2 · Segurança e Conformidade (CLF-C02)**

| Campo | Detalhe |
|:--|:--|
| 📅 **Data** | 28 de outubro de 2026 |
| 🎯 **Domínio da prova** | Domínio 2 · Segurança e Conformidade — 30% do CLF-C02 |
| 🎥 **Gravação** | _a publicar após o encontro_ |
| 📂 **Materiais** | [Slides teóricos (PDF)](./slides/seguranca-slides-teoricos.pdf) |

Segurança é o segundo maior domínio da prova — e o que mais aparece no dia a dia de quem trabalha com nuvem. O encontro tem duas partes: primeiro **quem controla o quê** (responsabilidade, identidade e rede); depois **como proteger e detectar** (criptografia, DDoS e serviços de detecção). No fim, revisão com Kahoot. 🎮

### 🎯 O que vamos ver

**Parte 1 · Controle**

- **Responsabilidade compartilhada** — a analogia do condomínio: a AWS cuida do prédio, você do seu apartamento; e como a divisão muda entre EC2, RDS, Lambda e S3
- **IAM** — usuários, grupos, roles e policies; *Default Deny*; por que nunca usar o root
- **Avaliação de policies** — Deny explícito > Allow explícito > Deny padrão
- **Boas práticas de IAM** — MFA, menor privilégio, roles para serviços, um usuário por pessoa, rotação de chaves
- **Security Group vs. NACL** — a tranca da sua porta vs. a guarita da rua

**Parte 2 · Proteção e detecção**

- **KMS** — criptografia em repouso, tipos de chave e quando usar CloudHSM (FIPS 140-2 nível 3)
- **Shield** — Standard (grátis, automático) vs. Advanced (equipe DRT 24/7)
- **WAF** — firewall de camada 7 contra SQL injection, XSS, bots e com rate limiting
- **Inspector, GuardDuty e Macie** — vulnerabilidades (CVE), ameaças ativas e dados sensíveis no S3

> [!TIP]
> **Mnemônico das camadas:** WAF olha *o que* está sendo pedido · Shield olha *quantos* estão pedindo · SG/NACL olham *quem* está pedindo.

### 🧠 Para levar

| Se a questão fala em… | Pense em… |
|:--|:--|
| Patches do SO no EC2 | Responsabilidade sua |
| Patches do SO no RDS | Responsabilidade da AWS |
| Bloquear um IP em toda a sub-rede | NACL |
| Credencial temporária para um serviço | IAM Role |
| Criptografar S3, EBS ou RDS | KMS |
| Equipe especializada em DDoS 24/7 | Shield Advanced |
| Vulnerabilidades (CVE) em EC2/containers | Inspector |
| Comportamento suspeito na conta | GuardDuty |
| CPF ou cartão exposto no S3 | Macie |

📚 **Continue estudando:** [Domínio 2 da trilha Cloud Practitioner](../../certificacao-cloud/dominio-2-seguranca-e-conformidade/) · [IAM no Aprofundamento (módulos 09–12)](../../aprofundamento/) · [Simulado do Domínio 2](../../certificacao-cloud/simulados/simulado-dominio-2.md)

---

<div align="center">

⬅️ [Setembro](../2026-09-setembro/) &nbsp;·&nbsp; 🎉 [Todos os meses](../) &nbsp;·&nbsp; ➡️ [Novembro](../2026-11-novembro/) &nbsp;·&nbsp; 🏠 [Início](../../)

</div>
