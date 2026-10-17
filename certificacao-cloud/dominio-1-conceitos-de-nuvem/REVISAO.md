<div align="center">

# 📄 Revisão de véspera

**Domínio 1 · Conceitos de Nuvem** · 24% do CLF-C02

<sub>Uma página para reler antes da prova</sub>

</div>

---

## ⚡ Em 30 segundos

- Nuvem = recursos de TI pela internet, sob demanda, pagando pelo uso (CapEx → OpEx).
- Infraestrutura global: Região → Zonas de Disponibilidade → Edge Locations.
- Well-Architected tem 6 pilares; CAF organiza a migração em 6 perspectivas.

## 🎯 Se a questão fala em… pense em…

| Se a questão fala em… | Pense em… |
|:--|:--|
| Pagar só pelo que usa, sem investimento antecipado | **Pay-as-you-go / CapEx → OpEx** |
| Ajustar recursos ao pico e à calmaria | **Elasticidade** |
| Preço menor porque a AWS compra em massa | **Economia de escala** |
| Dado sensível local + nuvem para escalar | **Nuvem híbrida** |
| Só enviar o código, sem gerenciar SO | **PaaS (ex.: Elastic Beanstalk)** |
| Controle total do SO | **IaaS (ex.: EC2)** |
| Escolher região | **Conformidade, latência, serviços disponíveis, preço** |
| Resistir à queda de um data center | **Multi-AZ** |
| Conteúdo mais perto do usuário | **Edge Locations / CloudFront** |
| Pilar que fala de impacto ambiental | **Sustentabilidade** |
| Estratégias de migração | **Os 7 Rs (rehost, replatform, refactor…)** |

## ⚠️ Pegadinhas

- Elasticidade (automática, para cima e para baixo) ≠ escalabilidade (capacidade de crescer).
- Edge Location não é uma AZ — serve cache e DNS, não roda suas instâncias.
- SaaS ainda deixa com você os dados e o controle de acesso.

---

<div align="center">

📚 [Módulos do domínio](./README.md) &nbsp;·&nbsp; 🎯 [Simulado do domínio](../simulados/simulado-dominio-1.md) &nbsp;·&nbsp; 📖 [Glossário](../../GLOSSARIO.md) &nbsp;·&nbsp; 🏠 [Trilha Cloud](../README.md)

</div>
