# Quiz — Módulo 00: Por que a nuvem existe

[◀ voltar para a aula](README.md)

8 questões. Responda **antes** de abrir o gabarito — clicar direto na resposta
não ensina nada. Se acertar por eliminação, marque como erro.

Prefere terminal? `python quiz/quiz.py 00`
Prefere clicar? Abra `web/index.html` (veja o README).

---


### 1. Uma startup quer lançar um aplicativo sem saber quantos usuários terá no primeiro mês. Qual benefício da nuvem AWS responde diretamente a essa incerteza?


- [ ] **a)** Beneficiar-se de economias de escala massivas
- [ ] **b)** Parar de adivinhar capacidade
- [ ] **c)** Tornar-se global em minutos
- [ ] **d)** Parar de gastar dinheiro mantendo data centers

<details>
<summary>Ver resposta</summary>

**Resposta: b**

O problema descrito é de incerteza de demanda. 'Parar de adivinhar capacidade' é exatamente o benefício que permite provisionar conforme o uso real cresce ou cai. As outras opções são benefícios reais, mas respondem a outros problemas: custo unitário, alcance geográfico e overhead operacional.

<sub>`00-01` · CLF-C02 D1 · facil</sub>

</details>

---

### 2. Qual afirmação descreve corretamente a diferença entre escalabilidade e elasticidade?


- [ ] **a)** São sinônimos; a AWS usa os dois termos de forma intercambiável
- [ ] **b)** Escalabilidade é aumentar recursos; elasticidade é aumentar e reduzir automaticamente conforme a demanda
- [ ] **c)** Escalabilidade só ocorre na horizontal; elasticidade só ocorre na vertical
- [ ] **d)** Elasticidade é uma característica do hardware; escalabilidade é do software

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Um sistema escalável consegue crescer para atender mais demanda, mas isso pode exigir ação manual. Elasticidade acrescenta o automatismo e, principalmente, a redução: é o encolher automático que gera a economia. Escalabilidade pode ser vertical ou horizontal — as duas coisas.

<sub>`00-02` · CLF-C02 D1 · medio</sub>

</details>

---

### 3. Uma empresa usa o Amazon RDS para não precisar cuidar de patches, backups e do sistema operacional do banco, mas continua responsável pelo esquema e pelos dados. Qual modelo de serviço isso representa?


- [ ] **a)** IaaS
- [ ] **b)** PaaS
- [ ] **c)** SaaS
- [ ] **d)** On-premises

<details>
<summary>Ver resposta</summary>

**Resposta: b**

PaaS: o fornecedor gerencia a plataforma (SO, runtime, patches) e o cliente cuida apenas da aplicação e dos dados. Seria IaaS se a empresa instalasse o banco numa EC2 e cuidasse do SO, e SaaS se apenas consumisse um software pronto.

<sub>`00-03` · CLF-C02 D1 · facil</sub>

</details>

---

### 4. Ao migrar da infraestrutura própria para a AWS, qual mudança financeira ocorre?


- [ ] **a)** De despesa operacional (OpEx) para despesa de capital (CapEx)
- [ ] **b)** De despesa de capital (CapEx) para despesa operacional (OpEx)
- [ ] **c)** Ambas viram despesa de capital
- [ ] **d)** Não há mudança na classificação contábil

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Comprar servidores é CapEx: investimento inicial em ativo que deprecia. Na nuvem o gasto vira OpEx, recorrente e proporcional ao consumo. Consequência de engenharia: como o custo de errar cai, experimentar fica barato.

<sub>`00-04` · CLF-C02 D1 · medio</sub>

</details>

---

### 5. Uma empresa roda uma carga de trabalho constante, previsível e de altíssimo volume, com pouquíssima variação ao longo do ano e grande volume de tráfego de saída para a internet. Qual conclusão é mais defensável?


- [ ] **a)** A nuvem sempre será mais barata, pois há economias de escala
- [ ] **b)** É um dos cenários em que infraestrutura própria pode sair mais barata, porque a elasticidade não é aproveitada e a transferência de saída é cobrada
- [ ] **c)** A empresa deve usar exclusivamente instâncias Spot
- [ ] **d)** O modelo híbrido é sempre proibido pela AWS nesse caso

<details>
<summary>Ver resposta</summary>

**Resposta: b**

A economia da nuvem vem principalmente de elasticidade — pagar menos quando a demanda cai. Sem variação, esse benefício não é acionado, e o custo de transferência de dados de saída pode dominar a conta. Saber reconhecer isso é justamente o que as questões de otimização de custos avaliam.

<sub>`00-05` · CLF-C02 D1 · dificil</sub>

</details>

---

### 6. Um banco mantém o core bancário no data center próprio por exigência regulatória, mas roda o portal do cliente na AWS, conectando os dois ambientes. Qual modelo de implantação é esse?


- [ ] **a)** Nuvem pública
- [ ] **b)** Híbrido
- [ ] **c)** Multi-cloud
- [ ] **d)** On-premises

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Híbrido é a combinação de recursos on-premises com recursos na nuvem, integrados. Multi-cloud seria usar dois provedores de nuvem diferentes, o que é outra coisa.

<sub>`00-06` · CLF-C02 D1 · facil</sub>

</details>

---

### 7. Qual das opções é um exemplo de escalabilidade VERTICAL?


- [ ] **a)** Adicionar mais instâncias EC2 atrás de um load balancer
- [ ] **b)** Trocar uma instância t3.medium por uma t3.2xlarge
- [ ] **c)** Replicar a aplicação em outra Região
- [ ] **d)** Ativar o Auto Scaling para adicionar instâncias no pico

<details>
<summary>Ver resposta</summary>

**Resposta: b**

Escalar verticalmente é aumentar a capacidade da mesma máquina (mais CPU e memória). As demais são escala horizontal ou distribuição geográfica. Na nuvem a escala horizontal costuma ser preferida por não ter teto físico e por tolerar falha de instância individual.

<sub>`00-07` · CLF-C02 D1 · medio</sub>

</details>

---

### 8. Qual tecnologia é o alicerce técnico que tornou a computação em nuvem economicamente viável?


- [ ] **a)** Blockchain
- [ ] **b)** Virtualização
- [ ] **c)** Fibra óptica
- [ ] **d)** Bancos de dados relacionais

<details>
<summary>Ver resposta</summary>

**Resposta: b**

A virtualização permite fatiar um servidor físico em várias máquinas virtuais isoladas. É isso que deixa o provedor manter alta taxa de utilização do hardware juntando cargas de milhares de clientes, e revender capacidade por hora ou segundo.

<sub>`00-08` · CLF-C02 D1 · medio</sub>

</details>

---


## Registro

| Tentativa | Data | Acertos | % |
|---|---|---|---|
| 1ª |  |  |  |
| 2ª |  |  |  |
| 3ª |  |  |  |

Meta: **85%+** antes de considerar o módulo concluído. Anote também em [`progresso.md`](../../progresso.md).
