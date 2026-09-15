# Módulo 11 · Redes: VPC, DNS e CloudFront

> **Domínio:** 3 · Tecnologia e Serviços · **Tempo estimado:** 5h · **Pré-requisitos:** Módulo 10
> **Peso na prova:** parte do Domínio 3 (**34%**). A diferença **Security Group × NACL** e a lógica de **sub-rede pública/privada** são clássicos do exame.

## 🎯 Onde você quer chegar

Ao final deste módulo, você vai:

- Entender a **VPC** como a sua rede privada e isolada na AWS.
- Diferenciar **sub-rede pública** de **privada** — e o que realmente as define.
- Saber o papel de **Internet Gateway** e **NAT Gateway**.
- Dominar a diferença **Security Group (stateful) × NACL (stateless)** — a pegadinha nº 1 de redes.
- Reconhecer **Route 53** (DNS) e **CloudFront** (CDN).

<br>

---

<br>

## 🎬 O condomínio fechado

Imagine um condomínio fechado. Ele tem um **muro** em volta (ninguém entra sem passar pela portaria), **quarteirões** internos (alguns de frente para a rua, outros mais reservados no fundo), um **portão principal** que liga à cidade, e **porteiros** que checam quem entra em cada casa. Alguns moradores podem sair para a rua; outros ficam protegidos lá dentro.

Uma rede na AWS é exatamente esse condomínio. O muro é a **VPC**, os quarteirões são as **sub-redes**, o portão é o **Internet Gateway**, e os porteiros são os **Security Groups** e **NACLs**. Vamos morar nesse condomínio.

<br>

---

<br>

## 🧠 Parte 1 — A VPC: sua rede privada na nuvem

A **VPC (Virtual Private Cloud)** é uma **rede virtual isolada** e privada, só sua, dentro da AWS. É o "terreno cercado" onde você coloca seus recursos (instâncias, bancos) com controle total sobre quem acessa o quê. Nada entra nem sai sem que você defina as regras.

> [!NOTE]
> A VPC é o alicerce de rede de praticamente toda arquitetura na AWS. Tudo o que vem a seguir (sub-redes, gateways, firewalls) acontece **dentro** dela.

<br>

## 🏘️ Parte 2 — Sub-redes: públicas e privadas

Dentro da VPC, você divide o espaço em **sub-redes** (subnets) — os "quarteirões". Cada sub-rede fica em **uma AZ**, e pode ser pública ou privada:

| Tipo | Acesso à internet | Uso típico |
|:--|:--|:--|
| 🌐 **Sub-rede pública** | Sim (tem rota para a internet). | Servidores web, balanceadores de carga. |
| 🔒 **Sub-rede privada** | Não diretamente. | Bancos de dados, servidores internos. |

> [!IMPORTANT]
> **O que realmente torna uma sub-rede "pública"?** Não é um botão mágico — é ter uma **rota para o Internet Gateway** na sua tabela de rotas. Sem essa rota, a sub-rede é privada. A boa prática de segurança: coloque o que precisa ser acessado da internet (servidor web) na **pública**, e o que deve ficar escondido (banco de dados) na **privada**.

<br>

## 🚪 Parte 3 — Os "porteiros" da VPC

Aqui estão os componentes que controlam o tráfego — e onde mora a pegadinha mais famosa do módulo.

| Componente | Função |
|:--|:--|
| 🚪 **Internet Gateway (IGW)** | A porta que liga a VPC à internet. |
| 🔀 **NAT Gateway** | Deixa recursos **privados saírem** para a internet (ex.: baixar atualizações) **sem** ficarem expostos a receber conexões de fora. |
| 🛡️ **Security Group** | Firewall **da instância** (nível do recurso). É **stateful**. |
| 🚧 **Network ACL (NACL)** | Firewall **da sub-rede** (nível da rede). É **stateless**. |

> [!TIP]
> **NAT Gateway em uma frase:** é a "saída de serviço" do condomínio — deixa quem está lá dentro (sub-rede privada) sair para buscar coisas na rua (atualizações), mas ninguém de fora entra por ali. Cenário de prova: "instância privada precisa baixar atualizações da internet sem ficar exposta" → **NAT Gateway**.

### 🔥 A pegadinha nº 1 de redes: Security Group × NACL

Esta distinção **sempre** aparece no exame. Guarde bem:

| | 🛡️ **Security Group** | 🚧 **Network ACL (NACL)** |
|:--|:--|:--|
| Atua no nível de... | **Instância** (o recurso) | **Sub-rede** (a rede inteira) |
| Estado | **Stateful** | **Stateless** |
| Regras | Só permite (**allow**) | Permite **e** nega (allow/deny) |
| O que "stateful" significa | Se você **permite a entrada**, a **resposta de saída é liberada automaticamente**. | Você precisa liberar entrada **e** saída **separadamente**. |

> [!IMPORTANT]
> A palavra mágica é **stateful vs. stateless**:
> - **Security Group = stateful** → "lembra" da conexão. Permitiu entrar, a resposta sai sozinha.
> - **NACL = stateless** → não "lembra" de nada. Você configura os dois sentidos na mão.
> Um jeito de memorizar: **S**ecurity Group = **S**tateful (as duas com S). NACL, por eliminação, é stateless.

<br>

## 🧭 Parte 4 — Route 53: o DNS da AWS

Quando você digita `google.com`, algo precisa traduzir esse nome no endereço IP do servidor. Esse "algo" é o **DNS** — e o serviço de DNS da AWS é o **Amazon Route 53**.

> [!TIP]
> **A analogia da agenda de contatos:** você salva "Mãe" no celular e liga sem decorar o número. O DNS faz isso com sites: traduz o nome (fácil de lembrar) no IP (o número real). Route 53 também faz **registro de domínios** e roteamento inteligente. Gatilho de prova: "traduzir nomes de domínio / registrar um domínio" → **Route 53**.

<br>

## ⚡ Parte 5 — CloudFront: a rede de entrega de conteúdo (CDN)

Lembra das **Edge Locations** do Domínio 1? O **Amazon CloudFront** é a **CDN (Content Delivery Network)** que as usa: ele guarda cópias do seu conteúdo (imagens, vídeos, páginas) nas bordas mais próximas dos usuários, entregando com **baixa latência** no mundo todo.

> [!TIP]
> Gatilho de prova: "entregar conteúdo com baixa latência para usuários globais / cachear conteúdo perto do usuário" → **CloudFront**. Ele também soma segurança: integra-se com o **AWS Shield** e o **WAF** (do Domínio 2) para proteger a entrega.

<br>

---

<br>

## 🎯 Dicas de prova (pegadinhas clássicas)

> [!CAUTION]
> - **Security Group = stateful (nível da instância, só allow). NACL = stateless (nível da sub-rede, allow + deny).** A pegadinha nº 1.
> - O que torna a sub-rede **pública** é a **rota para o Internet Gateway** — não um botão.
> - **NAT Gateway** = saída para a internet a partir de sub-redes privadas, sem expor a entrada.
> - **Route 53 = DNS** (traduz nomes em IPs, registra domínios).
> - **CloudFront = CDN** (entrega via Edge Locations, baixa latência global).
> - Banco de dados → sub-rede **privada**. Servidor web → sub-rede **pública**.

<br>

## 🗺️ Mapa rápido pra revisão

| Componente | Em uma frase |
|:--|:--|
| VPC | seu terreno cercado e privado na AWS |
| Sub-rede pública/privada | quarteirão com/sem rota para a internet |
| Internet Gateway | o portão para a internet |
| NAT Gateway | saída de serviço (privado sai, ninguém entra) |
| Security Group | porteiro da instância (stateful) |
| NACL | guarda da sub-rede (stateless) |
| Route 53 | DNS (agenda de contatos dos sites) |
| CloudFront | CDN (conteúdo perto do usuário) |

<br>

---

<br>

## ❓ Quiz nível prova

<br>

**1. Qual afirmação descreve corretamente a diferença entre Security Group e Network ACL?**

- **A)** Ambos são stateless e atuam na sub-rede.
- **B)** O Security Group é stateful e atua na instância; a NACL é stateless e atua na sub-rede.
- **C)** O Security Group atua na sub-rede; a NACL, na instância.
- **D)** Ambos permitem apenas regras de negação (deny).

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B)**
>
> Security Group: **stateful**, nível da **instância**, só allow. NACL: **stateless**, nível da **sub-rede**, allow + deny.
>
> - **A)** ❌ — o Security Group é stateful, não stateless.
> - **C)** ❌ — está invertido.
> - **D)** ❌ — Security Groups só têm regras de allow; NACLs têm allow e deny.

</details>

<br>

**2. Uma instância em uma sub-rede privada precisa baixar atualizações da internet, mas não pode aceitar conexões vindas de fora. O que usar?**

- **A)** Um Internet Gateway ligado diretamente à instância.
- **B)** Um NAT Gateway.
- **C)** Uma Edge Location.
- **D)** Mover a instância para uma sub-rede pública.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) NAT Gateway**
>
> O NAT permite **saída** para a internet a partir da sub-rede privada, **sem** expor a instância a conexões de entrada.
>
> - **A)** ❌ — ligar direto ao IGW tornaria a instância exposta (pública).
> - **C)** ❌ — Edge Location é entrega de conteúdo, não saída de rede.
> - **D)** ❌ — mover para a pública exporia a instância, o oposto do requisito.

</details>

<br>

**3. O que efetivamente torna uma sub-rede "pública" em uma VPC?**

- **A)** Marcar a caixa "pública" nas configurações.
- **B)** Ter uma rota para um Internet Gateway na tabela de rotas.
- **C)** Estar em uma Região dos EUA.
- **D)** Ter mais de uma instância.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B)**
>
> Uma sub-rede é pública porque sua **tabela de rotas** tem uma rota para o **Internet Gateway**. Sem essa rota, é privada.
>
> - **A)** ❌ — não existe um simples "botão público"; é a rota que define.
> - **C) / D)** ❌ — irrelevantes para o conceito.

</details>

<br>

**4. Uma aplicação global sofre com lentidão para usuários distantes do servidor de origem. Qual serviço entrega o conteúdo com baixa latência a partir de pontos próximos aos usuários?**

- **A)** Amazon Route 53
- **B)** Amazon CloudFront
- **C)** AWS NAT Gateway
- **D)** Amazon VPC

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Resposta: B) Amazon CloudFront**
>
> A CDN da AWS entrega conteúdo em cache pelas Edge Locations próximas do usuário, reduzindo a latência.
>
> - **A)** ❌ — Route 53 é DNS (traduz nomes), não entrega de conteúdo.
> - **C)** ❌ — NAT é saída de rede para sub-redes privadas.
> - **D)** ❌ — VPC é a rede em si, não a entrega de conteúdo.

</details>

<br>

**5. Selecione as DUAS afirmações corretas sobre redes na AWS.** *(múltipla resposta — escolha 2)*

- **A)** Um Security Group é stateful: ao permitir a entrada de uma conexão, a resposta de saída é liberada automaticamente.
- **B)** O Route 53 é o serviço de CDN da AWS.
- **C)** Bancos de dados devem ficar, por boa prática, em sub-redes privadas.
- **D)** O Internet Gateway serve para criptografar dados em repouso.

<details>
<summary>💡 Ver resposta e explicação</summary>

> ✅ **Respostas: A) e C)**
>
> **A** define "stateful" corretamente; **C** é a boa prática de manter bancos em sub-rede privada.
>
> - **B)** ❌ — Route 53 é **DNS**; a CDN é o CloudFront.
> - **D)** ❌ — o IGW conecta a VPC à internet; nada tem a ver com criptografia em repouso.

</details>

<br>

---

<br>

## 🧪 Mão na massa (sem console!)

- 🔗 **AWS Skill Builder** → módulos de *Networking*, *VPC*, *Route 53* e *CloudFront*.
- ✍️ **Desafio do condomínio:** desenhe uma VPC com uma sub-rede pública (servidor web) e uma privada (banco), o Internet Gateway e um NAT Gateway. Marque onde entram o Security Group e a NACL. Se souber explicar, dominou redes.

<br>

---

<br>

## 📔 Glossário

| Termo | Significado |
|:--|:--|
| **VPC** | Rede privada e isolada do cliente na AWS. |
| **Sub-rede (subnet)** | Divisão da VPC, dentro de uma AZ (pública ou privada). |
| **Internet Gateway (IGW)** | Porta que conecta a VPC à internet (torna uma sub-rede pública). |
| **NAT Gateway** | Permite saída à internet a recursos privados, sem expô-los. |
| **Security Group** | Firewall da instância; **stateful**; só regras de allow. |
| **Network ACL (NACL)** | Firewall da sub-rede; **stateless**; regras de allow e deny. |
| **Route 53** | Serviço de DNS e registro de domínios da AWS. |
| **CloudFront** | CDN da AWS; entrega conteúdo via Edge Locations. |

<br>

## ✅ Checklist de conclusão

- [ ] Entendi a VPC como rede privada isolada
- [ ] Sei o que torna uma sub-rede pública (rota para o IGW)
- [ ] Sei o papel do Internet Gateway e do NAT Gateway
- [ ] Domino Security Group (stateful) × NACL (stateless)
- [ ] Reconheço Route 53 (DNS) e CloudFront (CDN)
- [ ] Fiz o quiz e entendi por que cada alternativa errada está errada
- [ ] Registrei meu [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml)

<br>

---

<div align="center">

**Precisa de ajuda?** 📊 [Checkpoint](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=checkpoint-de-modulo.yml) · ❓ [Dúvida](https://github.com/melissaalves-stack/awscloudfoundations/issues/new?template=duvida.yml) · 📖 [Guia](../../GUIA-DO-ALUNO.md) · 🚀 [Builder Center](https://bit.ly/4w720IR)

⬅️ [Módulo 10](./10-armazenamento-s3-ebs-efs.md) &nbsp;·&nbsp; 🏠 [Índice do Domínio 3](./README.md) &nbsp;·&nbsp; ➡️ [Módulo 12 · Bancos de dados](./12-bancos-de-dados.md)

</div>
