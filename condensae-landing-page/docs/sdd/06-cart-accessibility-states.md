# SDD — Carrinho, acessibilidade e estados de interface

## Objetivo

Evoluir a landing page do CONDENSAÊ com um carrinho totalmente simulado no frontend, interações previsíveis, acessibilidade básica e responsividade, sem backend, banco de dados ou serviços externos.

## Requisitos funcionais

- **RF-CART-01:** a pessoa pode adicionar o kit selecionado à sacola.
- **RF-CART-02:** adicionar um kit já existente incrementa sua quantidade.
- **RF-CART-03:** a sacola permite aumentar e diminuir quantidades e remover itens.
- **RF-CART-04:** quantidade mínima por item é 1; ao diminuir abaixo de 1, o item é removido. A quantidade máxima por item é 99.
- **RF-CART-05:** subtotal e total ilustrativo são recalculados a partir de preço × quantidade.
- **RF-CART-06:** o carrinho exibe estado vazio e permite retornar aos kits.
- **RF-CART-07:** finalizar apresenta confirmação de pedido simulado, limpa a sacola e informa que não houve compra nem cobrança.
- **RF-CART-08:** a sacola pode ser fechada pelo botão, clicando no fundo externo ou pressionando Escape.
- **RF-UI-01:** adicionar ao carrinho mostra feedback acessível usando uma região de status.
- **RF-UI-02:** controles interativos têm nomes acessíveis e foco visível.
- **RF-UI-03:** a interface respeita `prefers-reduced-motion`.

## Regras de negócio

- Os valores são fictícios e apenas demonstrativos.
- Não há pagamento, envio de dados para terceiros ou persistência em servidor.
- Cada tipo de kit é identificado pelo `id` definido em `src/shared/data/content.js`.
- O estado compartilhado do carrinho vive em `src/shared/model/CartContext.jsx` e é consumido pelo seletor de kits e pelo widget da sacola.
- A formatação monetária usa `Intl.NumberFormat` por meio de `toLocaleString` com locale `pt-BR` e moeda BRL.

## Especificação de interface

- O carrinho abre em um painel lateral com semântica de diálogo modal.
- O foco é direcionado ao botão de fechar quando o painel abre.
- `Escape` fecha o painel.
- O painel apresenta itens, quantidade, preço por linha, subtotal, total ilustrativo, opção de remover e opção de esvaziar.
- O layout do painel se adapta a telas estreitas.

## Critérios de aceitação

- [ ] Adicionar o mesmo kit duas vezes resulta em quantidade 2.
- [ ] Alterar quantidades atualiza os valores imediatamente.
- [ ] Remover o único item exibe o estado vazio.
- [ ] Esvaziar sacola remove todos os itens.
- [ ] Finalizar pedido mostra a confirmação simulada e zera a sacola.
- [ ] Painel pode ser fechado por botão, fundo e tecla Escape.
- [ ] A navegação por teclado apresenta foco perceptível.
- [ ] A interface não sugere que a compra foi real.
- [ ] Validar manualmente em larguras mobile, tablet e desktop.

## Limitações conhecidas

- O carrinho não persiste após recarregar a página.
- Não há cálculo de frete, checkout real, pagamento, estoque ou integração comercial.
- A confirmação é uma simulação acadêmica.
