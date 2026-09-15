# 🎯 Simulado — Domínio 3: Tecnologia e Serviços

> **12 questões** no estilo CLF-C02 · Domínio 3 (34% do exame — o maior) · Cobre os módulos 08 a 13.
> Meta: acertar 9 ou mais (75%).

<br>

**1. Uma desenvolvedora quer controlar a AWS de dentro do código Python da aplicação. O que usar?**

- A) Console
- B) AWS CLI
- C) AWS SDK
- D) CloudFormation

<details><summary>Ver resposta</summary>

✅ **C) SDK** — controla a AWS pelo código do app.
- A) visual; B) terminal; D) IaC por arquivo.
</details>

<br>

**2. Uma equipe quer recriar toda a infraestrutura de forma automatizada, repetível e versionada. Qual serviço?**

- A) Console manual
- B) AWS CloudFormation
- C) AWS Artifact
- D) Amazon S3

<details><summary>Ver resposta</summary>

✅ **B) CloudFormation** — Infraestrutura como Código.
- A) manual gera erro/diferença; C) conformidade; D) armazenamento.
</details>

<br>

**3. Um processamento em lote pode ser interrompido e retomado, e a empresa quer o menor custo. Qual modelo de compra do EC2?**

- A) On-Demand
- B) Reserved
- C) Spot
- D) Dedicated Hosts

<details><summary>Ver resposta</summary>

✅ **C) Spot** — até ~90% off para cargas tolerantes a interrupção.
- A) sem maior desconto; B) para carga constante; D) hardware exclusivo.
</details>

<br>

**4. Uma aplicação roda 24/7 o ano todo, com uso estável. Como economizar?**

- A) Spot
- B) On-Demand
- C) Reserved / Savings Plans
- D) Fargate

<details><summary>Ver resposta</summary>

✅ **C) Reserved / Savings Plans** — desconto por compromisso para carga previsível.
- A) pode ser interrompida; B) mais caro para uso constante; D) não é modelo de compra.
</details>

<br>

**5. Uma função deve rodar a cada upload no S3, sem gerenciar servidores, pagando só pela execução. Qual serviço?**

- A) EC2
- B) AWS Lambda
- C) EKS
- D) Dedicated Hosts

<details><summary>Ver resposta</summary>

✅ **B) Lambda** — código por evento, serverless, paga pela execução.
- A) exige gerenciar servidor; C) orquestra containers; D) oposto de serverless.
</details>

<br>

**6. Uma empresa precisa armazenar milhões de imagens acessíveis pela internet, com escala ilimitada e 11 noves de durabilidade. Qual serviço?**

- A) EBS
- B) S3
- C) EFS
- D) Instance Store

<details><summary>Ver resposta</summary>

✅ **B) S3** — armazenamento de objetos, escala ilimitada, 11 noves.
- A) disco de uma instância; C) arquivos compartilhados; D) temporário.
</details>

<br>

**7. Um backup deve ficar 7 anos, quase nunca acessado, ao menor custo (recuperação pode demorar). Qual classe do S3?**

- A) S3 Standard
- B) S3 Standard-IA
- C) S3 Glacier Deep Archive
- D) S3 Intelligent-Tiering

<details><summary>Ver resposta</summary>

✅ **C) Glacier Deep Archive** — arquivamento de longo prazo, custo mínimo.
- A) caro para dado raro; B) para acesso pouco frequente mas rápido; D) para padrão imprevisível.
</details>

<br>

**8. Várias instâncias EC2 precisam ler e gravar nos MESMOS arquivos ao mesmo tempo. Qual serviço?**

- A) EBS
- B) EFS
- C) S3 Glacier
- D) Instance Store

<details><summary>Ver resposta</summary>

✅ **B) EFS** — sistema de arquivos compartilhado por várias instâncias.
- A) liga-se a uma instância; C) arquivamento; D) temporário e local.
</details>

<br>

**9. Qual descreve corretamente Security Group vs. NACL?**

- A) Ambos stateless, na sub-rede.
- B) SG é stateful (instância); NACL é stateless (sub-rede).
- C) SG na sub-rede; NACL na instância.
- D) Ambos só têm regras de deny.

<details><summary>Ver resposta</summary>

✅ **B)** SG = stateful, nível da instância; NACL = stateless, nível da sub-rede.
- A) SG é stateful; C) invertido; D) SG só tem allow.
</details>

<br>

**10. Um jogo online precisa de um banco NoSQL serverless, com milissegundos em qualquer escala. Qual serviço?**

- A) Amazon RDS
- B) Amazon DynamoDB
- C) Amazon Redshift
- D) Amazon Aurora

<details><summary>Ver resposta</summary>

✅ **B) DynamoDB** — NoSQL serverless, baixa latência em escala.
- A) e D) relacionais; C) data warehouse (análise).
</details>

<br>

**11. Uma empresa quer que o número de instâncias aumente e diminua automaticamente conforme a demanda. Qual serviço?**

- A) Elastic Load Balancing
- B) EC2 Auto Scaling
- C) CloudFront
- D) Route 53

<details><summary>Ver resposta</summary>

✅ **B) EC2 Auto Scaling** — ajusta a quantidade de instâncias.
- A) distribui tráfego; C) CDN; D) DNS.
</details>

<br>

**12. Selecione as DUAS afirmações corretas.** *(escolha 2)*

- A) O AWS Fargate roda containers sem você gerenciar servidores.
- B) Instâncias Spot são recomendadas para bancos de produção que não podem parar.
- C) Multi-AZ no RDS serve para alta disponibilidade (failover).
- D) O CloudFront é o serviço de DNS da AWS.

<details><summary>Ver resposta</summary>

✅ **A) e C)**
- B) Spot pode ser interrompido — nunca para carga crítica; D) DNS é o Route 53 (CloudFront é CDN).
</details>

<br>

---

<div align="center">

⬅️ [Simulado do Domínio 2](./simulado-dominio-2.md) · 🎯 [Simulados](./README.md) · ➡️ [Simulado do Domínio 4](./simulado-dominio-4.md)

</div>
