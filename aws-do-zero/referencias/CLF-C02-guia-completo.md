# AWS Certified Cloud Practitioner (CLF-C02) — Conteúdo Completo

**Formato:** 65 questões · 90 minutos · nota de corte 700/1000 · US$ 100 · validade 3 anos

**Peso dos domínios:**
- Domínio 1 — Conceitos de Nuvem: **24%**
- Domínio 2 — Segurança e Conformidade: **30%**
- Domínio 3 — Tecnologia e Serviços: **34%**
- Domínio 4 — Cobrança, Preços e Suporte: **12%**

> Regra de ouro da prova: ela não pede que você configure nada. Ela pede que você saiba **qual serviço resolve qual problema**. Estude por "quando eu uso isso?".

---

# DOMÍNIO 1 — Conceitos de Nuvem (24%)

## 1.1 O que é computação em nuvem

Entrega sob demanda de recursos de TI pela internet, com pagamento conforme o uso. Sem comprar servidor, sem data center próprio.

**Os 6 benefícios da nuvem AWS (decore, cai direto):**
1. Trocar despesa de capital (CapEx) por despesa variável (OpEx)
2. Beneficiar-se de economias de escala massivas
3. Parar de adivinhar capacidade
4. Aumentar velocidade e agilidade
5. Parar de gastar dinheiro mantendo data centers
6. Tornar-se global em minutos

## 1.2 Modelos de implantação

- **Nuvem (cloud-native):** tudo na AWS
- **Híbrido:** parte na AWS, parte on-premises (usa Direct Connect, Storage Gateway, Outposts)
- **On-premises / nuvem privada:** infraestrutura própria

## 1.3 Modelos de serviço

- **IaaS** — Infraestrutura como serviço. Você controla SO, rede, storage. Ex: EC2, VPC, EBS
- **PaaS** — Plataforma como serviço. Você só cuida do código. Ex: Elastic Beanstalk, RDS, Lambda
- **SaaS** — Software pronto. Ex: Amazon WorkMail, Amazon Chime, produtos do Marketplace

## 1.4 Conceitos que a prova adora confundir

- **Escalabilidade** — capacidade de crescer. *Vertical* = instância maior (scale up). *Horizontal* = mais instâncias (scale out)
- **Elasticidade** — crescer **e** encolher automaticamente conforme a demanda
- **Agilidade** — velocidade de experimentar e inovar
- **Alta disponibilidade (HA)** — sistema continua funcionando; usa múltiplas AZs
- **Tolerância a falhas** — componente falha e ninguém percebe (redundância)
- **Disaster Recovery (DR)** — recuperar após desastre. Estratégias, do mais barato/lento ao mais caro/rápido:
  1. Backup & Restore
  2. Pilot Light
  3. Warm Standby
  4. Multi-Site / Active-Active
- **RTO** = tempo aceitável para voltar ao ar. **RPO** = quanto de dado você aceita perder

## 1.5 Infraestrutura global da AWS

- **Região (Region)** — área geográfica (ex: sa-east-1 São Paulo). Isolada das outras. Escolha por: latência, conformidade/soberania de dados, disponibilidade do serviço, preço
- **Zona de Disponibilidade (AZ)** — um ou mais data centers dentro da região, isolados fisicamente. Toda região tem no mínimo 3. Use múltiplas AZs = alta disponibilidade
- **Edge Locations / Pontos de Presença** — centenas no mundo, usados por CloudFront, Route 53, Global Accelerator. Servem cache perto do usuário
- **Local Zones** — extensão da região perto de grandes cidades, para latência ultrabaixa
- **Wavelength Zones** — dentro de redes 5G das operadoras
- **AWS Outposts** — racks físicos da AWS dentro do seu data center (híbrido de verdade)

## 1.6 AWS Well-Architected Framework — 6 pilares

1. **Excelência Operacional** — automatizar, monitorar, melhorar processos
2. **Segurança** — proteger dados, sistemas e ativos
3. **Confiabilidade (Reliability)** — recuperar de falhas, escalar
4. **Eficiência de Performance** — usar recursos de forma eficiente
5. **Otimização de Custos** — não gastar à toa
6. **Sustentabilidade** — reduzir impacto ambiental

Ferramenta associada: **AWS Well-Architected Tool** (gratuita, no console).

## 1.7 AWS Cloud Adoption Framework (CAF) — 6 perspectivas

1. **Business** (negócio)
2. **People** (pessoas)
3. **Governance** (governança)
4. **Platform** (plataforma)
5. **Security** (segurança)
6. **Operations** (operações)

As três primeiras são de negócio; as três últimas, técnicas.

## 1.8 Estratégias de migração — os 7 Rs

1. **Rehost** — "lift and shift", move como está
2. **Replatform** — "lift, tinker and shift", pequenos ajustes (ex: banco vai pro RDS)
3. **Refactor / Rearchitect** — reescreve para nuvem nativa (o mais caro e demorado)
4. **Repurchase** — troca por um SaaS
5. **Retire** — desliga o que não é mais usado
6. **Retain** — mantém on-premises por enquanto
7. **Relocate** — move VMware para a nuvem sem alterações

**Snow Family** (migração física de dados, quando a rede não dá conta):
- **Snowcone** — até ~8/14 TB, portátil
- **Snowball Edge** — dezenas de TB (Storage Optimized / Compute Optimized)
- **Snowmobile** — caminhão, até 100 PB

---

# DOMÍNIO 2 — Segurança e Conformidade (30%)

## 2.1 Modelo de Responsabilidade Compartilhada

**A frase que resolve metade das questões:**
- AWS = segurança **DA** nuvem (hardware, data centers, rede física, virtualização)
- Cliente = segurança **NA** nuvem (seus dados, criptografia, IAM, sistema operacional, firewall, patches de aplicação)

A divisão **muda conforme o serviço**:
- **EC2** (IaaS): você é responsável por muita coisa — SO, patches, security groups
- **RDS** (gerenciado): AWS cuida do SO e patch do banco; você cuida de dados, acesso e criptografia
- **S3 / Lambda / DynamoDB** (serverless): sua responsabilidade é quase só dados e permissões

**Sempre do cliente, em qualquer serviço:** os dados, quem acessa (IAM) e classificação da informação.

## 2.2 IAM — Identity and Access Management

- Serviço **global** e **gratuito**
- **Usuário** — pessoa ou aplicação
- **Grupo** — conjunto de usuários (grupos não contêm outros grupos)
- **Função (Role)** — identidade temporária assumida por serviços ou usuários. **Jeito certo de dar permissão a uma EC2 acessar o S3** (nunca chave fixa na instância!)
- **Política (Policy)** — documento JSON com Effect, Action, Resource. Deny sempre vence Allow
- **MFA** — autenticação multifator. Ative sempre, principalmente no root
- **Princípio do menor privilégio** — dê só o necessário

**Boas práticas com a conta root (cai muito):**
- Nunca use o root para tarefas do dia a dia
- Ative MFA no root
- Não crie chaves de acesso para o root; se existirem, apague
- Crie um usuário administrador e use ele

**Tarefas que SÓ o root pode fazer:** mudar plano de suporte, fechar a conta, mudar e-mail/nome da conta, restaurar permissões de usuário IAM, registrar como vendedor no Marketplace.

- **IAM Identity Center** (antigo AWS SSO) — login único para múltiplas contas, integra com Active Directory
- **Amazon Cognito** — identidade para usuários de **aplicativos** (clientes finais), não funcionários
- **AWS Directory Service** — Active Directory gerenciado
- **AWS STS** — credenciais temporárias

## 2.3 AWS Organizations

- Gerencia várias contas AWS de forma central
- **Unidades Organizacionais (OUs)** — agrupam contas
- **SCPs (Service Control Policies)** — limitam o que as contas podem fazer (não concedem permissão, só restringem). SCP não afeta a conta de gerenciamento
- **Cobrança consolidada** — uma fatura só + descontos por volume agregados + Reserved Instances/Savings Plans compartilhados

## 2.4 Conformidade

- **AWS Artifact** — portal de autoatendimento para baixar relatórios de conformidade (SOC, ISO, PCI DSS) e acordos
- **AWS Audit Manager** — automatiza coleta de evidências para auditoria
- **AWS Config** — registra e avalia configurações dos recursos ao longo do tempo ("meu bucket está público?")
- Programas: ISO 27001, SOC 1/2/3, PCI DSS, HIPAA, FedRAMP, GDPR, LGPD

## 2.5 Serviços de segurança — o que cada um faz

**Detecção e monitoramento:**
- **Amazon GuardDuty** — detecção inteligente de ameaças, analisa logs (VPC Flow Logs, CloudTrail, DNS). Não precisa instalar nada
- **Amazon Inspector** — varredura de **vulnerabilidades** em EC2, containers (ECR) e Lambda
- **Amazon Macie** — descobre **dados sensíveis / PII** no S3 usando ML
- **Amazon Detective** — investiga a **causa raiz** de um incidente
- **AWS Security Hub** — painel central que agrega achados do GuardDuty, Inspector, Macie etc.

**Proteção:**
- **AWS Shield Standard** — proteção DDoS automática e **grátis** para todos
- **AWS Shield Advanced** — DDoS avançado, pago (US$ 3.000/mês), inclui equipe de resposta (DRT) e proteção de custos
- **AWS WAF** — firewall de aplicação web (camada 7). Bloqueia SQL injection, XSS. Aplica em CloudFront, ALB, API Gateway
- **AWS Firewall Manager** — gerencia regras de WAF/Shield em várias contas
- **AWS Network Firewall** — firewall de rede na VPC

**Criptografia e segredos:**
- **AWS KMS** — cria e gerencia chaves de criptografia (integra com quase tudo)
- **AWS CloudHSM** — módulo de hardware dedicado, você controla 100% das chaves
- **AWS Secrets Manager** — guarda segredos com **rotação automática** (pago)
- **Systems Manager Parameter Store** — guarda parâmetros e segredos, mais simples e gratuito no tier padrão
- **AWS Certificate Manager (ACM)** — certificados SSL/TLS públicos gratuitos

**Auditoria e observabilidade (a dupla mais cobrada):**
- **AWS CloudTrail** — registra **QUEM fez O QUÊ** (chamadas de API). Auditoria e governança
- **Amazon CloudWatch** — **COMO está performando**. Métricas, logs, alarmes, dashboards
- **AWS Trusted Advisor** — recomendações em 5 categorias: otimização de custos, performance, segurança, tolerância a falhas, limites de serviço

## 2.6 Segurança de rede

- **Security Group** — firewall na **instância**. **Stateful** (resposta é liberada automaticamente). Só permite regras de **allow**
- **Network ACL (NACL)** — firewall na **sub-rede**. **Stateless**. Permite regras de **allow e deny**, avaliadas por número

## 2.7 Outros pontos

- Criptografia **em repouso** (KMS, S3, EBS) e **em trânsito** (TLS)
- **AWS Abuse** — e-mail para reportar uso indevido de recursos AWS
- Testes de penetração: permitidos em serviços aprovados sem pedir autorização prévia
- Modelo de segurança do S3: por padrão **tudo é privado**; Block Public Access ativo por padrão

---

# DOMÍNIO 3 — Tecnologia e Serviços (34%)

## 3.1 Como interagir com a AWS

- **Console de Gerenciamento** — interface web
- **AWS CLI** — linha de comando
- **SDKs** — Python (boto3), Java, JS etc.
- **Infraestrutura como Código:** **CloudFormation** (templates YAML/JSON, gratuito) e **AWS CDK** (escreve infra em linguagem de programação)

## 3.2 Computação

### EC2 — Elastic Compute Cloud
Servidor virtual. Você escolhe AMI (imagem), tipo de instância, rede, storage.

**Famílias de instância:**
- Uso geral (T, M) — equilíbrio
- Otimizada para computação (C) — CPU intensiva
- Otimizada para memória (R, X) — bancos em memória
- Otimizada para armazenamento (I, D) — muito I/O
- Computação acelerada (P, G, Inf, Trn) — GPU, ML

**Modelos de compra (cai MUITO):**
- **On-Demand** — paga por segundo/hora, sem compromisso. Cargas imprevisíveis e curtas
- **Reserved Instances (RI)** — compromisso de 1 ou 3 anos, até ~72% de desconto. Standard (mais barato, menos flexível) ou Convertible (troca de tipo)
- **Savings Plans** — compromisso de gasto por hora (US$/h) por 1 ou 3 anos. Mais flexível que RI. Compute SP cobre EC2, Lambda e Fargate
- **Spot** — usa capacidade ociosa, até **90% de desconto**, mas a AWS pode interromper com 2 min de aviso. Bom para: processamento em lote, análise de dados, cargas tolerantes a falha. Ruim para: banco de dados, cargas críticas
- **Dedicated Host** — servidor físico só seu. Usado para licenças BYOL e conformidade
- **Dedicated Instance** — hardware dedicado, sem controle da colocação
- **Capacity Reservation** — reserva capacidade numa AZ, sem desconto

### Outros serviços de computação
- **AWS Lambda** — serverless, roda código por evento. Máximo **15 minutos** por execução. Paga por requisição e duração
- **Amazon ECS** — orquestração de containers da AWS
- **Amazon EKS** — Kubernetes gerenciado
- **AWS Fargate** — motor serverless para containers (não gerencia servidor)
- **Amazon ECR** — registro de imagens de container
- **Elastic Beanstalk** — sobe sua aplicação e a AWS cria EC2, ELB, Auto Scaling automaticamente. Serviço **gratuito** (paga só os recursos)
- **Amazon Lightsail** — VPS simples com preço fixo mensal, para iniciantes
- **AWS Batch** — processamento em lote
- **AWS App Runner** — do código ao app web rodando, sem infra

### Escalabilidade e balanceamento
- **EC2 Auto Scaling** — adiciona/remove instâncias automaticamente (escala horizontal)
- **Elastic Load Balancing (ELB):**
  - **ALB** (Application) — camada 7, HTTP/HTTPS, roteamento por caminho/host
  - **NLB** (Network) — camada 4, TCP/UDP, latência ultrabaixa, milhões de req/s
  - **GWLB** (Gateway) — appliances de segurança de terceiros
  - **CLB** (Classic) — legado

## 3.3 Armazenamento

### Amazon S3 — objetos
- Armazenamento de objetos, ilimitado, objeto até 5 TB
- Durabilidade de **99,999999999% (11 noves)**
- Nome do bucket é **globalmente único**
- **Classes de armazenamento:**
  - **S3 Standard** — acesso frequente
  - **S3 Intelligent-Tiering** — move automaticamente entre camadas (padrão de acesso desconhecido)
  - **S3 Standard-IA** — acesso infrequente, taxa de recuperação
  - **S3 One Zone-IA** — mais barato, uma única AZ, dado recriável
  - **S3 Glacier Instant Retrieval** — arquivo com acesso em milissegundos
  - **S3 Glacier Flexible Retrieval** — minutos a horas
  - **S3 Glacier Deep Archive** — 12h, o mais barato, retenção longa (7–10 anos)
- **Lifecycle policies** — move objetos entre classes automaticamente
- **Versionamento**, **Replicação entre regiões (CRR)**, **Transfer Acceleration**
- Hospeda **site estático**

### Amazon EBS — blocos
- Disco de rede para EC2. Preso a **uma AZ**. Snapshots vão para o S3
- Tipos: gp3/gp2 (SSD uso geral), io1/io2 (SSD alta IOPS), st1 (HDD throughput), sc1 (HDD frio)

### Outros
- **Instance Store** — disco físico da instância, **efêmero** (perde ao desligar), altíssima performance
- **Amazon EFS** — sistema de arquivos NFS, Linux, compartilhado entre várias EC2 e **múltiplas AZs**
- **Amazon FSx** — FSx for Windows File Server, FSx for Lustre (HPC), NetApp ONTAP, OpenZFS
- **AWS Storage Gateway** — ponte híbrida entre on-premises e nuvem
- **AWS Backup** — backup centralizado de vários serviços

## 3.4 Redes

- **VPC** — sua rede privada virtual. Sub-redes públicas e privadas
- **Internet Gateway** — dá acesso à internet à sub-rede pública
- **NAT Gateway** — deixa sub-rede privada acessar a internet (saída) sem ser acessível de fora
- **Tabelas de rotas**, **VPC Peering** (liga duas VPCs), **Transit Gateway** (hub central para muitas VPCs)
- **VPC Endpoints** — acesso privado a serviços AWS sem passar pela internet. Gateway Endpoint (S3 e DynamoDB) e Interface Endpoint / PrivateLink (demais)
- **Amazon Route 53** — DNS gerenciado + registro de domínio + health checks. Políticas de roteamento: simples, ponderada, latência, failover, geolocalização, geoproximidade, multivalor
- **Amazon CloudFront** — CDN, entrega conteúdo em cache nos edge locations, reduz latência
- **AWS Direct Connect** — conexão física dedicada do seu data center para a AWS (consistente, privada, cara)
- **Site-to-Site VPN** — túnel criptografado pela internet (rápido de montar, mais barato)
- **AWS Global Accelerator** — melhora performance usando a rede global da AWS com IPs anycast

## 3.5 Bancos de dados

- **Amazon RDS** — relacional gerenciado: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Db2
  - **Multi-AZ** = alta disponibilidade (réplica em standby, failover automático)
  - **Read Replicas** = performance de leitura (escala leitura)
- **Amazon Aurora** — compatível com MySQL/PostgreSQL, até 5x mais rápido, 6 cópias em 3 AZs. **Aurora Serverless** escala sozinho
- **Amazon DynamoDB** — NoSQL chave-valor, serverless, latência de milissegundos de um dígito, **Global Tables** (multirregião), **DAX** (cache em memória)
- **Amazon ElastiCache** — cache gerenciado (Redis / Memcached)
- **Amazon MemoryDB** — Redis durável
- **Amazon DocumentDB** — compatível com MongoDB
- **Amazon Neptune** — banco de **grafos** (redes sociais, mecanismos de recomendação)
- **Amazon Keyspaces** — Cassandra gerenciado
- **Amazon Timestream** — séries temporais (IoT)
- **Amazon QLDB** — ledger imutável
- **AWS DMS** — Database Migration Service, migra bancos com downtime mínimo (SCT converte o schema)

## 3.6 Análise de dados

- **Amazon Redshift** — data warehouse, OLAP, petabytes
- **Amazon Athena** — consulta SQL direto no S3, **serverless**, paga por dado escaneado
- **AWS Glue** — ETL serverless + **Glue Data Catalog**
- **AWS Lake Formation** — monta data lake com governança
- **Amazon EMR** — Hadoop, Spark, Hive gerenciados
- **Amazon Kinesis** — dados em **tempo real** (Data Streams, Firehose, Data Analytics, Video Streams)
- **Amazon MSK** — Kafka gerenciado
- **Amazon QuickSight** — BI e dashboards
- **Amazon OpenSearch Service** — busca e análise de logs
- **AWS Data Exchange** — dados de terceiros

## 3.7 Integração de aplicações

- **Amazon SQS** — fila de mensagens, **desacopla** componentes (o clássico da prova)
- **Amazon SNS** — pub/sub, envia notificações para vários assinantes (SMS, e-mail, Lambda)
- **Amazon EventBridge** — barramento de eventos, integra com SaaS
- **AWS Step Functions** — orquestra fluxos de trabalho visualmente
- **Amazon MQ** — ActiveMQ/RabbitMQ gerenciado (para migração de sistemas legados)
- **Amazon API Gateway** — cria e gerencia APIs REST/HTTP/WebSocket

## 3.8 Gerenciamento e governança

- **AWS CloudFormation** — infraestrutura como código
- **AWS Systems Manager** — patch, Session Manager (acesso sem SSH), Parameter Store, Run Command
- **AWS Control Tower** — cria e governa ambiente multi-conta (landing zone)
- **AWS Service Catalog** — catálogo de produtos de TI aprovados
- **AWS License Manager** — controla licenças
- **AWS Health Dashboard** — status dos serviços e eventos que afetam **sua** conta
- **AWS Compute Optimizer** — recomenda rightsizing
- **Tags** — pares chave-valor para organizar, controlar acesso e **alocar custos**
- **AWS Resource Groups**

## 3.9 Ferramentas de desenvolvedor

- **CodeBuild** (compila), **CodeDeploy** (implanta), **CodePipeline** (CI/CD), **CodeArtifact** (pacotes), **CodeGuru** (revisão de código com ML)
- **AWS X-Ray** — rastreamento distribuído, depura microsserviços
- **AWS Amplify** — apps web e mobile full-stack
- **Amazon Q Developer** — assistente de IA para código

## 3.10 Serviços de IA/ML (aparecem no CLF também)

- **Amazon SageMaker** — plataforma completa de ML
- **Amazon Rekognition** — análise de **imagem e vídeo**
- **Amazon Comprehend** — NLP, análise de sentimento, entidades
- **Amazon Textract** — extrai texto e dados de **documentos digitalizados**
- **Amazon Polly** — texto para **fala**
- **Amazon Transcribe** — fala para **texto**
- **Amazon Translate** — tradução
- **Amazon Lex** — chatbots (motor da Alexa)
- **Amazon Kendra** — busca inteligente empresarial
- **Amazon Personalize** — recomendações
- **Amazon Fraud Detector** — detecção de fraude
- **Amazon Bedrock** — modelos de fundação / IA generativa
- **Amazon Q** — assistente de IA generativa empresarial

---

# DOMÍNIO 4 — Cobrança, Preços e Suporte (12%)

## 4.1 Princípios de precificação

Três formas de economizar:
1. **Pague conforme o uso** (pay-as-you-go)
2. **Pague menos ao se comprometer** (Reserved Instances, Savings Plans)
3. **Pague menos usando mais** (descontos por volume, ex: S3)

**Nível gratuito (Free Tier)** — três tipos:
- **Sempre gratuito** (ex: 1 milhão de requisições Lambda/mês, 25 GB DynamoDB)
- **12 meses gratuitos** (ex: 750h/mês de EC2 t2.micro, 5 GB S3)
- **Testes / trials** (período curto a partir da ativação)

**Transferência de dados:** entrada (inbound) geralmente **gratuita**; saída (outbound) para a internet é **cobrada**. Tráfego na mesma AZ é gratuito.

## 4.2 Ferramentas de custo

- **AWS Pricing Calculator** — estima custo **antes** de usar
- **AWS Cost Explorer** — visualiza e analisa gastos passados e previsão futura
- **AWS Budgets** — define orçamento e **alerta** quando ultrapassar (o que mais cai)
- **AWS Cost and Usage Report (CUR)** — relatório mais detalhado que existe
- **AWS Cost Anomaly Detection** — detecta gastos anormais com ML
- **AWS Billing Conductor** — faturamento customizado para revenda
- **Cost Allocation Tags** — tags para rastrear custo por projeto/time

## 4.3 Planos de suporte (decore os tempos de resposta)

**Basic** — gratuito para todos
- Documentação, fóruns, re:Post, Health Dashboard
- Trusted Advisor: só 6 verificações básicas

**Developer** — a partir de US$ 29/mês
- Suporte técnico por **e-mail**, horário comercial, 1 contato
- Orientação geral: < 24h · Sistema comprometido: < 12h

**Business** — a partir de US$ 100/mês
- Suporte 24×7 por e-mail, **chat e telefone**, contatos ilimitados
- **Trusted Advisor completo** (todas as verificações)
- Acesso à API de Suporte
- Sistema de produção comprometido: < 4h · **Sistema de produção fora do ar: < 1h**

**Enterprise On-Ramp** — a partir de US$ 5.500/mês
- Tudo do Business + **pool** de Technical Account Managers
- **Sistema crítico para negócio fora do ar: < 30 min**
- Revisões de arquitetura, Concierge de faturamento

**Enterprise** — a partir de US$ 15.000/mês
- **TAM designado** (dedicado)
- **Sistema crítico para negócio fora do ar: < 15 min**
- Infrastructure Event Management (IEM) incluído, treinamento, Concierge

> Truque: 24h → 12h → 4h/1h → 30min → 15min. E **Trusted Advisor completo começa no Business**.

## 4.4 Recursos e parceiros

- **AWS Marketplace** — software de terceiros, cobrado na sua fatura AWS
- **AWS Partner Network (APN)** — Consulting Partners e Technology Partners
- **AWS Professional Services** — consultoria da própria AWS
- **AWS Managed Services (AMS)** — a AWS opera sua infraestrutura
- **AWS re:Post** — comunidade de perguntas e respostas
- **AWS Knowledge Center**, **AWS Support Center**
- **AWS Training and Certification** / **AWS Skill Builder**

---

# Cola final — pares que a prova adora contrastar

- **CloudTrail** = quem fez · **CloudWatch** = como está · **Config** = como está configurado
- **Security Group** = stateful, instância, só allow · **NACL** = stateless, sub-rede, allow e deny
- **Multi-AZ** = disponibilidade · **Read Replica** = performance
- **Inspector** = vulnerabilidade · **GuardDuty** = ameaça · **Macie** = dado sensível · **Detective** = investigação
- **Shield** = DDoS (camada 3/4) · **WAF** = ataque web (camada 7)
- **EBS** = um AZ, um EC2 · **EFS** = várias AZs, vários EC2 · **S3** = objetos
- **Direct Connect** = linha dedicada · **VPN** = túnel pela internet
- **SQS** = fila, um consumidor · **SNS** = pub/sub, vários assinantes
- **Spot** = barato e interrompível · **Reserved** = compromisso de 1–3 anos
- **KMS** = chave gerenciada · **CloudHSM** = hardware só seu
- **Secrets Manager** = rotação automática (pago) · **Parameter Store** = simples e gratuito
- **Elastic Beanstalk** = a AWS monta o ambiente · **Lightsail** = VPS simples com preço fixo
- **Região** = geografia · **AZ** = data centers · **Edge Location** = cache
