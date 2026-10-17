<div align="center">

# 📄 Revisão de véspera

**Domínio 5 · Segurança, Conformidade e Governança** · 14% do AIF-C01

<sub>Uma página para reler antes da prova</sub>

</div>

---

## ⚡ Em 30 segundos

- Responsabilidade compartilhada também vale para IA.
- Proteja dados de treino e de inferência com IAM, criptografia e rede privada.
- Governança: registrar, auditar e controlar quem usa quais modelos.

## 🎯 Se a questão fala em… pense em…

| Se a questão fala em… | Pense em… |
|:--|:--|
| Instrução maliciosa escondida no prompt | **Prompt injection** |
| Bloquear temas e dados sensíveis | **Guardrails** |
| Controlar quem chama o modelo | **IAM** |
| Criptografar dados e modelos | **KMS** |
| Tráfego sem passar pela internet | **VPC endpoints / PrivateLink** |
| Auditar chamadas ao Bedrock | **CloudTrail** |
| Relatórios de conformidade | **AWS Artifact** |

## ⚠️ Pegadinhas

- No Bedrock, seus prompts e dados não são usados para treinar os modelos base.
- Prompt injection é ataque pela entrada, não falha de infraestrutura.

---

<div align="center">

📚 [Módulos do domínio](./README.md) &nbsp;·&nbsp; 📖 [Glossário](../../GLOSSARIO.md) &nbsp;·&nbsp; 🏠 [Trilha IA](../README.md)

</div>
