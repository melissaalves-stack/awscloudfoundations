<div align="center">

# 📄 Revisão de véspera

**Domínio 2 · Segurança e Conformidade** · 30% do CLF-C02

<sub>Uma página para reler antes da prova</sub>

</div>

---

## ⚡ Em 30 segundos

- AWS cuida da segurança DA nuvem; você, da segurança NA nuvem.
- IAM: Deny explícito > Allow explícito > Deny padrão. Root só com MFA.
- Cada serviço de segurança tem um foco: KMS cifra, Shield segura DDoS, WAF filtra pedidos, GuardDuty detecta ameaças.

## 🎯 Se a questão fala em… pense em…

| Se a questão fala em… | Pense em… |
|:--|:--|
| Patches do SO no EC2 | **Você** |
| Patches do SO no RDS | **AWS** |
| Credencial temporária para um serviço | **IAM Role** |
| Segundo fator de login | **MFA** |
| Bloquear um IP na sub-rede inteira | **NACL** |
| Firewall da instância (stateful) | **Security Group** |
| Criptografar S3, EBS, RDS | **KMS** |
| "FIPS 140-2 nível 3" / hardware dedicado | **CloudHSM** |
| Quem fez o quê, quando | **CloudTrail** |
| DDoS com equipe 24/7 | **Shield Advanced** |
| SQL injection, XSS, bots | **WAF** |
| Ameaça ativa / comportamento anômalo | **GuardDuty** |
| Vulnerabilidades (CVE) | **Inspector** |
| CPF ou cartão exposto no S3 | **Macie** |
| Relatórios de conformidade da AWS | **AWS Artifact** |

## ⚠️ Pegadinhas

- IAM é global — não é configurado por região.
- Security Group só tem Allow; quem tem Deny é a NACL.
- CloudTrail (auditoria) ≠ CloudWatch (métricas e logs).
- Dados e IAM são sempre seus, em qualquer modelo de serviço.

---

<div align="center">

📚 [Módulos do domínio](./README.md) &nbsp;·&nbsp; 🎯 [Simulado do domínio](../simulados/simulado-dominio-2.md) &nbsp;·&nbsp; 📖 [Glossário](../../GLOSSARIO.md) &nbsp;·&nbsp; 🏠 [Trilha Cloud](../README.md)

</div>
