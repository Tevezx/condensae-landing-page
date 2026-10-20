# 05 — Decisões e changelog

## Registro inicial

### DEC-001 — FSD como organização de frontend

**Decisão:** separar composição da aplicação (`app`/`pages`), blocos de interface (`widgets`), comportamentos de usuário (`features`) e elementos/dados compartilhados (`shared`).

**Motivo:** deixar a organização legível para avaliação acadêmica e facilitar evolução sem concentrar toda a interface em um único arquivo.

### DEC-002 — CSS Modules

**Decisão:** cada widget/feature tem seu próprio `*.module.css`; CSS global contém tokens, tipografia e acessibilidade transversal.

**Motivo:** escopo de classe previsível e menor acoplamento entre componentes.

### DEC-003 — Ilustração do sachê construída em CSS

**Decisão:** construir o visual principal com HTML e CSS, sem depender de fotografia externa de produto.

**Motivo:** preservar consistência com a identidade visual e manter a página demonstrável sem asset comercial.

### DEC-004 — Interações simuladas, sem backend

**Decisão:** seleção de kits, modal e formulário são estados locais React. Nenhum pedido ou contato é enviado.

**Motivo:** o escopo é uma landing page 100% client-side; evitar a impressão de compra real e reduzir tratamento de dados.

### DEC-005 — Conteúdo e preços centralizados

**Decisão:** opções de kit, benefícios, ocasiões e FAQ ficam em `shared/data/content.js`.

**Motivo:** evitar duplicação e facilitar ajustes de conteúdo.

## Changelog

### 2026-10-20 — Implementação inicial com base no starter Vite

- Criada estrutura FSD para landing page.
- Adicionados header/menu mobile, hero, benefícios, usos, kits, modal, formulário comercial, FAQ, CTA final e footer.
- Adicionados tokens de identidade visual e CSS Modules.
- Atualizados metadados HTML e favicon.
- Criada documentação SDD de requisitos, especificação técnica, critérios de aceitação e plano.
- **Validação pendente:** build, lint e verificação visual em navegador ainda precisam ser executados antes de declarar o projeto totalmente validado.

## Diário de desenvolvimento — atualizar durante a atividade

| Data | Requisito/decisão | O que foi tentado | Resultado observado | Próximo passo |
|---|---|---|---|---|
|  |  |  |  |  |

## Incremento: carrinho e acessibilidade

- Centralizado o estado do carrinho em `shared/model/CartContext.jsx` para permitir que o seletor de kits e o painel compartilhem as mesmas regras.
- Criado `widgets/cart/CartWidget.jsx` com estado vazio, alteração de quantidades, remoção, subtotal, total ilustrativo e confirmação de pedido simulado.
- O fluxo continua exclusivamente no navegador. Não há Google Maps, API externa, backend ou pagamento real.
- Reforçados foco visível, adaptação do painel a telas pequenas e respeito a `prefers-reduced-motion`.
- Próxima etapa: executar `npm install`, `npm run build` e `npm run lint` no ambiente local e realizar a validação manual dos critérios de aceitação.
