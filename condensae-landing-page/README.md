# CONDENSAÊ 🍮

Landing page responsiva de uma marca fictícia de leite condensado em sachês individuais. Projeto acadêmico de Frontend desenvolvido com React, Vite, arquitetura FSD e CSS Modules.

> **“Abriu, apertou, adoçou.”**

## Sobre o conceito

O CONDENSAÊ propõe uma porção individual e prática de leite condensado, pensada para consumidores e estabelecimentos como cafeterias, lanchonetes, docerias e food trucks. A interface apresenta a proposta de valor, ideias de consumo, kits com preços ilustrativos e uma área de interesse comercial demonstrativa.

**Importante:** a marca e o produto são fictícios. Preços e ações de compra são demonstrações acadêmicas; não há venda, cobrança, envio de formulário ou backend.

## Funcionalidades

- Navegação por âncoras e menu responsivo para telas pequenas.
- Hero com ilustração CSS do sachê.
- Seções de benefícios e sugestões ilustrativas de consumo.
- Seleção de kits com preços ilustrativos.
- Sacola compartilhada: adicionar kits, incrementar quantidade, alterar quantidades, remover itens e esvaziar a sacola.
- Cálculo reativo de subtotal e total ilustrativo.
- Painel de sacola com estado vazio e finalização de pedido simulada.
- Confirmação explícita de que não há compra nem cobrança reais.
- Formulário comercial com validação client-side e confirmação local.
- FAQ expansível.
- Layout responsivo, foco de teclado e suporte a `prefers-reduced-motion`.

## Tecnologias

- React
- Vite
- JavaScript (ES Modules)
- CSS Modules
- Oxlint

## Arquitetura

A organização segue uma adaptação de Feature-Sliced Design:

```text
src/
├── app/                  # composição principal
├── pages/landing/        # página que compõe a experiência
├── widgets/              # header, hero, benefícios, usos, kits, FAQ e footer
├── features/             # menu mobile, seletor de kits, modal e formulário
└── shared/               # dados, UI reutilizável e estilos globais
```

A especificação orientada por requisitos (SDD) está em [`docs/sdd/`](./docs/sdd/README.md).

## Executar localmente

Requisitos: Node.js compatível com a versão de Vite definida no `package.json` e npm.

```bash
npm install
npm run dev
```

Para gerar a versão de produção e executar o lint:

```bash
npm run build
npm run lint
```

## Identidade visual

| Token | Cor |
|---|---|
| Amarelo | `#FFD65A` |
| Marrom cacau | `#60391F` |
| Creme | `#FFF4D9` |
| Caramelo | `#E98B59` |

Fredoka é usada em títulos e Nunito Sans em textos, com fontes de sistema como fallback.

## SDD e validação

- [Requisitos do produto](./docs/sdd/01-product-requirements.md)
- [Especificação técnica](./docs/sdd/02-technical-specification.md)
- [Critérios de aceitação](./docs/sdd/03-acceptance-criteria.md)
- [Plano de implementação](./docs/sdd/04-implementation-plan.md)
- [Decisões e changelog](./docs/sdd/05-decisions-and-changelog.md)
- [Carrinho, acessibilidade e estados](./docs/sdd/06-cart-accessibility-states.md)

Os critérios de aceitação ainda precisam ser verificados no ambiente de execução. O registro deve ser atualizado após executar build, lint e testes manuais. O README poderá receber a jornada real de desenvolvimento, referências, ferramentas/IA utilizadas e aprendizados depois que essas etapas forem concluídas — sem inventar testes ou etapas que não ocorreram.

## Limitações conhecidas

- Não há backend, API, banco de dados, checkout ou persistência.
- O formulário e a compra são simulações locais.
- O carrinho não persiste ao recarregar a página; não há frete, estoque ou pagamento real.
- O conceito não representa produto comercial e não faz alegações sobre composição, validade ou conservação.
- A tipografia do Google Fonts depende de conexão, mas possui alternativas locais.


### Marca e logotipo

O símbolo compacto da marca usa o monograma **C!**; o nome completo é renderizado como texto real (`CONDENSAÊ`) na interface para manter a grafia correta e acessível.
