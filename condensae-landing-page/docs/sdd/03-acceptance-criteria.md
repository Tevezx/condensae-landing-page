# 03 — Critérios de aceitação

Marque cada item após executar a verificação no navegador. A existência do código não equivale, por si só, a um teste concluído.

## Funcionais

- [ ] **CA-01 / RF-01:** os links do cabeçalho navegam para as seções corretas; em viewport mobile o botão abre/fecha o menu e clicar num link fecha o menu.
- [ ] **CA-02 / RF-02:** o hero apresenta marca, slogan, texto e dois caminhos de navegação; CTA principal leva à seleção de kits.
- [ ] **CA-03 / RF-03:** os três benefícios são exibidos e legíveis em mobile e desktop.
- [ ] **CA-04 / RF-04:** as quatro ocasiões de consumo aparecem com aviso de caráter ilustrativo.
- [ ] **CA-05 / RF-05:** selecionar cada kit atualiza a seleção e o resumo; unidade = R$ 2,49, kit 6 = R$ 12,90 e kit 12 = R$ 23,90.
- [ ] **CA-06 / RF-06:** CTA abre modal com o kit atual; botão, clique fora e Escape fecham; não há chamada de compra real.
- [ ] **CA-07 / RF-07:** formulário inválido mostra erros; dados válidos mostram confirmação local; nenhum envio de rede ocorre.
- [ ] **CA-08 / RF-08:** FAQ abre e fecha respostas; o estado ARIA acompanha a resposta visível.
- [ ] **CA-09 / RF-09:** CTA final leva aos kits e rodapé volta ao topo; o caráter fictício está declarado.
- [ ] **CA-10 / RF-10:** links e botões funcionam com teclado e apresentam foco visível.

## Qualidade

- [ ] **CA-11 / RNF-01:** sem overflow horizontal em larguras 320, 375, 768, 1024 e 1440 px.
- [ ] **CA-12 / RNF-02:** validar navegação por teclado, labels, mensagens de erro, nomes acessíveis e redução de movimento.
- [ ] **CA-13 / RNF-03:** estilos de componentes usam CSS Modules; global CSS contém somente estilos transversais.
- [ ] **CA-14 / RNF-04:** aplicação funciona sem backend/API; ações são locais.
- [ ] **CA-15 / RNF-05/RNF-08:** preço e conceito são marcados como fictícios; formulário não transmite nem persiste dados.
- [ ] **CA-16:** `npm run build` termina sem erro.
- [ ] **CA-17:** `npm run lint` termina sem erro ou os problemas restantes estão documentados.
- [ ] **CA-18:** conferir console do navegador e links/âncoras.

## Evidência

Registrar data, navegador/viewport, resultado, falhas e correções em [`05-decisions-and-changelog.md`](./05-decisions-and-changelog.md) ou em um relatório de teste separado. Não marcar itens sem executá-los.

## Carrinho, estados e acessibilidade

- [ ] Adicionar kit cria uma linha na sacola e anuncia feedback.
- [ ] Adicionar novamente o mesmo kit incrementa a quantidade.
- [ ] Os controles + e − recalculam subtotal e total ilustrativo.
- [ ] Remover item e esvaziar sacola atualizam a interface.
- [ ] Carrinho vazio oferece navegação para a seção de kits.
- [ ] Finalização mostra confirmação explícita de simulação e não cobra valores.
- [ ] O painel fecha com Escape, botão de fechar e clique no backdrop.
- [ ] Controles podem ser alcançados por teclado e têm foco visível.
- [ ] Revisão visual manual em celular, tablet e desktop.
- [ ] Movimento reduzido é respeitado quando configurado no sistema operacional.
