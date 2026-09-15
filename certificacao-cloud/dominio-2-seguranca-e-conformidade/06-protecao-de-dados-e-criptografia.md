# Módulo 06 · Proteção de dados e criptografia

> **Domínio:** 2 · Segurança e Conformidade · **Tempo estimado:** 3h · **Pré-requisitos:** Módulos 04 e 05
> **Peso na prova:** parte do Domínio 2 (**30%**). Criptografia em repouso vs. em trânsito e o papel do KMS caem com frequência.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Entender **criptografia** sem susto — o que é e por que protege seus dados.
- Diferenciar criptografia **em repouso** (at rest) de **em trânsito** (in transit).
- Saber o papel do **AWS KMS** (o gerente de chaves) e quando usar o **CloudHSM**.
- Reconhecer os serviços que guardam segredos e descobrem dados sensíveis: **Secrets Manager, Parameter Store, Macie, ACM**.

<br>

---

<br>

## 🎬 O bilhete que ninguém consegue ler

Imagine que você escreve um bilhete secreto e o embaralha com uma regra que só você e o destinatário conhecem (trocar cada letra pela seguinte, por exemplo). Se alguém interceptar o bilhete no caminho, vê só um monte de letras sem sentido. Sem a **chave** (a regra), o conteúdo é inútil.

Isso é **criptografia** — e é a última linha de defesa dos seus dados. Mesmo que um invasor consiga o arquivo, se ele estiver criptografado, é lixo ilegível sem a chave. Neste módulo você vai ver **onde** a AWS aplica criptografia e **quem** cuida das chaves.

<br>

---

<br>

## 🧠 Parte 1 — O que é criptografia (sem susto)

**Criptografia é embaralhar dados usando uma chave, de forma que só quem tem a chave consiga desembaralhar e ler.** Sem a chave, o dado é um amontoado ininteligível.

> [!NOTE]
> A ideia é simples: **dado + chave → dado embaralhado** (cifrado). E o contrário: **dado embaralhado + chave → dado legível** (decifrado). Toda a segurança depende de **proteger a chave** — por isso a AWS tem serviços dedicados só para gerenciar chaves, que você verá já já.

<br>

## 🔄 Parte 2 — Os dois momentos: em repouso e em trânsito

Seus dados precisam de proteção em **dois momentos** distintos da vida deles. A prova adora essa distinção.

| Tipo | Quando acontece | Exemplo do dia a dia |
|:--|:--|:--|
| 🛑 **Em repouso (at rest)** | Quando o dado está **guardado, parado** num disco. | Um arquivo salvo num bucket S3 criptografado |
| 🚚 **Em trânsito (in transit)** | Quando o dado está **viajando** pela rede. | Uma página carregando por **HTTPS** (o cadeado do navegador) |

> [!TIP]
> **Âncora de memória:** dado **parado no armário** = em repouso. Dado **dentro do caminhão de entrega** = em trânsito. Uma arquitetura segura protege os **dois** momentos — não adianta trancar o armário e mandar o caminhão aberto.

> [!IMPORTANT]
> Ligue os pontos com o que você já sabe: a criptografia **em trânsito** é o que o **HTTPS/TLS** faz (aquele cadeado). Quem gerencia os certificados que habilitam o HTTPS na AWS é o **ACM** (veremos na Parte 5). A criptografia **em repouso** é uma opção que você liga em serviços como o S3 e o EBS, usando chaves gerenciadas pelo **KMS** (próxima parte).

<br>

## 🔑 Parte 3 — AWS KMS: o gerente de chaves

Se a segurança toda depende de proteger a chave, quem cuida das chaves? O **AWS KMS (Key Management Service)** — um serviço gerenciado que **cria, guarda e controla o uso** das chaves de criptografia.

Com o KMS você:
- Cria chaves de criptografia sem precisar ser especialista.
- Controla **quem** pode usar cada chave (integrado ao IAM).
- Ativa criptografia em repouso em serviços como S3, EBS, RDS com poucos cliques.

> [!TIP]
> **Analogia do cofre do banco:** você não guarda suas joias mais preciosas em casa; guarda no cofre do banco, que controla o acesso e registra quem abriu. O KMS é esse cofre para as suas chaves de criptografia. Se a prova fala em "criar e gerenciar chaves de criptografia de forma gerenciada", a resposta é **KMS**.

<br>

## 🏦 Parte 4 — Quando você precisa de controle total: CloudHSM

Às vezes uma exigência regulatória diz: *"as chaves precisam estar num hardware dedicado, só seu, que nem a AWS pode acessar"*. Para esse caso existe o **AWS CloudHSM** — um módulo de hardware (HSM) dedicado e exclusivo, onde **só você** tem controle das chaves.

> [!NOTE]
> A diferença em uma frase: o **KMS** é o cofre **compartilhado e gerenciado** do banco (ótimo para 99% dos casos). O **CloudHSM** é um **cofre exclusivo, só seu**, para exigências rígidas de conformidade que pedem hardware dedicado e controle único. Se a questão enfatiza "hardware dedicado" ou "controle exclusivo do cliente sobre as chaves", pense em **CloudHSM**.

<br>

## 🛡️ Parte 5 — Outros guardiões de dados

Além das chaves, a AWS tem serviços especializados para proteger **segredos** e **descobrir** dados sensíveis. A prova gosta de dar a descrição e pedir o nome.

| Serviço | Para que serve | Frase-gatilho |
|:--|:--|:--|
| 🗝️ **AWS Secrets Manager** | Guardar e **girar automaticamente** segredos (senhas de banco, chaves de API), sem deixá-los no código. | "rotacionar senhas de banco automaticamente" |
| 📇 **Systems Manager Parameter Store** | Guardar configurações e segredos simples — opção mais econômica para casos básicos. | "armazenar parâmetros de configuração" |
| 🕵️ **Amazon Macie** | Usa **machine learning** para **descobrir dados sensíveis** (CPFs, cartões) guardados no **S3**. | "identificar dados sensíveis/PII no S3" |
| 📜 **AWS Certificate Manager (ACM)** | Provisiona e gerencia **certificados SSL/TLS** para habilitar **HTTPS** (criptografia em trânsito). | "gerenciar certificados / habilitar HTTPS" |

> [!CAUTION]
> **Pegadinha frequente — Secrets Manager vs. Parameter Store:** os dois guardam segredos. O diferencial do **Secrets Manager** é a **rotação automática** de segredos (ele troca a senha sozinho de tempos em tempos). Se a questão enfatiza "rotacionar automaticamente", é **Secrets Manager**. Se é só "guardar um parâmetro simples e barato", pode ser o **Parameter Store**.

> [!CAUTION]
> **Não confunda Macie com GuardDuty** (que você verá no próximo módulo): **Macie descobre dados sensíveis no S3**; **GuardDuty detecta ameaças/atividades suspeitas**. Um olha *os dados*, o outro olha *o comportamento*.

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **Em repouso = parado no disco; em trânsito = viajando na rede (HTTPS/TLS).** Proteja os dois.
> - **KMS** = criar e gerenciar chaves (o padrão). **CloudHSM** = hardware dedicado e exclusivo (exigência rígida).
> - **Secrets Manager** = guardar segredos **com rotação automática**. Parameter Store = guardar parâmetros simples/baratos.
> - **Macie** = descobrir dados sensíveis (PII) no **S3**. Não confunda com GuardDuty (ameaças).
> - **ACM** = certificados SSL/TLS para HTTPS (criptografia em trânsito).
> - Criptografia é a "última linha": mesmo vazando, o dado cifrado é inútil sem a chave.

<br>

## 🗺️ Mapa rápido pra revisão

| Serviço/conceito | Em uma frase |
|:--|:--|
| Em repouso × em trânsito | armário trancado × caminhão blindado |
| KMS | cofre gerenciado das chaves (padrão) |
| CloudHSM | cofre exclusivo em hardware dedicado |
| Secrets Manager | guarda e **gira** segredos |
| Parameter Store | guarda parâmetros simples (barato) |
| Macie | acha dados sensíveis no S3 (ML) |
| ACM | certificados HTTPS (TLS) |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Uma empresa quer garantir que os arquivos guardados em um bucket S3 fiquem ilegíveis caso alguém obtenha acesso indevido ao armazenamento. Que tipo de proteção ela deve aplicar?**

- **A)** Criptografia em trânsito
- **B)** Criptografia em repouso
- **C)** Um Security Group mais restritivo
- **D)** Uma Edge Location

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Criptografia em repouso**
>
> Os dados estão **parados** no S3 (armazenados). Criptografá-los em repouso garante que fiquem ilegíveis sem a chave, mesmo se acessados indevidamente.
>
> - **A)** ❌ — em trânsito protege o dado *viajando* na rede, não parado no disco.
> - **C)** ❌ — ajuda no controle de acesso, mas não torna o dado ilegível.
> - **D)** ❌ — Edge Location é entrega de conteúdo, nada a ver.

</details>

<br>

**2. Qual serviço da AWS é o indicado para criar e gerenciar chaves de criptografia de forma gerenciada, integrando com o controle de acesso do IAM?**

- **A)** Amazon Macie
- **B)** AWS KMS
- **C)** AWS WAF
- **D)** Amazon Cognito

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) AWS KMS**
>
> O **Key Management Service** cria, guarda e controla o uso das chaves de criptografia, integrado ao IAM.
>
> - **A)** ❌ — Macie descobre dados sensíveis, não gerencia chaves.
> - **C)** ❌ — WAF é firewall de aplicações web.
> - **D)** ❌ — Cognito gerencia identidades de usuários finais.

</details>

<br>

**3. Uma exigência regulatória determina que as chaves de criptografia fiquem em um módulo de hardware dedicado e sob controle exclusivo do cliente. Qual serviço atende a isso?**

- **A)** AWS KMS (chave gerenciada padrão)
- **B)** AWS CloudHSM
- **C)** AWS Secrets Manager
- **D)** AWS Certificate Manager

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) AWS CloudHSM**
>
> Quando a exigência é **hardware dedicado** e **controle exclusivo**, o CloudHSM é a resposta.
>
> - **A)** ❌ — o KMS é gerenciado e compartilhado; atende a maioria dos casos, mas não a exigência de hardware exclusivo.
> - **C)** ❌ — guarda segredos, não é HSM.
> - **D)** ❌ — gerencia certificados TLS.

</details>

<br>

**4. Uma equipe quer armazenar a senha de um banco de dados de forma segura e fazer com que ela seja trocada (rotacionada) automaticamente em intervalos regulares. Qual serviço usar?**

- **A)** AWS Secrets Manager
- **B)** Amazon S3
- **C)** AWS Artifact
- **D)** Amazon Macie

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: A) AWS Secrets Manager**
>
> O diferencial do Secrets Manager é justamente a **rotação automática** de segredos como senhas de banco.
>
> - **B)** ❌ — o S3 armazena objetos, não é feito para gerenciar/rotacionar segredos.
> - **C)** ❌ — Artifact é portal de documentos de conformidade.
> - **D)** ❌ — Macie descobre dados sensíveis, não gerencia senhas.

</details>

<br>

**5. Selecione as DUAS afirmações corretas sobre criptografia na AWS.** *(múltipla resposta — escolha 2)*

- **A)** Criptografia em trânsito protege os dados enquanto eles viajam pela rede (ex.: via HTTPS/TLS).
- **B)** Uma vez criptografado em repouso, o dado nunca precisa de proteção em trânsito.
- **C)** O AWS KMS é usado para criar e gerenciar chaves de criptografia.
- **D)** Criptografia elimina a necessidade de controle de acesso (IAM).

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** define corretamente a criptografia em trânsito; **C** descreve o papel do KMS.
>
> - **B)** ❌ — os dois momentos são independentes: você protege em repouso E em trânsito.
> - **D)** ❌ — criptografia e IAM são camadas complementares; uma não substitui a outra (defesa em profundidade).

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos sobre *criptografia* e *proteção de dados* no Cloud Practitioner Essentials.
- 🔗 Repare no **cadeado do navegador** ao abrir qualquer site seguro: aquilo é criptografia em trânsito (TLS) acontecendo agora.
- ✍️ **Desafio:** para cada serviço (KMS, CloudHSM, Secrets Manager, Macie, ACM), escreva a situação em uma frase que faria você escolhê-lo. Se souber as 5, dominou o módulo.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **Criptografia** | Embaralhar dados com uma chave; só quem tem a chave consegue ler. |
| **Em repouso (at rest)** | Proteção de dados armazenados/parados. |
| **Em trânsito (in transit)** | Proteção de dados em movimento pela rede (HTTPS/TLS). |
| **AWS KMS** | Serviço gerenciado de criação e gestão de chaves de criptografia. |
| **AWS CloudHSM** | Módulo de hardware dedicado, com controle exclusivo do cliente sobre as chaves. |
| **Secrets Manager** | Guarda e rotaciona segredos (senhas, chaves de API) automaticamente. |
| **Parameter Store** | Guarda parâmetros/segredos simples, opção econômica. |
| **Amazon Macie** | Descobre dados sensíveis (PII) no S3 usando machine learning. |
| **ACM** | Gerencia certificados SSL/TLS para habilitar HTTPS. |

<br>

## ✅ Checklist de conclusão

- [ ] Entendi o que é criptografia e por que ela é a "última linha"
- [ ] Diferencio criptografia em repouso e em trânsito
- [ ] Sei o papel do KMS e quando usar o CloudHSM
- [ ] Distingo Secrets Manager, Parameter Store, Macie e ACM
- [ ] Não confundo Macie (dados) com GuardDuty (ameaças)
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 05](./05-identidade-e-acesso-iam.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 2](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 07 · Conformidade e serviços de segurança](./07-conformidade-e-servicos-de-seguranca.md)

</div>
