# 🏆 Simulado Geral — AWS Certified Cloud Practitioner (CLF-C02)

> **65 questões** no estilo do exame real, na proporção oficial dos domínios (D1 24% · D2 30% · D3 34% · D4 12%).
> Cronometre **90 minutos**, como na prova. Meta de aprovação: **70%** (46 de 65).

> [!IMPORTANT]
> Questões **no estilo** do CLF-C02, criadas pela Liga — não são as questões reais nem braindumps. Treine o raciocínio, não a decoreba.

<br>

---


**1. Uma empresa quer parar de comprar servidores e pagar apenas pelos recursos que usar. Que modelo isso descreve?**

- A) Pay-as-you-go
- B) CapEx antecipado
- C) On-premises
- D) Colocation

<details><summary>Ver resposta</summary>

✅ **A** — Pagar pelo uso, sem compra antecipada, é o pay-as-you-go (troca de CapEx por OpEx).
</details>


**2. O ajuste automático de recursos para cima e para baixo conforme a demanda chama-se:**

- A) Durabilidade
- B) Elasticidade
- C) Escalabilidade vertical fixa
- D) Latência

<details><summary>Ver resposta</summary>

✅ **B** — Elasticidade = ajuste automático e bidirecional conforme a demanda.
</details>


**3. Dados que, por lei, devem ficar no país influenciam diretamente:**

- A) O tipo de instância
- B) A escolha da Região
- C) A cor do console
- D) O número de buckets

<details><summary>Ver resposta</summary>

✅ **B** — Conformidade/soberania de dados determina a escolha da Região (que é isolada).
</details>


**4. No modelo SaaS, quem gerencia o sistema operacional e o software?**

- A) O cliente
- B) O provedor
- C) Ninguém
- D) Um terceiro contratado

<details><summary>Ver resposta</summary>

✅ **B** — No SaaS o provedor gerencia tudo; o cliente só usa o software.
</details>


**5. Trocar grandes compras de servidores por uma fatura mensal pelo uso é:**

- A) OpEx para CapEx
- B) CapEx para OpEx
- C) Aumento de durabilidade
- D) Redução de agilidade

<details><summary>Ver resposta</summary>

✅ **B** — A nuvem troca CapEx (compra antecipada) por OpEx (pagamento pelo uso).
</details>


**6. Quantas Zonas de Disponibilidade uma Região da AWS tem, no mínimo?**

- A) Uma
- B) Duas
- C) Três
- D) Dez

<details><summary>Ver resposta</summary>

✅ **C** — Toda Região tem no mínimo 3 AZs isoladas.
</details>


**7. Qual serviço é de escopo GLOBAL?**

- A) Amazon EC2
- B) Amazon EBS
- C) AWS IAM
- D) Sub-rede

<details><summary>Ver resposta</summary>

✅ **C** — IAM é global; EC2, EBS e sub-redes são zonais.
</details>


**8. Para entregar conteúdo com baixa latência perto do usuário final, a AWS usa:**

- A) Regiões apenas
- B) Edge Locations
- C) Somente AZs
- D) Instâncias EC2

<details><summary>Ver resposta</summary>

✅ **B** — Edge Locations (via CloudFront) fazem cache perto do usuário.
</details>


**9. O framework com 6 pilares que avalia a qualidade de uma ARQUITETURA é o:**

- A) CAF
- B) Well-Architected
- C) Shared Responsibility
- D) Trusted Advisor

<details><summary>Ver resposta</summary>

✅ **B** — Well-Architected avalia arquitetura em 6 pilares.
</details>


**10. Qual é o pilar mais recente do Well-Architected, focado em impacto ambiental?**

- A) Confiabilidade
- B) Sustentabilidade
- C) Segurança
- D) Desempenho

<details><summary>Ver resposta</summary>

✅ **B** — Sustentabilidade é o 6º e mais novo pilar.
</details>


**11. Migrar uma aplicação 'como está', sem alterações, o mais rápido possível, é:**

- A) Refactor
- B) Rehost (lift and shift)
- C) Repurchase
- D) Retire

<details><summary>Ver resposta</summary>

✅ **B** — Rehost = lift and shift (mover sem mudar).
</details>


**12. A AWS consegue preços baixos principalmente por:**

- A) Não ter custos
- B) Economia de escala
- C) Cobrar taxas ocultas
- D) Hardware barato

<details><summary>Ver resposta</summary>

✅ **B** — Economia de escala: muitos clientes dividem uma infra enorme.
</details>


**13. Somar energia, refrigeração, equipe e ociosidade ao comparar custos é aplicar o conceito de:**

- A) CapEx
- B) TCO (Custo Total de Propriedade)
- C) Elasticidade
- D) Rehost

<details><summary>Ver resposta</summary>

✅ **B** — TCO inclui todos os custos, inclusive os invisíveis.
</details>


**14. Uma empresa mantém sistemas no data center e cria os novos na nuvem, integrados. Modelo:**

- A) Nuvem pública
- B) On-premises
- C) Híbrido
- D) SaaS

<details><summary>Ver resposta</summary>

✅ **C** — Híbrido = parte local, parte na nuvem, integradas.
</details>


**15. Qual analogia representa o modelo IaaS?**

- A) Pizza pronta no delivery
- B) Pizza pré-assada
- C) Ingredientes para você montar
- D) Rodízio de pizza

<details><summary>Ver resposta</summary>

✅ **C** — IaaS = ingredientes crus; você monta (máximo controle).
</details>


**16. Selecione as DUAS afirmações corretas. (escolha 2)** *(escolha 2)*

- A) Escalabilidade é poder crescer; elasticidade é o ajuste automático
- B) IaaS e SaaS são modelos de implantação
- C) Economia de escala reduz o custo por unidade
- D) 'A nuvem é sempre mais barata' é uma verdade absoluta

<details><summary>Ver resposta</summary>

✅ **A, C** — A e C corretas. IaaS/SaaS são modelos de serviço; 'sempre mais barata' é falso (depende do TCO).
</details>


**17. Um bucket S3 ficou público por engano, expondo dados. A responsabilidade é:**

- A) Da AWS
- B) Do cliente
- C) De ninguém
- D) Do fornecedor de internet

<details><summary>Ver resposta</summary>

✅ **B** — Configurar acesso aos próprios dados é segurança 'na' nuvem — do cliente.
</details>


**18. Qual tarefa é responsabilidade da AWS?**

- A) Políticas de IAM
- B) Segurança física dos data centers
- C) Criptografar dados do cliente
- D) Patch do SO no EC2

<details><summary>Ver resposta</summary>

✅ **B** — Segurança física é infraestrutura — sempre da AWS.
</details>


**19. A melhor forma de uma instância EC2 acessar o S3 com segurança é:**

- A) Chaves do root no código
- B) IAM Role na instância
- C) Bucket público
- D) Senha compartilhada

<details><summary>Ver resposta</summary>

✅ **B** — Roles dão credenciais temporárias sem chaves fixas.
</details>


**20. Uma política permite s3:* e outra nega s3:DeleteObject. Apagar objetos é:**

- A) Permitido
- B) Negado (deny explícito vence)
- C) Depende da ordem
- D) Permitido para admin

<details><summary>Ver resposta</summary>

✅ **B** — Deny explícito sempre vence o Allow.
</details>


**21. Melhor prática para o usuário root:**

- A) Usar no dia a dia
- B) Compartilhar
- C) Ativar MFA e não usar no cotidiano
- D) Apagar

<details><summary>Ver resposta</summary>

✅ **C** — Root: MFA, guardar e usar só em tarefas exclusivas.
</details>


**22. A criptografia que protege dados guardados no disco chama-se:**

- A) Em trânsito
- B) Em repouso
- C) Em memória
- D) Física

<details><summary>Ver resposta</summary>

✅ **B** — Em repouso = dado parado/armazenado.
</details>


**23. Serviço para guardar e rotacionar automaticamente senhas de banco:**

- A) Amazon S3
- B) AWS Secrets Manager
- C) Amazon Macie
- D) AWS Artifact

<details><summary>Ver resposta</summary>

✅ **B** — Secrets Manager guarda e rotaciona segredos.
</details>


**24. Serviço que registra quem fez qual ação (API) e quando (auditoria):**

- A) CloudWatch
- B) CloudTrail
- C) Shield
- D) Inspector

<details><summary>Ver resposta</summary>

✅ **B** — CloudTrail = trilha de auditoria.
</details>


**25. Serviço que monitora saúde e desempenho (métricas, logs, alarmes):**

- A) CloudTrail
- B) CloudWatch
- C) Artifact
- D) WAF

<details><summary>Ver resposta</summary>

✅ **B** — CloudWatch = monitoramento de desempenho.
</details>


**26. Proteção contra ataques DDoS:**

- A) AWS WAF
- B) AWS Shield
- C) Amazon Macie
- D) Amazon Inspector

<details><summary>Ver resposta</summary>

✅ **B** — Shield = anti-DDoS. WAF filtra requisições maliciosas.
</details>


**27. Firewall de aplicação web que bloqueia SQL injection:**

- A) AWS Shield
- B) AWS WAF
- C) GuardDuty
- D) Inspector

<details><summary>Ver resposta</summary>

✅ **B** — WAF filtra requisições maliciosas em apps web.
</details>


**28. Detecção contínua de ameaças e atividades suspeitas na conta:**

- A) Amazon Inspector
- B) Amazon GuardDuty
- C) AWS Config
- D) AWS WAF

<details><summary>Ver resposta</summary>

✅ **B** — GuardDuty detecta ameaças; Inspector varre vulnerabilidades.
</details>


**29. Portal para baixar relatórios de conformidade e certificações da AWS:**

- A) CloudWatch
- B) AWS Artifact
- C) Trusted Advisor
- D) Shield

<details><summary>Ver resposta</summary>

✅ **B** — Artifact = documentos de conformidade.
</details>


**30. Descobrir dados sensíveis (PII) no S3 usando machine learning:**

- A) GuardDuty
- B) Amazon Macie
- C) Inspector
- D) KMS

<details><summary>Ver resposta</summary>

✅ **B** — Macie descobre dados sensíveis no S3.
</details>


**31. Serviço gerenciado para criar e controlar chaves de criptografia:**

- A) AWS KMS
- B) Amazon Cognito
- C) AWS WAF
- D) CloudTrail

<details><summary>Ver resposta</summary>

✅ **A** — KMS gerencia chaves de criptografia.
</details>


**32. Para milhões de usuários finais de um app fazerem login, use:**

- A) AWS IAM
- B) Amazon Cognito
- C) AWS Organizations
- D) IAM Identity Center

<details><summary>Ver resposta</summary>

✅ **B** — Cognito = identidades dos usuários finais do app.
</details>


**33. Autenticação vs. autorização: autenticação é...**

- A) o que você pode fazer
- B) provar quem você é
- C) criptografar dados
- D) auditar ações

<details><summary>Ver resposta</summary>

✅ **B** — Autenticação = provar identidade; autorização = o que pode fazer.
</details>


**34. Exigência de hardware dedicado e controle exclusivo das chaves pede:**

- A) AWS KMS
- B) AWS CloudHSM
- C) Secrets Manager
- D) ACM

<details><summary>Ver resposta</summary>

✅ **B** — CloudHSM = hardware dedicado e exclusivo.
</details>


**35. Selecione as DUAS responsabilidades do CLIENTE. (escolha 2)** *(escolha 2)*

- A) Configurar um Security Group
- B) Manter a refrigeração do data center
- C) Gerenciar permissões de IAM
- D) Proteger fisicamente os servidores

<details><summary>Ver resposta</summary>

✅ **A, C** — Config de SG e IAM são do cliente; refrigeração e proteção física são da AWS.
</details>


**36. Controlar a AWS de dentro do código de uma aplicação usa o:**

- A) Console
- B) CLI
- C) SDK
- D) CloudFormation

<details><summary>Ver resposta</summary>

✅ **C** — SDK controla a AWS pelo código do app.
</details>


**37. Provisionar infraestrutura de forma automatizada e versionada (IaC):**

- A) Console manual
- B) CloudFormation
- C) Artifact
- D) S3

<details><summary>Ver resposta</summary>

✅ **B** — CloudFormation = Infraestrutura como Código.
</details>


**38. Carga em lote interrompível com o menor custo possível:**

- A) On-Demand
- B) Reserved
- C) Spot
- D) Dedicated

<details><summary>Ver resposta</summary>

✅ **C** — Spot: até ~90% off para cargas tolerantes a interrupção.
</details>


**39. Carga estável 24/7 o ano todo, buscando economia por compromisso:**

- A) Spot
- B) On-Demand
- C) Reserved / Savings Plans
- D) Fargate

<details><summary>Ver resposta</summary>

✅ **C** — Reserved/Savings para carga previsível.
</details>


**40. Executar código a cada evento, sem servidor, pagando pela execução:**

- A) EC2
- B) AWS Lambda
- C) EKS
- D) Dedicated Hosts

<details><summary>Ver resposta</summary>

✅ **B** — Lambda = serverless orientado a eventos.
</details>


**41. Rodar containers sem gerenciar os servidores subjacentes:**

- A) EC2
- B) AWS Fargate
- C) Dedicated Hosts
- D) EBS

<details><summary>Ver resposta</summary>

✅ **B** — Fargate = serverless para containers.
</details>


**42. Armazenar milhões de imagens acessíveis pela internet, escala ilimitada:**

- A) EBS
- B) Amazon S3
- C) EFS
- D) Instance Store

<details><summary>Ver resposta</summary>

✅ **B** — S3 = objetos, escala ilimitada, 11 noves.
</details>


**43. Backup de 7 anos, raro acesso, custo mínimo (recuperação lenta ok):**

- A) S3 Standard
- B) S3 Standard-IA
- C) S3 Glacier Deep Archive
- D) S3 Intelligent-Tiering

<details><summary>Ver resposta</summary>

✅ **C** — Glacier Deep Archive = arquivamento barato.
</details>


**44. Disco de blocos persistente para UMA instância EC2:**

- A) S3
- B) EFS
- C) EBS
- D) Glacier

<details><summary>Ver resposta</summary>

✅ **C** — EBS = HD virtual de uma instância (zonal).
</details>


**45. Sistema de arquivos compartilhado por VÁRIAS instâncias ao mesmo tempo:**

- A) EBS
- B) EFS
- C) S3 Glacier
- D) Instance Store

<details><summary>Ver resposta</summary>

✅ **B** — EFS = arquivos compartilhados, regional.
</details>


**46. O que torna uma sub-rede 'pública'?**

- A) Marcar uma caixa
- B) Ter rota para um Internet Gateway
- C) Estar nos EUA
- D) Ter várias instâncias

<details><summary>Ver resposta</summary>

✅ **B** — Rota para o IGW na tabela de rotas define a sub-rede pública.
</details>


**47. Instância privada precisa baixar updates sem aceitar conexões de fora:**

- A) Internet Gateway direto
- B) NAT Gateway
- C) Edge Location
- D) Mover para sub-rede pública

<details><summary>Ver resposta</summary>

✅ **B** — NAT Gateway permite saída sem expor a entrada.
</details>


**48. Security Group vs. NACL:**

- A) Ambos stateless
- B) SG stateful (instância); NACL stateless (sub-rede)
- C) SG na sub-rede
- D) Ambos só deny

<details><summary>Ver resposta</summary>

✅ **B** — SG stateful/instância; NACL stateless/sub-rede.
</details>


**49. Serviço de DNS da AWS (traduz nomes em IPs):**

- A) CloudFront
- B) Route 53
- C) VPC
- D) NAT Gateway

<details><summary>Ver resposta</summary>

✅ **B** — Route 53 = DNS.
</details>


**50. CDN da AWS que entrega conteúdo perto do usuário:**

- A) Route 53
- B) Amazon CloudFront
- C) VPC
- D) IGW

<details><summary>Ver resposta</summary>

✅ **B** — CloudFront = CDN via Edge Locations.
</details>


**51. Banco relacional gerenciado (MySQL, PostgreSQL etc.):**

- A) DynamoDB
- B) Amazon RDS
- C) Redshift
- D) Neptune

<details><summary>Ver resposta</summary>

✅ **B** — RDS = relacional gerenciado.
</details>


**52. Banco NoSQL serverless com milissegundos em qualquer escala:**

- A) RDS
- B) DynamoDB
- C) Aurora
- D) Redshift

<details><summary>Ver resposta</summary>

✅ **B** — DynamoDB = NoSQL serverless.
</details>


**53. Data warehouse para análise de grandes volumes (BI):**

- A) DynamoDB
- B) Amazon Redshift
- C) RDS
- D) Neptune

<details><summary>Ver resposta</summary>

✅ **B** — Redshift = data warehouse/BI.
</details>


**54. Recurso do RDS para alta disponibilidade com failover automático:**

- A) Read Replica
- B) Multi-AZ
- C) ElastiCache
- D) Intelligent-Tiering

<details><summary>Ver resposta</summary>

✅ **B** — Multi-AZ = disponibilidade/failover.
</details>


**55. Distribuir tráfego entre instâncias saudáveis (com health check):**

- A) Auto Scaling
- B) Elastic Load Balancing
- C) CloudFront
- D) Route 53

<details><summary>Ver resposta</summary>

✅ **B** — ELB distribui + health check.
</details>


**56. Ajustar automaticamente o NÚMERO de instâncias conforme a demanda:**

- A) ELB
- B) EC2 Auto Scaling
- C) CloudFront
- D) S3

<details><summary>Ver resposta</summary>

✅ **B** — Auto Scaling ajusta a quantidade.
</details>


**57. Selecione as DUAS afirmações corretas. (escolha 2)** *(escolha 2)*

- A) Fargate roda containers sem gerenciar servidores
- B) Spot é ideal para bancos de produção que não podem parar
- C) Multi-AZ serve para alta disponibilidade
- D) CloudFront é o serviço de DNS da AWS

<details><summary>Ver resposta</summary>

✅ **A, C** — A e C corretas. Spot pode ser interrompido; DNS é o Route 53.
</details>


**58. Qual transferência de dados costuma ser gratuita na AWS?**

- A) Saída (outbound)
- B) Entrada (inbound)
- C) Toda é cobrada
- D) Nenhuma

<details><summary>Ver resposta</summary>

✅ **B** — Entrada costuma ser grátis; saída é cobrada.
</details>


**59. Os três pilares de custo da AWS são:**

- A) Usuários, Região, interface
- B) Computação, armazenamento, transferência
- C) Suporte, treino, certificação
- D) CPU, GPU, RAM

<details><summary>Ver resposta</summary>

✅ **B** — Computação, armazenamento e transferência de dados.
</details>


**60. Estimar o custo de uma arquitetura ANTES de construir:**

- A) Cost Explorer
- B) Budgets
- C) Pricing Calculator
- D) CUR

<details><summary>Ver resposta</summary>

✅ **C** — Pricing Calculator = estimativa prévia.
</details>


**61. Ser avisado ao se aproximar de um limite de gasto:**

- A) Budgets
- B) Cost Explorer
- C) Pricing Calculator
- D) Trusted Advisor

<details><summary>Ver resposta</summary>

✅ **A** — Budgets = alerta de orçamento.
</details>


**62. Plano de suporte com 24/7 e Trusted Advisor completo, sem TAM:**

- A) Basic
- B) Developer
- C) Business
- D) Enterprise

<details><summary>Ver resposta</summary>

✅ **C** — Business = 24/7 + Trusted Advisor completo.
</details>


**63. Recurso exclusivo do plano Enterprise:**

- A) Documentação
- B) TAM dedicado
- C) Fóruns
- D) Trusted Advisor básico

<details><summary>Ver resposta</summary>

✅ **B** — TAM é exclusivo do Enterprise.
</details>


**64. Serviço que recomenda melhorias em custos, segurança, desempenho, tolerância a falhas e limites:**

- A) CloudTrail
- B) Trusted Advisor
- C) Budgets
- D) Health Dashboard

<details><summary>Ver resposta</summary>

✅ **B** — Trusted Advisor = 5 categorias.
</details>


**65. Selecione as DUAS afirmações corretas. (escolha 2)** *(escolha 2)*

- A) Cost Explorer analisa gastos passados
- B) O 24/7 por telefone começa no Developer
- C) AWS Organizations permite faturamento consolidado
- D) Entrada de dados é sempre mais cara que saída

<details><summary>Ver resposta</summary>

✅ **A, C** — A e C corretas. 24/7 começa no Business; entrada costuma ser grátis.
</details>


<br>

---


## 📊 Como avaliar seu resultado

| Acertos (de 65) | Situação |
|:--:|:--|
| 46+ (70%+) | ✅ Pronto para a prova! |
| 39–45 (60–69%) | ⚠️ Quase lá — revise os domínios mais fracos |
| Menos de 39 | 📚 Volte aos módulos e refaça os simulados por domínio |


---

<div align="center">

⬅️ [Simulado do Domínio 4](./simulado-dominio-4.md) · 🎯 [Simulados](./README.md) · 🏠 [Início da Trilha](../README.md)

</div>
