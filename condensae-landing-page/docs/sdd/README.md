# SDD — Specification-Driven Development

Este diretório organiza a implementação do CONDENSAÊ por especificações explícitas. Os documentos são a fonte de referência para o escopo, comportamento esperado, decisões de arquitetura e validação.

## Ordem de leitura

1. [`01-product-requirements.md`](./01-product-requirements.md) — objetivo, público, escopo e requisitos funcionais/não funcionais.
2. [`02-technical-specification.md`](./02-technical-specification.md) — arquitetura FSD, componentes, estado, dados e regras de implementação.
3. [`03-acceptance-criteria.md`](./03-acceptance-criteria.md) — critérios verificáveis para considerar o produto concluído.
4. [`04-implementation-plan.md`](./04-implementation-plan.md) — fatias de implementação e checklist de validação.
5. [`05-decisions-and-changelog.md`](./05-decisions-and-changelog.md) — registro das decisões e alterações; atualizar conforme o projeto evoluir.

## Regra de trabalho

Antes de mudar comportamento, identificar o requisito relacionado e atualizar a especificação se a mudança alterar o escopo. Após implementar, validar os critérios de aceitação e registrar o resultado. Não descrever como implementado, testado ou validado algo que ainda não foi executado.
