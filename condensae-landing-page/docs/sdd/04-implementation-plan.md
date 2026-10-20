# 04 — Plano de implementação

O plano segue fatias verticais: cada etapa deve produzir uma parte utilizável e verificável, mantendo os requisitos atualizados.

## Etapa A — Fundação

- [x] Remover o starter visual padrão do Vite.
- [x] Criar `app`, `pages`, `widgets`, `features` e `shared`.
- [x] Definir tokens, tipografia, cores e estilos globais.
- [x] Atualizar idioma, título, descrição e favicon.

## Etapa B — Experiência principal

- [x] Cabeçalho e navegação responsiva.
- [x] Hero com ilustração CSS do sachê.
- [x] Benefícios e ocasiões de uso.
- [x] Seção de kits com seleção controlada.
- [x] Modal de compra simulada.

## Etapa C — Conversão e conteúdo de apoio

- [x] Formulário de interesse comercial com validação client-side.
- [x] FAQ expansível.
- [x] CTA final e rodapé.
- [x] Declarações de ficção e ausência de envio real.

## Etapa D — Validação

- [ ] Executar `npm ci` caso as dependências não estejam instaladas.
- [ ] Executar `npm run build`.
- [ ] Executar `npm run lint` e corrigir avisos relevantes.
- [ ] Rodar `npm run dev` e verificar visualmente os breakpoints descritos.
- [ ] Testar todos os critérios em `03-acceptance-criteria.md`.
- [ ] Atualizar README final com processo real, ferramentas efetivamente usadas e limitações observadas.

## Definition of Done

Uma alteração é concluída quando: (1) os requisitos estão atualizados; (2) o comportamento está implementado; (3) estilos responsivos e acessíveis foram considerados; (4) build/lint relevantes foram executados; (5) critérios aplicáveis foram verificados; (6) decisões e limitações reais foram registradas.
