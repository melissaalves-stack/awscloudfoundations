<div align="center">

# 📄 Revisão de véspera

**Domínio 3 · Tecnologia e Serviços** · 34% do CLF-C02 — o maior

<sub>Uma página para reler antes da prova</sub>

</div>

---

## ⚡ Em 30 segundos

- A prova pergunta "qual serviço resolve este cenário?" — pense por categoria.
- Computação vai de controle total (EC2) a zero servidor (Lambda, Fargate).
- Escolha o banco pelo formato do dado: relacional, NoSQL, cache ou analytics.

## 🎯 Se a questão fala em… pense em…

| Se a questão fala em… | Pense em… |
|:--|:--|
| Servidor virtual com controle do SO | **EC2** |
| Código por evento, pago por execução | **Lambda** |
| Containers sem gerenciar servidor | **Fargate** |
| Subir o código e pronto | **Elastic Beanstalk** |
| Simples e preço fixo | **Lightsail** |
| Objetos com 11 noves de durabilidade | **S3** |
| Disco de uma instância | **EBS** |
| Arquivos compartilhados entre instâncias | **EFS** |
| Relacional gerenciado | **RDS / Aurora** |
| NoSQL em milissegundos | **DynamoDB** |
| Cache em memória | **ElastiCache** |
| Análise de petabytes | **Redshift** |
| Rede isolada | **VPC** |
| DNS | **Route 53** |
| Distribuir tráfego entre instâncias | **ELB** |
| Fila para desacoplar | **SQS** |
| Notificar vários assinantes | **SNS** |
| Infraestrutura como código | **CloudFormation** |

## ⚠️ Pegadinhas

- EBS é de uma instância; EFS é compartilhado.
- Redshift é analytics (OLAP), não transações rápidas (OLTP).
- SNS empurra (push); SQS espera ser lido (pull).

---

<div align="center">

📚 [Módulos do domínio](./README.md) &nbsp;·&nbsp; 🎯 [Simulado do domínio](../simulados/simulado-dominio-3.md) &nbsp;·&nbsp; 📖 [Glossário](../../GLOSSARIO.md) &nbsp;·&nbsp; 🏠 [Trilha Cloud](../README.md)

</div>
