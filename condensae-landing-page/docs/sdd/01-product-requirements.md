# 01 — Requisitos do produto

## Visão geral

**CONDENSAÊ** é uma marca fictícia de leite condensado em sachês individuais. A landing page é um projeto acadêmico de frontend, com experiência de marca, apresentação do conceito, escolha de kits simulados e formulário demonstrativo para estabelecimentos.

**Slogan:** “Abriu, apertou, adoçou.”

## Objetivos

- Comunicar rapidamente o conceito e a proposta de valor do produto.
- Apresentar benefícios, ocasiões de consumo e opções de kits de forma visual.
- Demonstrar interatividade real no frontend sem backend.
- Atender dispositivos móveis e desktop com layout acessível.
- Organizar o código com React, FSD e CSS Modules.
- Manter documentação SDD para justificar decisões e verificar o resultado.

## Público-alvo

1. Consumidores individuais interessados em porções práticas.
2. Cafeterias, lanchonetes, docerias, food trucks e outros estabelecimentos.
3. Avaliadores acadêmicos que precisam entender a proposta e a implementação.

## Direção de marca

- Personalidade: divertida, acolhedora, brasileira, apetitosa e direta.
- Mensagem principal: praticidade em uma porção individual.
- Paleta: amarelo `#FFD65A`, marrom cacau `#60391F`, creme `#FFF4D9`, caramelo `#E98B59`.
- Tipografia: Fredoka para títulos e Nunito Sans para texto/interface, com fontes alternativas.
- Linguagem: leve e informal sem promessas técnicas não verificadas.

## Escopo funcional

### RF-01 — Navegação
A página deve conter marca clicável, links para seções e menu mobile expansível. Links de navegação devem apontar para âncoras existentes.

### RF-02 — Hero
A primeira dobra deve apresentar a proposta do produto, slogan, CTA para kits e link para conhecer o produto. A ilustração do sachê pode ser construída com CSS e texto, sem depender de imagem externa do produto.

### RF-03 — Benefícios
Exibir três benefícios com título, ícone decorativo e descrição.

### RF-04 — Formas de uso
Exibir exemplos ilustrativos de ocasiões de consumo, sem afirmar propriedades nutricionais ou de segurança.

### RF-05 — Seleção de kit
Disponibilizar três opções simuladas: unidade por R$ 2,49; kit de 6 por R$ 12,90; kit de 12 por R$ 23,90. A seleção deve atualizar visualmente o kit escolhido, quantidade e total.

### RF-06 — Compra simulada
Ao acionar o CTA, abrir diálogo acessível com resumo do kit e aviso explícito de que não há venda, cobrança ou envio real. Deve fechar pelo botão, clique fora ou tecla Escape.

### RF-07 — Interesse comercial
Oferecer formulário com nome, estabelecimento, e-mail e volume estimado. Validar campos obrigatórios e formato de e-mail no cliente. Ao enviar dados válidos, exibir confirmação local. Não transmitir nem persistir dados.

### RF-08 — FAQ
Exibir perguntas frequentes expansíveis, permitindo abrir uma resposta por vez e comunicar o estado com `aria-expanded`.

### RF-09 — CTA final e rodapé
Fornecer retorno ao topo, CTA de volta aos kits e declaração de que a marca é fictícia.

### RF-10 — Feedback de interface
Botões, links e controles interativos devem ter estados de hover/foco perceptíveis e rótulos acessíveis.

## Requisitos não funcionais

- **RNF-01 Responsividade:** layout utilizável a partir de 320 px de largura, sem rolagem horizontal da página.
- **RNF-02 Acessibilidade:** HTML semântico, rótulos de formulário, mensagens de erro associadas, foco visível, navegação por teclado e respeito a `prefers-reduced-motion`.
- **RNF-03 Arquitetura:** React + Vite, arquitetura Feature-Sliced Design (FSD) adaptada ao escopo e CSS Modules para estilos de componentes.
- **RNF-04 Client-side:** não usar backend, banco de dados, autenticação, pagamentos ou APIs.
- **RNF-05 Integridade:** valores e depoimentos, se forem adicionados no futuro, devem estar identificados como ilustrativos. Não afirmar que o produto é real ou que houve validação de segurança alimentar.
- **RNF-06 Manutenibilidade:** conteúdo repetido em módulos de dados; componentes pequenos com responsabilidade clara.
- **RNF-07 Performance:** evitar bibliotecas extras desnecessárias e usar animações discretas.
- **RNF-08 Privacidade:** formulário de demonstração não deve enviar ou salvar informações digitadas.

## Fora do escopo

- Compra, checkout, pagamentos, estoque, frete e pedidos reais.
- Envio de formulário para e-mail, CRM ou API.
- Login, contas, persistência local ou remota.
- Alegações de composição, conservação, validade, segurança alimentar ou certificações.
- Painel administrativo e integração com sistemas de negócio.

## Premissas e limitações

- Preços são fictícios e usados para demonstrar interação.
- A página representa um conceito de marca, não um produto comercial disponível.
- A fonte Google Fonts depende de conexão; fontes de sistema funcionam como fallback.
