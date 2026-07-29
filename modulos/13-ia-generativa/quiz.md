# Quiz — Módulo 13: IA generativa e modelos de fundação

[◀ voltar para a aula](README.md)

8 questões. Responda **antes** de abrir o gabarito — clicar direto na resposta
não ensina nada. Se acertar por eliminação, marque como erro.

Prefere terminal? `python quiz/quiz.py 13`
Prefere clicar? Abra `web/index.html` (veja o README).

---


### 1. Uma equipe quer acessar modelos de fundação de vários provedores por uma única API, sem provisionar nem gerenciar infraestrutura. Qual serviço atende?


- [ ] **a)** Amazon SageMaker Studio
- [ ] **b)** Amazon Bedrock
- [ ] **c)** Amazon EC2 com GPU
- [ ] **d)** Amazon Comprehend

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Bedrock é o serviço serverless de acesso a modelos de fundação de múltiplos provedores por uma API unificada. SageMaker exige mais gerenciamento e é voltado ao ciclo completo de ML; Comprehend é um serviço de NLP pronto, não de modelos de fundação.

<sub>`13-01` · AIF-C01 D2 · facil</sub>

</details>

---

### 2. Uma aplicação precisa gerar respostas factuais e o mais consistentes possível. Qual ajuste de parâmetro de inferência é o mais adequado?


- [ ] **a)** Aumentar a temperature para próximo de 1
- [ ] **b)** Reduzir a temperature para próximo de 0
- [ ] **c)** Aumentar o max tokens
- [ ] **d)** Remover as stop sequences

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Temperature controla a aleatoriedade da amostragem de tokens. Valores baixos tornam a saída mais determinística e conservadora, adequada a tarefas factuais. Valores altos aumentam diversidade e criatividade. Max tokens só limita tamanho e stop sequences apenas interrompem a geração.

<sub>`13-02` · AIF-C01 D2 · medio</sub>

</details>

---

### 3. O que é um embedding no contexto de IA generativa?


- [ ] **a)** Uma cópia comprimida do modelo para rodar em dispositivos móveis
- [ ] **b)** Uma representação numérica vetorial que captura o significado semântico de um conteúdo
- [ ] **c)** O prompt do sistema que define o comportamento do modelo
- [ ] **d)** O limite de tokens que o modelo aceita por requisição

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Embeddings transformam texto, imagem ou áudio em vetores num espaço onde a proximidade geométrica corresponde à proximidade de significado. É esse mecanismo que permite busca semântica e é a base do RAG.

<sub>`13-03` · AIF-C01 D2 · medio</sub>

</details>

---

### 4. Qual é a principal desvantagem dos modelos de fundação que exige controles adicionais em aplicações críticas?


- [ ] **a)** Eles só funcionam em inglês
- [ ] **b)** Podem gerar informações incorretas com aparência de confiança (alucinação)
- [ ] **c)** Não conseguem processar textos com mais de 100 palavras
- [ ] **d)** Exigem obrigatoriamente fine-tuning antes do primeiro uso

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Alucinação é a geração de conteúdo plausível porém incorreto. Mitigações comuns: RAG para ancorar em fontes, Guardrails com checagem contextual, revisão humana e citação de fontes.

<sub>`13-04` · AIF-C01 D2 · facil</sub>

</details>

---

### 5. Uma empresa avalia dois modelos de fundação para um chatbot de atendimento com alto volume e resposta em tempo real. Quais critérios são mais relevantes na escolha? (selecione dois)

_(múltipla escolha)_


- [ ] **a)** Custo por token
- [ ] **b)** Latência de inferência
- [ ] **c)** A quantidade de camadas da rede neural
- [ ] **d)** A linguagem de programação usada no treinamento do modelo

<details>
<summary>Ver resposta</summary>

**Resposta: a, b**

Em alto volume e tempo real, custo por token e latência dominam a decisão, junto com qualidade na tarefa, janela de contexto e suporte a idioma. Detalhes internos de arquitetura e a stack de treinamento não são critérios práticos de seleção.

<sub>`13-05` · AIF-C01 D2 · dificil</sub>

</details>

---

### 6. O que é a janela de contexto de um modelo de linguagem?


- [ ] **a)** O período em que o modelo permanece carregado em memória
- [ ] **b)** A quantidade máxima de tokens que o modelo processa em uma única requisição, somando entrada e saída
- [ ] **c)** O intervalo de datas dos dados usados no treinamento
- [ ] **d)** O número de usuários simultâneos suportados pelo endpoint

<details>
<summary>Ver resposta</summary>

**Resposta: b**

A janela de contexto é o orçamento de tokens da requisição. Ela limita quanto documento você consegue enviar de uma vez e é um dos critérios de escolha de modelo — além de ser o motivo pelo qual o RAG existe: em vez de mandar tudo, você recupera só o trecho relevante.

<sub>`13-06` · AIF-C01 D2 · medio</sub>

</details>

---

### 7. Qual arquitetura é a base dos grandes modelos de linguagem atuais?


- [ ] **a)** Redes convolucionais (CNN)
- [ ] **b)** Transformers, com mecanismo de atenção
- [ ] **c)** Árvores de decisão com boosting
- [ ] **d)** Máquinas de vetores de suporte (SVM)

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Transformers usam autoatenção para pesar a relevância de cada token em relação aos demais, e processam a sequência em paralelo — o que viabilizou o treinamento em escala. CNNs são associadas a visão computacional; as outras duas são técnicas de ML clássico.

<sub>`13-07` · AIF-C01 D2 · medio</sub>

</details>

---

### 8. Um estudante quer experimentar aplicações de IA generativa sem criar uma conta AWS e sem custo. Qual opção é apropriada?


- [ ] **a)** PartyRock
- [ ] **b)** Amazon SageMaker Studio
- [ ] **c)** AWS Outposts
- [ ] **d)** Amazon EMR

<details>
<summary>Ver resposta</summary>

**Resposta: a**

PartyRock é o playground gratuito baseado em Bedrock, sem necessidade de conta AWS, voltado a experimentação e aprendizado. As demais opções exigem conta, configuração e geram custo.

<sub>`13-08` · AIF-C01 D2 · facil</sub>

</details>

---


## Registro

| Tentativa | Data | Acertos | % |
|---|---|---|---|
| 1ª |  |  |  |
| 2ª |  |  |  |
| 3ª |  |  |  |

Meta: **85%+** antes de considerar o módulo concluído. Anote também em [`progresso.md`](../../progresso.md).
