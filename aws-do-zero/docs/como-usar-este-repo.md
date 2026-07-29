# Como usar este repositório

Este repo não é um resumo para decorar. É um **curso que você escreve enquanto aprende**. Os arquivos vêm com o roteiro e as perguntas; o conteúdo com as suas palavras é o trabalho — e é ele que faz você aprender.

## O ciclo de cada módulo

1. **Leia só as perguntas-guia.** Tente responder de cabeça. Você vai errar. É esse o ponto: o erro cria o gancho onde a informação vai grudar.
2. **Estude o roteiro** com a fonte que preferir (docs da AWS, Skill Builder, vídeo, livro).
3. **Escreva a seção "Minhas anotações" com suas palavras.** Sem copiar e colar. Se travar, você ainda não entendeu.
4. **Faça o laboratório.** Meia hora de mão na massa fixa mais que duas horas de vídeo.
5. **Responda o quiz** e registre a nota no `progresso.md`.
6. **Preencha "O que ainda não entendi".** Essa lista é o seu roteiro de revisão.
7. **Commit.** O histórico do git vira o registro visível do seu progresso.

## Por que a ordem dos módulos não é a ordem da prova

As certificações organizam o conteúdo por domínio de avaliação, o que é ótimo para montar prova e péssimo para aprender. Aqui a ordem é por **dependência conceitual**: você aprende IAM antes de EC2 porque toda EC2 precisa de uma role; aprende redes antes de bancos porque um RDS vive dentro de uma sub-rede.

O mapeamento entre módulos e domínios de prova está em [`mapa-provas.md`](mapa-provas.md).

## Regra dos 3 commits

Nunca feche um módulo com menos de 3 commits:
- um quando você escreve suas anotações
- um quando termina o laboratório
- um quando registra a nota do quiz

Isso te obriga a separar as três atividades, que são cognitivamente diferentes.

## Sobre custos

Quase tudo aqui cabe no Free Tier. As duas armadilhas que geram fatura de verdade:
- **NAT Gateway** — cobra por hora mesmo parado. Destrua sempre.
- **RDS e EC2 esquecidas ligadas** — desligue ao terminar.

Faça o laboratório do módulo 10 (budget com alerta) **antes** dos outros labs, mesmo fora de ordem.
