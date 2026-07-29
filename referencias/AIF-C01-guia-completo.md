# AWS Certified AI Practitioner (AIF-C01) — Conteúdo Completo

**Formato:** 65 questões (50 valem nota, 15 são experimentais) · 90 minutos · nota de corte 700/1000 · US$ 100 · validade 3 anos

**Peso dos domínios:**
- Domínio 1 — Fundamentos de IA e ML: **20%**
- Domínio 2 — Fundamentos de IA Generativa: **24%**
- Domínio 3 — Aplicações de Modelos de Fundação: **28%**
- Domínio 4 — Diretrizes de IA Responsável: **14%**
- Domínio 5 — Segurança, Conformidade e Governança: **14%**

> Esta prova é **cenário-a-cenário**: várias alternativas parecem certas, só uma é a melhor. O eixo da decisão quase sempre é **custo × complexidade × latência**.

---

# DOMÍNIO 1 — Fundamentos de IA e ML (20%)

## 1.1 As bonecas russas

**IA** (qualquer máquina simulando inteligência) ⊃ **ML** (aprende com dados em vez de regras programadas) ⊃ **Deep Learning** (redes neurais com muitas camadas) ⊃ **IA Generativa** (cria conteúdo novo).

## 1.2 Vocabulário obrigatório

- **Modelo** — o resultado do treinamento
- **Algoritmo** — o método usado para treinar
- **Treinamento** — ajustar o modelo com dados
- **Inferência** — usar o modelo treinado para prever
- **Rede neural** — camadas de neurônios com pesos
- **Peso (weight)** e **viés (bias)** — parâmetros aprendidos pelo modelo
- **Hiperparâmetro** — você define ANTES do treino (learning rate, número de épocas, batch size, número de camadas)
- **Parâmetro** — o modelo aprende sozinho
- **Época (epoch)** — uma passada completa pelos dados de treino
- **Feature** — variável de entrada. **Feature engineering** = criar/transformar variáveis

## 1.3 Tipos de aprendizado

**Supervisionado** — dados **rotulados**
- **Classificação** — saída categórica (spam / não spam, aprovado / negado)
- **Regressão** — saída numérica contínua (preço, temperatura)

**Não supervisionado** — dados **sem rótulo**
- **Clusterização** — agrupa por semelhança (segmentação de clientes)
- **Redução de dimensionalidade** (PCA)
- **Detecção de anomalias**

**Por reforço (Reinforcement Learning)** — agente aprende por tentativa e erro com recompensas (robótica, jogos)

**Semi-supervisionado** — pouco dado rotulado + muito não rotulado
**Autossupervisionado** — o próprio dado gera os rótulos (é assim que LLMs são pré-treinados)

## 1.4 Dados

- **Estruturado** — tabelas, linhas e colunas
- **Semiestruturado** — JSON, XML
- **Não estruturado** — texto, imagem, áudio, vídeo
- **Série temporal** — dados com ordem cronológica
- **Rotulado vs não rotulado**

**Divisão dos dados:** treino (~70–80%) · validação (ajusta hiperparâmetros) · teste (avaliação final e imparcial).

## 1.5 Problemas clássicos

- **Overfitting** — decorou o treino, vai mal em dado novo. Sintoma: erro baixo no treino, alto no teste. Soluções: mais dados, regularização, dropout, early stopping, simplificar o modelo
- **Underfitting** — modelo simples demais, vai mal em tudo. Soluções: modelo mais complexo, mais features, treinar mais
- **Trade-off viés-variância** — viés alto = underfitting; variância alta = overfitting
- **Data leakage** — informação do teste vazou pro treino, resultado bom demais para ser verdade

## 1.6 Métricas de avaliação

**Classificação** (a partir da matriz de confusão: VP, VN, FP, FN):
- **Acurácia** — acertos totais. Ruim com classes desbalanceadas
- **Precisão (precision)** — dos que previ positivos, quantos eram? Use quando **falso positivo é caro** (marcar e-mail bom como spam)
- **Recall (sensibilidade)** — dos positivos reais, quantos peguei? Use quando **falso negativo é caro** (detectar câncer, detectar fraude)
- **F1-score** — média harmônica entre precisão e recall
- **AUC-ROC** — capacidade de separar as classes, de 0,5 (aleatório) a 1,0 (perfeito)

**Regressão:** MSE, RMSE, MAE, R²

**Métricas de negócio:** ROI, custo por inferência, tempo até o mercado, satisfação do cliente, taxa de conversão, eficiência operacional.

## 1.7 Ciclo de vida do ML (MLOps)

1. Definir o problema de negócio
2. Coletar dados
3. Preparar / pré-processar dados
4. Engenharia de features
5. Treinar o modelo
6. Avaliar / ajustar
7. Implantar (deploy)
8. **Monitorar** (drift de dados e de modelo)
9. Retreinar

**Tipos de inferência:**
- **Tempo real (real-time endpoint)** — baixa latência, sempre ligado, mais caro
- **Serverless** — carga intermitente, tolera cold start
- **Assíncrona** — payloads grandes, tempo de processamento longo
- **Batch (em lote)** — grande volume de uma vez, sem urgência, mais barato

## 1.8 Quando NÃO usar ML

- O problema resolve com **regras determinísticas** simples
- Você não tem dados suficientes ou de qualidade
- Precisa de explicabilidade total e auditável
- O custo não compensa o ganho

## 1.9 Serviços AWS de IA/ML

**Amazon SageMaker** — plataforma completa. Componentes que caem:
- **SageMaker Studio** — IDE de ML
- **SageMaker Canvas** — ML **sem código**, para analistas de negócio
- **SageMaker Data Wrangler** — preparação de dados visual
- **SageMaker Autopilot** — AutoML, treina e escolhe o melhor modelo
- **SageMaker JumpStart** — modelos pré-treinados e de fundação prontos para usar
- **SageMaker Ground Truth** — **rotulagem** de dados (com humanos)
- **SageMaker Clarify** — detecta **viés** e gera **explicabilidade** (SHAP)
- **SageMaker Model Monitor** — monitora **drift** em produção
- **SageMaker Feature Store** — repositório central de features
- **SageMaker Model Registry** — versionamento e governança de modelos
- **SageMaker Pipelines** — CI/CD de ML
- **SageMaker Model Cards** — documentação do modelo

**Serviços de IA prontos (não precisa treinar nada):**
- **Amazon Rekognition** — imagens e vídeo (rostos, objetos, moderação de conteúdo)
- **Amazon Comprehend** — NLP: sentimento, entidades, idioma, tópicos, **detecção de PII**
- **Amazon Comprehend Medical** — NLP em textos clínicos
- **Amazon Textract** — extrai texto, tabelas e formulários de documentos escaneados
- **Amazon Transcribe** — áudio → texto (com redação automática de PII)
- **Amazon Polly** — texto → áudio
- **Amazon Translate** — tradução automática
- **Amazon Lex** — chatbots conversacionais
- **Amazon Kendra** — busca inteligente em documentos empresariais
- **Amazon Personalize** — recomendações personalizadas
- **Amazon Fraud Detector** — detecção de fraude online
- **Amazon Augmented AI (A2I)** — insere **revisão humana** no fluxo de predições
- **AWS DeepRacer** — aprender reinforcement learning

---

# DOMÍNIO 2 — Fundamentos de IA Generativa (24%)

## 2.1 Conceitos centrais

- **Modelo de Fundação (Foundation Model / FM)** — modelo grande, pré-treinado com dados massivos, adaptável a muitas tarefas
- **LLM** — modelo de fundação especializado em linguagem
- **Token** — pedaço de texto (≈ 4 caracteres ou ¾ de palavra). **Você paga por token**
- **Embedding** — representação numérica (vetor) do significado. Textos parecidos ficam próximos no espaço vetorial
- **Banco de vetores (vector database)** — armazena embeddings e faz busca por similaridade
- **Chunking** — quebrar documentos em pedaços antes de gerar embeddings
- **Janela de contexto (context window)** — quantos tokens o modelo aceita por vez
- **Prompt** — a entrada · **Completion** — a saída
- **Multimodal** — aceita/gera mais de um tipo de mídia (texto + imagem)

## 2.2 Arquiteturas

- **Transformer** — base dos LLMs, usa **mecanismo de atenção (self-attention)** para pesar a importância de cada token. Processa em paralelo
- **Modelos de difusão (diffusion)** — geram imagens partindo de ruído (Stable Diffusion)
- **GANs** — gerador vs discriminador
- **VAEs** — autoencoders variacionais
- **RNN / LSTM** — sequência, arquitetura anterior aos transformers

## 2.3 Parâmetros de inferência (cai muito)

- **Temperature** — aleatoriedade. **Baixa (0–0,3)** = determinístico, factual. **Alta (0,8–1)** = criativo, diverso
- **Top-p (nucleus sampling)** — considera os tokens que somam probabilidade p
- **Top-k** — considera só os k tokens mais prováveis
- **Max tokens / response length** — limita o tamanho da saída (e o custo)
- **Stop sequences** — texto que interrompe a geração

## 2.4 Casos de uso

Sumarização, tradução, chatbot e atendimento, geração de código, geração de imagem, busca semântica, extração de informação, criação de conteúdo de marketing, personalização, geração de dados sintéticos, classificação.

## 2.5 Vantagens e desvantagens

**Vantagens:** adaptabilidade a várias tarefas, resposta rápida, simplicidade (não precisa treinar do zero), acessível via API.

**Desvantagens / riscos:**
- **Alucinação** — inventa informação com confiança
- **Não determinismo** — a mesma pergunta pode gerar respostas diferentes
- **Interpretabilidade baixa** — difícil explicar por que respondeu aquilo
- **Custo** de inferência e de treino
- **Corte de conhecimento** — não sabe de eventos recentes
- Viés herdado dos dados de treino

## 2.6 Como escolher um modelo de fundação

Critérios: **modalidade** (texto, imagem, multimodal), **custo por token**, **latência**, **tamanho da janela de contexto**, suporte a idiomas, capacidade de customização, performance na tarefa, licenciamento e restrições.

Regra prática: modelo menor = mais barato e mais rápido; modelo maior = melhor em raciocínio complexo.

## 2.7 Serviços AWS de IA generativa

**Amazon Bedrock** — o serviço central da prova. Acesso **serverless** a modelos de fundação de vários provedores via uma única API. Você não gerencia infraestrutura.
- Provedores: **Anthropic (Claude)**, **Amazon (Nova, Titan)**, Meta (Llama), Mistral, Cohere, AI21 Labs, Stability AI
- **Knowledge Bases** — RAG gerenciado (ingestão, chunking, embeddings e busca já prontos)
- **Agents** — orquestra várias etapas e chama APIs externas (function calling)
- **Guardrails** — filtros de conteúdo, tópicos negados, redação de PII, checagem contextual contra alucinação
- **Model Evaluation** — avaliação automática ou com humanos
- **Flows** — encadeia etapas visualmente
- **Custom Models** — fine-tuning e pré-treinamento continuado
- **Provisioned Throughput** — capacidade reservada, obrigatório para modelos customizados

**Preços do Bedrock:** sob demanda (por token), **batch** (mais barato), **provisioned throughput** (por model unit e período comprometido).

**SageMaker JumpStart** — modelos de fundação implantados na **sua** infraestrutura, mais controle e customização.

**Amazon Q Business** — assistente de IA generativa que conecta aos dados da empresa.
**Amazon Q Developer** — assistente para código e para a própria AWS.
**Amazon Q in QuickSight / Connect** — IA generativa dentro de BI e call center.
**PartyRock** — playground gratuito, sem conta AWS, para construir apps de IA generativa.

---

# DOMÍNIO 3 — Aplicações de Modelos de Fundação (28%)

## 3.1 Engenharia de prompt

**Técnicas:**
- **Zero-shot** — pede sem exemplo
- **Few-shot** — dá alguns exemplos no prompt
- **Chain-of-thought (CoT)** — pede para o modelo raciocinar passo a passo (melhora problemas de lógica e matemática)
- **Prompt template** — modelo reutilizável com variáveis
- **System prompt** — define papel, tom e regras do modelo
- **Prompt negativo** — diz o que **não** fazer / não incluir

**Boas práticas:** ser específico, dar contexto, definir formato da saída, usar delimitadores, dividir tarefas complexas.

**Riscos de prompt (decore os nomes):**
- **Prompt injection** — usuário insere instrução maliciosa para desviar o modelo
- **Jailbreaking** — burlar as proteções do modelo
- **Prompt leaking** — fazer o modelo revelar o system prompt
- **Poisoning** — contaminar os dados de treino
- **Hijacking** — sequestrar o objetivo do prompt
- Mitigações: **Guardrails**, validação de entrada, delimitadores, menor privilégio nas ferramentas do agente

## 3.2 RAG — Retrieval Augmented Generation

**O que resolve:** dá ao modelo conhecimento **atualizado e privado** sem retreiná-lo. É a resposta certa para "o modelo precisa saber dados internos da empresa" e para reduzir alucinação.

**Como funciona:**
1. Documentos são divididos em chunks
2. Cada chunk vira um embedding
3. Embeddings ficam num banco de vetores
4. A pergunta do usuário também vira embedding
5. Busca por similaridade recupera os trechos relevantes
6. Trechos + pergunta vão no prompt para o modelo responder

**Bancos de vetores na AWS:**
- **Amazon OpenSearch Serverless** (padrão do Bedrock Knowledge Bases)
- **Amazon Aurora PostgreSQL com pgvector**
- **Amazon Neptune Analytics**
- **Amazon DocumentDB**
- **Amazon MemoryDB**
- **Amazon Kendra** (busca gerenciada, alternativa de alto nível)

## 3.3 Customização — a escada de custo (questão clássica)

Do mais barato e simples para o mais caro e complexo:

1. **Engenharia de prompt** — sem custo de treino, resultado imediato
2. **RAG** — adiciona conhecimento externo, custo moderado
3. **Fine-tuning** — ajusta o modelo com dados rotulados seus (muda **comportamento, tom, formato**)
4. **Pré-treinamento continuado (continued pre-training)** — dados não rotulados de um domínio específico (jurídico, médico)
5. **Treinar do zero** — caríssimo, quase nunca é a resposta certa

**Tipos de fine-tuning:**
- **Instruction tuning** — pares pergunta/resposta
- **Domain adaptation** — adapta ao vocabulário de um setor
- **RLHF** — aprendizado por reforço com feedback humano, alinha o modelo a preferências
- **PEFT / LoRA** — ajuste eficiente, treina poucos parâmetros

> Se a questão diz "menor custo e menor esforço", a resposta raramente é fine-tuning. Se diz "precisa de dados internos atualizados", é **RAG**. Se diz "precisa de um estilo/formato específico consistente", é **fine-tuning**.

## 3.4 Agentes

**Bedrock Agents** — o modelo decide quais ações executar, chama APIs (function calling / tool use), consulta bases de conhecimento e encadeia passos até concluir a tarefa. Usado quando a tarefa exige **executar ações**, não só responder.

## 3.5 Avaliação de modelos

**Métricas automáticas:**
- **ROUGE** — qualidade de **sumarização** (compara sobreposição com resumo de referência)
- **BLEU** — qualidade de **tradução**
- **BERTScore** — similaridade semântica
- **Perplexidade** — quão bem o modelo prevê o texto (menor é melhor)

**Avaliação humana** — melhor para qualidade subjetiva, relevância, tom e segurança.
**Amazon Bedrock Model Evaluation** — roda avaliação automática ou com força de trabalho humana.

Avalie também por **métricas de negócio**: satisfação do usuário, taxa de conclusão de tarefa, custo por interação, redução de tempo de atendimento.

---

# DOMÍNIO 4 — Diretrizes de IA Responsável (14%)

## 4.1 As dimensões de IA responsável da AWS

1. **Justiça (fairness)** — tratamento equitativo entre grupos
2. **Explicabilidade** — entender por que o modelo decidiu
3. **Privacidade e segurança** — proteger dados das pessoas
4. **Segurança (safety)** — evitar saídas nocivas
5. **Controlabilidade** — mecanismos para monitorar e direcionar o comportamento
6. **Veracidade e robustez** — saídas corretas mesmo com entradas inesperadas
7. **Governança** — políticas e responsabilidades definidas
8. **Transparência** — deixar claro o que o sistema faz e seus limites

## 4.2 Viés (bias)

- **Viés de amostragem** — dados não representam a população
- **Viés de medição** — a forma de coletar distorce
- **Viés algorítmico** — o modelo amplifica padrões dos dados
- **Viés de confirmação / humano** — na rotulagem
- **Impacto desigual (disparate impact)** — resultado prejudica um grupo protegido

**Mitigação:** dados **balanceados e representativos**, curadoria e diversidade nos dados, auditoria com Clarify, revisão humana, times diversos.

## 4.3 Ferramentas AWS

- **SageMaker Clarify** — mede viés **antes e depois** do treino e explica predições (valores SHAP)
- **SageMaker Model Monitor** — detecta drift de dados, de modelo, de viés e de atribuição de features em produção
- **Guardrails for Amazon Bedrock** — filtros de conteúdo nocivo, tópicos proibidos, filtros de palavras, **redação de PII**, checagem contextual (reduz alucinação)
- **Amazon Augmented AI (A2I)** — human-in-the-loop
- **AWS AI Service Cards** — documentação de casos de uso pretendidos, limitações e escolhas de design responsável dos serviços de IA da AWS
- **SageMaker Model Cards** — documenta o seu modelo

## 4.4 Transparência e explicabilidade

- **Modelos interpretáveis** (árvore de decisão, regressão linear) — transparentes, geralmente menos precisos
- **Modelos "caixa-preta"** (deep learning) — mais precisos, menos explicáveis
- Existe um **trade-off entre performance e explicabilidade** — a prova cobra isso
- Ferramentas de explicabilidade: SHAP, LIME, importância de features

## 4.5 Riscos legais e éticos

- Violação de propriedade intelectual e direitos autorais
- Divulgação acidental de informação confidencial ou PII
- Alucinação levando a dano (jurídico, médico, financeiro)
- Deepfakes e desinformação
- Impacto ambiental (consumo energético do treinamento) — o pilar de **Sustentabilidade** do Well-Architected

---

# DOMÍNIO 5 — Segurança, Conformidade e Governança (14%)

## 5.1 Segurança aplicada a IA

- **IAM** — funções e políticas com **menor privilégio** para acessar Bedrock e SageMaker; use roles, nunca chaves fixas
- **IAM Identity Center** — acesso centralizado
- **SageMaker Role Manager** — cria permissões de ML com base em personas
- **Criptografia** — **AWS KMS** em repouso, TLS em trânsito. Modelos customizados e dados de treino criptografados
- **Isolamento de rede** — **VPC endpoints / PrivateLink** para acessar Bedrock e SageMaker sem passar pela internet; SageMaker em modo VPC
- **Amazon Macie** — encontra PII no S3 antes de virar dado de treino
- **Amazon Comprehend** e **Transcribe** — detectam e redigem PII

> Ponto importante: seus prompts e dados no Bedrock **não** são usados para treinar os modelos base nem compartilhados com os provedores.

## 5.2 Monitoramento, auditoria e conformidade

- **AWS CloudTrail** — registra chamadas de API (quem invocou qual modelo)
- **Amazon CloudWatch** — métricas, logs de invocação, alarmes
- **AWS Config** — conformidade das configurações
- **AWS Audit Manager** — coleta evidências para auditoria
- **AWS Artifact** — relatórios de conformidade
- **Modelo de responsabilidade compartilhada** vale igual para IA: a AWS protege a infraestrutura e o serviço; você protege seus dados, prompts, saídas e permissões

## 5.3 Governança de dados

- **Linhagem de dados (data lineage)** — de onde o dado veio e como foi transformado
- **Catalogação** — AWS Glue Data Catalog, **Amazon DataZone**, **SageMaker Model Registry**
- **Ciclo de vida** — retenção, arquivamento, exclusão
- **Residência de dados** — escolher a região certa por soberania
- **Qualidade dos dados** — completude, consistência, atualidade, precisão
- **Citação de fontes** e documentação da origem dos dados
- **Versionamento** de datasets e modelos

## 5.4 Regulação e padrões

ISO 27001, SOC, HIPAA, PCI DSS, **GDPR**, **LGPD** (Brasil), **EU AI Act**, **NIST AI Risk Management Framework**, leis de responsabilidade algorítmica.

---

# Cola final — os atalhos que mais resolvem questões

- **"Sem gerenciar infraestrutura, vários modelos, uma API"** → **Amazon Bedrock**
- **"Precisa dos dados internos/atualizados da empresa"** → **RAG / Bedrock Knowledge Bases**
- **"Precisa executar ações e chamar APIs"** → **Bedrock Agents**
- **"Bloquear conteúdo nocivo, tópicos e PII"** → **Guardrails**
- **"Menor custo e esforço para melhorar a resposta"** → **engenharia de prompt**
- **"Estilo, tom ou formato consistente e específico"** → **fine-tuning**
- **"Vocabulário de um domínio inteiro, dados não rotulados"** → **pré-treinamento continuado**
- **"Detectar viés e explicar predições"** → **SageMaker Clarify**
- **"Drift em produção"** → **SageMaker Model Monitor**
- **"Rotular dados"** → **SageMaker Ground Truth**
- **"Revisão humana no fluxo"** → **Amazon A2I**
- **"ML sem escrever código"** → **SageMaker Canvas**
- **"AutoML"** → **SageMaker Autopilot**
- **"Modelos prontos na minha infra"** → **SageMaker JumpStart**
- **Sumarização** → ROUGE · **Tradução** → BLEU
- **Falso negativo é caro** → priorize **recall** · **Falso positivo é caro** → priorize **precisão**
- **Temperature baixa** = factual · **alta** = criativo
- **Documentos escaneados** → Textract · **Sentimento e PII em texto** → Comprehend · **Imagem/vídeo** → Rekognition
