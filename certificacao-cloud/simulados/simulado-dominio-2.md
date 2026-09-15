# 🎯 Simulado — Domínio 2: Segurança e Conformidade

> **10 questões** no estilo CLF-C02 · Domínio 2 (30% do exame) · Cobre os módulos 04 a 07.
> Meta: acertar 7 ou mais (70%).

<br>

**1. Um bucket S3 com dados de clientes ficou público por engano. De quem é a responsabilidade?**

- A) Da AWS, por não impedir.
- B) Do cliente, pois configurar o acesso aos próprios dados é dele.
- C) De ninguém.
- D) Compartilhada meio a meio.

<details><summary>Ver resposta</summary>

✅ **B)** Configuração e controle de acesso aos dados é segurança "na" nuvem — sempre do cliente.
- A) a AWS oferece as ferramentas; usá-las é com você. C) evitável. D) nesse caso é do cliente.
</details>

<br>

**2. Qual tarefa é responsabilidade da AWS no Modelo de Responsabilidade Compartilhada?**

- A) Configurar políticas de IAM.
- B) Segurança física dos data centers.
- C) Criptografar os dados do cliente.
- D) Aplicar patches no SO de uma instância EC2.

<details><summary>Ver resposta</summary>

✅ **B)** Segurança física é infraestrutura — "da" nuvem, sempre da AWS.
- A), C), D) são segurança "na" nuvem (cliente).
</details>

<br>

**3. Uma instância EC2 precisa ler um bucket S3 com segurança. Qual a melhor prática?**

- A) Colar chaves do root no código.
- B) Deixar o bucket público.
- C) Atribuir uma IAM Role à instância.
- D) Usar a senha do usuário root.

<details><summary>Ver resposta</summary>

✅ **C)** Roles dão credenciais temporárias a serviços, sem chaves fixas.
- A) e D) expõem credenciais poderosas; B) é falha grave.
</details>

<br>

**4. Uma política permite s3:* e outra nega s3:DeleteObject. O usuário consegue apagar objetos?**

- A) Sim, o Allow amplo vale.
- B) Não, o Deny explícito sempre vence.
- C) Depende da ordem das políticas.
- D) Só se for admin.

<details><summary>Ver resposta</summary>

✅ **B)** **Deny explícito sempre vence** qualquer Allow.
- A), C), D) ignoram essa regra de ouro do IAM.
</details>

<br>

**5. Qual é a melhor prática para o usuário root?**

- A) Usar no dia a dia.
- B) Compartilhar com a equipe.
- C) Ativar MFA, guardar as credenciais e não usá-lo no cotidiano.
- D) Apagá-lo.

<details><summary>Ver resposta</summary>

✅ **C)** MFA + guardar + usar só em tarefas exclusivas.
- A) e B) são risco altíssimo; D) o root não pode ser apagado.
</details>

<br>

**6. Que tipo de criptografia protege os dados enquanto eles trafegam pela rede (ex.: HTTPS)?**

- A) Em repouso
- B) Em trânsito
- C) Nenhuma
- D) Criptografia física

<details><summary>Ver resposta</summary>

✅ **B) Em trânsito** — dado "viajando" pela rede (TLS/HTTPS).
- A) protege o dado parado no disco; C) e D) não existem nesse contexto.
</details>

<br>

**7. Uma equipe quer guardar a senha de um banco e trocá-la (rotacionar) automaticamente. Qual serviço?**

- A) Amazon S3
- B) AWS Secrets Manager
- C) Amazon Macie
- D) AWS Artifact

<details><summary>Ver resposta</summary>

✅ **B) Secrets Manager** — guarda e faz rotação automática de segredos.
- A) armazena objetos; C) descobre dados sensíveis; D) fornece documentos de conformidade.
</details>

<br>

**8. Um auditor precisa saber quem chamou qual ação (API) na conta e quando. Qual serviço?**

- A) Amazon CloudWatch
- B) AWS CloudTrail
- C) AWS Shield
- D) Amazon Inspector

<details><summary>Ver resposta</summary>

✅ **B) CloudTrail** — a trilha de auditoria (quem fez o quê, quando).
- A) mede desempenho/saúde; C) anti-DDoS; D) varre vulnerabilidades.
</details>

<br>

**9. Uma aplicação web sofre um ataque de sobrecarga por volume massivo de tráfego (DDoS). Qual serviço mitiga?**

- A) AWS WAF
- B) AWS Shield
- C) Amazon Macie
- D) AWS Artifact

<details><summary>Ver resposta</summary>

✅ **B) Shield** — proteção contra DDoS.
- A) WAF filtra requisições maliciosas (ex.: SQL injection), não o volume; C) e D) não são anti-DDoS.
</details>

<br>

**10. Selecione as DUAS afirmações corretas.** *(escolha 2)*

- A) Dados, controle de acesso e classificação são sempre responsabilidade do cliente.
- B) O CloudWatch serve para baixar certificados de conformidade.
- C) O Amazon Macie descobre dados sensíveis (PII) no S3.
- D) O GuardDuty protege contra ataques DDoS.

<details><summary>Ver resposta</summary>

✅ **A) e C)**
- B) certificados vêm do Artifact; D) DDoS é com o Shield (GuardDuty detecta ameaças).
</details>

<br>

---

<div align="center">

⬅️ [Simulado do Domínio 1](./simulado-dominio-1.md) · 🎯 [Simulados](./README.md) · ➡️ [Simulado do Domínio 3](./simulado-dominio-3.md)

</div>
