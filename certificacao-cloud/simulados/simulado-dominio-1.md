# 🎯 Simulado — Domínio 1: Conceitos de Nuvem

> **10 questões** no estilo CLF-C02 · Domínio 1 (24% do exame) · Cobre os módulos 00 a 03.
> Responda antes de abrir a explicação. Meta: acertar 7 ou mais (70%).

<br>

**1. Uma startup quer lançar um app sem investir antecipadamente em servidores, pagando apenas pelos recursos que usar. Qual característica da nuvem isso descreve?**

- A) Alta durabilidade
- B) Modelo pay-as-you-go (pague pelo uso)
- C) Responsabilidade compartilhada
- D) Criptografia em repouso

<details><summary>Ver resposta</summary>

✅ **B)** Pagar apenas pelo que usa, sem investimento antecipado, é o **pay-as-you-go** — a troca de CapEx por OpEx.
- A) durabilidade é sobre não perder dados; C) e D) são temas de segurança.
</details>

<br>

**2. Uma loja online trava só nas promoções, quando o acesso multiplica, e fica ociosa no resto do tempo. Qual recurso resolve os dois lados?**

- A) Escalabilidade vertical fixa
- B) Elasticidade
- C) On-premises
- D) Economia de escala

<details><summary>Ver resposta</summary>

✅ **B)** A **elasticidade** ajusta recursos automaticamente para cima e para baixo conforme a demanda.
- A) vertical fixa não acompanha picos; C) on-premises é o modelo antigo; D) economia de escala explica preço, não ajuste de capacidade.
</details>

<br>

**3. Um hospital deve manter dados de pacientes localmente por lei, mas quer usar a nuvem para relatórios pesados. Qual modelo de implantação?**

- A) Nuvem pública pura
- B) On-premises puro
- C) Híbrido
- D) SaaS

<details><summary>Ver resposta</summary>

✅ **C)** O **híbrido** mantém o dado sensível local e usa a nuvem para a parte que escala.
- A) violaria a lei; B) perderia a escala; D) é modelo de serviço, não de implantação.
</details>

<br>

**4. Uma desenvolvedora quer apenas enviar seu código e ter a aplicação no ar, sem gerenciar servidor ou sistema operacional. Qual modelo de serviço?**

- A) IaaS
- B) PaaS
- C) SaaS
- D) On-premises

<details><summary>Ver resposta</summary>

✅ **B) PaaS** — a plataforma pronta recebe só o código (ex.: Elastic Beanstalk).
- A) IaaS exigiria configurar o SO; C) SaaS é software pronto para o usuário final; D) não é nuvem.
</details>

<br>

**5. Um diretor financeiro nota que a empresa deixou de comprar servidores e passou a pagar uma fatura mensal pelo uso. Como se descreve essa mudança?**

- A) OpEx para CapEx
- B) CapEx para OpEx
- C) Aumento de durabilidade
- D) Redução de elasticidade

<details><summary>Ver resposta</summary>

✅ **B) CapEx para OpEx** — de grande compra antecipada para pagamento variável pelo uso.
- A) está invertido; C) e D) não têm relação com o modelo de despesa.
</details>

<br>

**6. Qual conjunto lista apenas serviços de escopo GLOBAL?**

- A) EC2, EBS, sub-redes
- B) S3, DynamoDB, Lambda
- C) IAM, Route 53, CloudFront
- D) EC2, S3, IAM

<details><summary>Ver resposta</summary>

✅ **C)** IAM, Route 53 e CloudFront são globais.
- A) todos zonais; B) todos regionais; D) mistura os três escopos.
</details>

<br>

**7. Qual afirmação sobre Zonas de Disponibilidade é correta?**

- A) Cada Região tem no máximo uma AZ.
- B) Toda Região tem no mínimo três AZs, fisicamente isoladas.
- C) Uma AZ é maior que uma Região.
- D) AZs servem para entregar conteúdo em cache.

<details><summary>Ver resposta</summary>

✅ **B)** Mínimo de 3 AZs por Região, isoladas — base da alta disponibilidade.
- A) e C) estão errados sobre a hierarquia; D) descreve Edge Locations.
</details>

<br>

**8. Qual framework avalia se uma ARQUITETURA segue boas práticas em 6 pilares (segurança, custos, confiabilidade etc.)?**

- A) Cloud Adoption Framework (CAF)
- B) Well-Architected Framework
- C) Shared Responsibility Model
- D) AWS Organizations

<details><summary>Ver resposta</summary>

✅ **B) Well-Architected** — os 6 pilares avaliam a qualidade da arquitetura.
- A) CAF é sobre a prontidão da organização; C) e D) não são frameworks de arquitetura.
</details>

<br>

**9. Uma empresa quer migrar uma aplicação "como está", o mais rápido possível, sem alterar o código. Qual estratégia dos 7 Rs?**

- A) Refactor
- B) Retire
- C) Rehost (lift and shift)
- D) Repurchase

<details><summary>Ver resposta</summary>

✅ **C) Rehost** — mover sem mudanças ("lift and shift").
- A) reescreve; B) desliga o que não se usa; D) troca por um SaaS.
</details>

<br>

**10. Selecione as DUAS afirmações corretas.** *(escolha 2)*

- A) Escalabilidade é a capacidade de crescer; elasticidade é o ajuste automático e bidirecional.
- B) "A nuvem é sempre mais barata que on-premises" é uma verdade absoluta.
- C) A economia de escala reduz o custo por unidade porque muitos clientes compartilham a infraestrutura.
- D) IaaS e SaaS são modelos de implantação.

<details><summary>Ver resposta</summary>

✅ **A) e C)**
- B) falso — depende do caso; o que melhora é o TCO. D) falso — IaaS/SaaS são modelos de **serviço**, não de implantação.
</details>

<br>

---

<div align="center">

🎯 [Voltar aos Simulados](./README.md) · ➡️ [Simulado do Domínio 2](./simulado-dominio-2.md)

</div>
