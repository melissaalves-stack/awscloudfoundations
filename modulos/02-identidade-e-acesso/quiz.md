# Quiz — Módulo 02: Identidade e acesso (IAM)

[◀ voltar para a aula](README.md)

10 questões. Responda **antes** de abrir o gabarito — clicar direto na resposta
não ensina nada. Se acertar por eliminação, marque como erro.

Prefere terminal? `python quiz/quiz.py 02`
Prefere clicar? Abra `web/index.html` (veja o README).

---


### 1. Uma aplicação rodando em uma instância EC2 precisa ler objetos de um bucket S3. Qual é a abordagem recomendada pela AWS?


- [ ] **a)** Criar um usuário IAM e salvar a chave de acesso em um arquivo de configuração na instância
- [ ] **b)** Anexar uma função (role) IAM à instância EC2
- [ ] **c)** Usar as credenciais da conta root da aplicação
- [ ] **d)** Tornar o bucket público para que a instância consiga ler

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Funções fornecem credenciais temporárias e rotacionadas automaticamente, sem nada gravado em disco. Chaves de acesso em instâncias são permanentes, vazam com facilidade e exigem rotação manual. Sempre que um serviço da AWS precisa de permissão, a resposta é função.

<sub>`02-01` · CLF-C02 D2 · facil</sub>

</details>

---

### 2. Um usuário tem duas políticas anexadas: uma permite s3:* e outra nega explicitamente s3:DeleteObject. Qual é o resultado?


- [ ] **a)** O usuário pode executar todas as ações do S3, incluindo apagar objetos, pois o Allow é mais específico
- [ ] **b)** O usuário pode executar todas as ações do S3, exceto apagar objetos
- [ ] **c)** O usuário não pode executar nenhuma ação do S3
- [ ] **d)** O comportamento depende da ordem em que as políticas foram anexadas

<details>
<summary>Ver resposta</summary>

**Resposta: b**

A lógica de avaliação do IAM é: deny explícito vence sempre; sem deny explícito, um allow explícito libera; sem nada, vale o deny implícito. A ordem de anexação é irrelevante.

<sub>`02-02` · CLF-C02 D2 · medio</sub>

</details>

---

### 3. Qual destas tarefas SOMENTE a conta root pode executar?


- [ ] **a)** Criar uma instância EC2 em qualquer região
- [ ] **b)** Alterar o plano de suporte da AWS
- [ ] **c)** Anexar uma política gerenciada a um grupo
- [ ] **d)** Criar um bucket S3 com criptografia habilitada

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Alterar o plano de suporte está na lista curta de ações exclusivas do root, junto com fechar a conta, alterar e-mail/nome da conta, restaurar permissões de um usuário IAM trancado para fora e registrar-se como vendedor no Marketplace. As demais podem ser delegadas via IAM.

<sub>`02-03` · CLF-C02 D2 · medio</sub>

</details>

---

### 4. Uma SCP anexada a uma OU nega a ação ec2:RunInstances. Um usuário dentro de uma conta dessa OU tem a política AdministratorAccess. O que acontece quando ele tenta criar uma instância EC2?


- [ ] **a)** A criação é permitida, porque AdministratorAccess sobrepõe SCPs
- [ ] **b)** A criação é negada, porque a SCP define o teto de permissões da conta
- [ ] **c)** A criação é permitida apenas na região onde a SCP não se aplica
- [ ] **d)** A SCP não tem efeito sobre usuários, apenas sobre funções

<details>
<summary>Ver resposta</summary>

**Resposta: b**

SCP não concede permissão: ela limita o máximo que as identidades da conta podem ter. A permissão efetiva é a interseção entre política IAM e SCP. Exceção importante: SCPs não se aplicam à conta de gerenciamento da organização.

<sub>`02-04` · CLF-C02 D2 · dificil</sub>

</details>

---

### 5. Uma empresa quer que os usuários finais do seu aplicativo mobile façam login com Google ou Facebook. Qual serviço é o adequado?


- [ ] **a)** AWS IAM
- [ ] **b)** Amazon Cognito
- [ ] **c)** AWS IAM Identity Center
- [ ] **d)** AWS Directory Service

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Cognito é para identidade de usuários finais de aplicações — os clientes do seu app. IAM e IAM Identity Center cuidam de quem administra recursos da AWS (funcionários). Directory Service é Active Directory gerenciado. Mnemônico: IAM = funcionários, Cognito = clientes.

<sub>`02-05` · AIF-C01 D5 · medio</sub>

</details>

---

### 6. Quais são boas práticas de segurança para a conta root? (selecione duas)

_(múltipla escolha)_


- [ ] **a)** Ativar MFA na conta root
- [ ] **b)** Criar chaves de acesso do root para automação de scripts
- [ ] **c)** Usar o root no dia a dia para evitar problemas de permissão
- [ ] **d)** Criar um usuário IAM administrador e usar ele em vez do root

<details>
<summary>Ver resposta</summary>

**Resposta: a, d**

MFA no root e uso de um usuário administrador no lugar dele são as duas recomendações centrais. Criar chaves de acesso do root é o oposto de boa prática: se elas já existirem, devem ser apagadas. E o root não deve ser usado no cotidiano justamente porque suas permissões não podem ser limitadas.

<sub>`02-06` · CLF-C02 D2 · facil</sub>

</details>

---

### 7. Um analista escreveu uma política com Resource apenas em 'arn:aws:s3:::relatorios'. Ele consegue listar o bucket, mas recebe AccessDenied ao baixar um arquivo. Qual a causa?


- [ ] **a)** Falta habilitar o versionamento no bucket
- [ ] **b)** Ações sobre objetos exigem o ARN com /* no final, que não foi incluído
- [ ] **c)** A política precisa ser inline em vez de gerenciada
- [ ] **d)** É necessário tornar o bucket público

<details>
<summary>Ver resposta</summary>

**Resposta: b**

O bucket e os objetos dentro dele são recursos distintos. Ações de bucket (ListBucket) usam arn:aws:s3:::nome, e ações de objeto (GetObject) usam arn:aws:s3:::nome/*. Políticas completas normalmente listam os dois ARNs. É o erro mais comum de quem escreve a primeira política.

<sub>`02-07` · CLF-C02 D2 · dificil</sub>

</details>

---

### 8. Qual afirmação sobre grupos do IAM é correta?


- [ ] **a)** Um grupo pode conter outros grupos, formando hierarquia
- [ ] **b)** Um grupo é uma identidade e pode assumir funções
- [ ] **c)** Um grupo é uma coleção de usuários usada para simplificar a gestão de permissões
- [ ] **d)** Todo usuário IAM precisa pertencer a pelo menos um grupo

<details>
<summary>Ver resposta</summary>

**Resposta: c**

Grupos apenas agrupam usuários para facilitar a atribuição de políticas. Não podem ser aninhados, não são identidades (não assumem funções nem executam ações) e não são obrigatórios.

<sub>`02-08` · CLF-C02 D2 · medio</sub>

</details>

---

### 9. Qual característica descreve corretamente o serviço IAM?


- [ ] **a)** É um serviço regional e cobrado por usuário criado
- [ ] **b)** É um serviço global e sem custo adicional
- [ ] **c)** É um serviço global cobrado por número de políticas
- [ ] **d)** É um serviço regional e gratuito apenas no primeiro ano

<details>
<summary>Ver resposta</summary>

**Resposta: b**

IAM é global (uma identidade vale em todas as regiões) e gratuito. A gratuidade é intencional: a AWS não quer que custo seja desculpa para as pessoas usarem a conta root ou compartilharem credenciais.

<sub>`02-09` · CLF-C02 D2 · facil</sub>

</details>

---

### 10. Uma equipe quer conceder permissões seguindo o princípio do menor privilégio, mas não sabe exatamente quais ações a aplicação usa. Qual ferramenta ajuda a gerar uma política baseada no uso real?


- [ ] **a)** AWS Trusted Advisor
- [ ] **b)** IAM Access Analyzer
- [ ] **c)** AWS Config
- [ ] **d)** Amazon Inspector

<details>
<summary>Ver resposta</summary>

**Resposta: b**

O IAM Access Analyzer consegue analisar a atividade registrada no CloudTrail e gerar uma política com base nas ações efetivamente utilizadas. Trusted Advisor dá recomendações amplas, Config avalia conformidade de configuração e Inspector varre vulnerabilidades.

<sub>`02-10` · CLF-C02 D2 · medio</sub>

</details>

---


## Registro

| Tentativa | Data | Acertos | % |
|---|---|---|---|
| 1ª |  |  |  |
| 2ª |  |  |  |
| 3ª |  |  |  |

Meta: **85%+** antes de considerar o módulo concluído. Anote também em [`progresso.md`](../../progresso.md).
