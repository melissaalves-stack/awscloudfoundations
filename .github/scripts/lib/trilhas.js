// Catálogo das trilhas: é a fonte única de totais, medalhas e títulos de módulo.
// Ao criar um módulo novo, acrescente-o aqui — o progresso, as medalhas e os
// perfis públicos passam a contá-lo automaticamente.

const CLOUD = 'certificacao-cloud';
const IA = 'certificacao-ia';
const APROF = 'aprofundamento';

const TRILHAS = [
  {
    chave: 'Cloud', slug: 'cloud', rotulo: 'Certificação Cloud Practitioner', codigo: 'CLF-C02', cor: '00E582', pasta: CLOUD,
    modulos: [
      [0, 'Por que a nuvem existe', `${CLOUD}/dominio-1-conceitos-de-nuvem/00-por-que-a-nuvem-existe.md`],
      [1, 'A infraestrutura global da AWS', `${CLOUD}/dominio-1-conceitos-de-nuvem/01-infraestrutura-global-da-aws.md`],
      [2, 'Well-Architected e Cloud Adoption Framework', `${CLOUD}/dominio-1-conceitos-de-nuvem/02-well-architected-e-caf.md`],
      [3, 'Economia da nuvem e migração', `${CLOUD}/dominio-1-conceitos-de-nuvem/03-economia-da-nuvem-e-migracao.md`],
      [4, 'O Modelo de Responsabilidade Compartilhada', `${CLOUD}/dominio-2-seguranca-e-conformidade/04-modelo-responsabilidade-compartilhada.md`],
      [5, 'Identidade e acesso (IAM)', `${CLOUD}/dominio-2-seguranca-e-conformidade/05-identidade-e-acesso-iam.md`],
      [6, 'Proteção de dados e criptografia', `${CLOUD}/dominio-2-seguranca-e-conformidade/06-protecao-de-dados-e-criptografia.md`],
      [7, 'Conformidade e serviços de segurança', `${CLOUD}/dominio-2-seguranca-e-conformidade/07-conformidade-e-servicos-de-seguranca.md`],
      [8, 'Formas de interagir com a AWS', `${CLOUD}/dominio-3-tecnologia-e-servicos/08-formas-de-interagir-com-a-aws.md`],
      [9, 'Computação: EC2, containers e serverless', `${CLOUD}/dominio-3-tecnologia-e-servicos/09-computacao-ec2-containers-serverless.md`],
      [10, 'Armazenamento: S3, EBS e EFS', `${CLOUD}/dominio-3-tecnologia-e-servicos/10-armazenamento-s3-ebs-efs.md`],
      [11, 'Redes: VPC, DNS e CloudFront', `${CLOUD}/dominio-3-tecnologia-e-servicos/11-redes-vpc-dns-cloudfront.md`],
      [12, 'Bancos de dados', `${CLOUD}/dominio-3-tecnologia-e-servicos/12-bancos-de-dados.md`],
      [13, 'Escalabilidade e alta disponibilidade', `${CLOUD}/dominio-3-tecnologia-e-servicos/13-escalabilidade-e-alta-disponibilidade.md`],
      [14, 'Modelos de preço', `${CLOUD}/dominio-4-cobranca-precos-e-suporte/14-modelos-de-preco.md`],
      [15, 'Ferramentas de custo', `${CLOUD}/dominio-4-cobranca-precos-e-suporte/15-ferramentas-de-custo.md`],
      [16, 'Suporte e Trusted Advisor', `${CLOUD}/dominio-4-cobranca-precos-e-suporte/16-suporte-e-trusted-advisor.md`],
    ],
    medalhas: [
      { nome: 'Conceitos de Nuvem', emoji: '☁️', mods: [0, 1, 2, 3] },
      { nome: 'Segurança', emoji: '🔐', mods: [4, 5, 6, 7] },
      { nome: 'Tecnologia e Serviços', emoji: '🧰', mods: [8, 9, 10, 11, 12, 13] },
      { nome: 'Cobrança e Suporte', emoji: '💰', mods: [14, 15, 16] },
    ],
  },
  {
    chave: 'AI Practitioner', slug: 'ia', rotulo: 'Certificação AI Practitioner', codigo: 'AIF-C01', cor: '41B3FF', pasta: IA,
    modulos: [
      [0, 'IA, ML e Deep Learning: o mapa do território', `${IA}/dominio-1-fundamentos-de-ia-e-ml/00-ia-ml-deep-learning.md`],
      [1, 'Tipos de aprendizado de máquina', `${IA}/dominio-1-fundamentos-de-ia-e-ml/01-tipos-de-aprendizado.md`],
      [2, 'O ciclo de vida de um projeto de ML', `${IA}/dominio-1-fundamentos-de-ia-e-ml/02-ciclo-de-vida-ml.md`],
      [3, 'IA Generativa e modelos de fundação', `${IA}/dominio-2-fundamentos-de-ia-generativa/03-ia-generativa-e-modelos-de-fundacao.md`],
      [4, 'Por dentro dos LLMs: tokens e embeddings', `${IA}/dominio-2-fundamentos-de-ia-generativa/04-llms-tokens-embeddings.md`],
      [5, 'Engenharia de prompt', `${IA}/dominio-2-fundamentos-de-ia-generativa/05-engenharia-de-prompt.md`],
      [6, 'Amazon Bedrock', `${IA}/dominio-3-aplicacoes-de-modelos/06-amazon-bedrock.md`],
      [7, 'Amazon SageMaker e os serviços de IA da AWS', `${IA}/dominio-3-aplicacoes-de-modelos/07-sagemaker-e-servicos-de-ia.md`],
      [8, 'Personalizando modelos: RAG e ajuste fino', `${IA}/dominio-3-aplicacoes-de-modelos/08-rag-e-ajuste-fino.md`],
      [9, 'Agentes e avaliação de modelos', `${IA}/dominio-3-aplicacoes-de-modelos/09-agentes-e-avaliacao.md`],
      [10, 'Viés, justiça e os riscos da IA', `${IA}/dominio-4-ia-responsavel/10-vies-justica-e-riscos.md`],
      [11, 'Transparência, explicabilidade e ferramentas', `${IA}/dominio-4-ia-responsavel/11-transparencia-e-ferramentas.md`],
      [12, 'Protegendo soluções de IA na AWS', `${IA}/dominio-5-seguranca-e-governanca/12-seguranca-de-solucoes-de-ia.md`],
      [13, 'Governança e conformidade em IA', `${IA}/dominio-5-seguranca-e-governanca/13-governanca-e-conformidade.md`],
    ],
    medalhas: [
      { nome: 'Fundamentos de IA e ML', emoji: '🧠', mods: [0, 1, 2] },
      { nome: 'IA Generativa', emoji: '✨', mods: [3, 4, 5] },
      { nome: 'Aplicações de Modelos', emoji: '🤖', mods: [6, 7, 8, 9] },
      { nome: 'IA Responsável', emoji: '⚖️', mods: [10, 11] },
      { nome: 'Segurança e Governança', emoji: '🛡️', mods: [12, 13] },
    ],
  },
  {
    chave: 'Aprofundado', slug: 'aprofundamento', rotulo: 'Aprendizado Aprofundado', codigo: 'Capacitação de Líderes', cor: 'FF9900', pasta: APROF,
    modulos: [
      [1, 'Fundamentos de Computação', `${APROF}/01-fundamentos-de-computacao/`],
      [2, 'ELB e Auto Scaling', `${APROF}/02-elb-e-auto-scaling/`],
      [3, 'Infraestrutura Global da AWS', `${APROF}/03-infraestrutura-global-aws/`],
      [4, 'Fundamentos de Armazenamento', `${APROF}/04-fundamentos-de-armazenamento/`],
      [5, 'Networking e VPC', `${APROF}/05-networking-e-vpc/`],
      [6, 'Banco de Dados — Parte 1', `${APROF}/06-banco-de-dados-parte-1/`],
      [7, 'Banco de Dados — Parte 2', `${APROF}/07-banco-de-dados-parte-2/`],
      [8, 'Modelo de Responsabilidade Compartilhada', `${APROF}/08-modelo-responsabilidade-compartilhada/`],
      [9, 'IAM — Acesso Seguro', `${APROF}/09-iam-acesso-seguro/`],
      [10, 'IAM — Usuários e Credenciais', `${APROF}/10-iam-usuarios-e-credenciais/`],
      [11, 'IAM — Grupos e Roles', `${APROF}/11-iam-grupos-e-roles/`],
      [12, 'IAM — Políticas e Permissões', `${APROF}/12-iam-policies-e-permissoes/`],
    ],
    medalhas: [
      { nome: 'Computação', emoji: '🖥️', mods: [1, 2] },
      { nome: 'Infra Global e Storage', emoji: '🌎', mods: [3, 4] },
      { nome: 'Redes e VPC', emoji: '🕸️', mods: [5] },
      { nome: 'Bancos de Dados', emoji: '🗄️', mods: [6, 7] },
      { nome: 'Responsabilidade', emoji: '🤝', mods: [8] },
      { nome: 'IAM Completo', emoji: '🔑', mods: [9, 10, 11, 12] },
    ],
  },
].map(t => ({
  ...t,
  total: t.modulos.length,
  modulos: t.modulos.map(([n, titulo, caminho]) => ({ n, titulo, caminho })),
}));

module.exports = { TRILHAS };
