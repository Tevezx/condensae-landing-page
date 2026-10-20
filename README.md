# 🍮 CONDENSAÊ — Abriu, apertou, adoçou!

> Landing page de um produto fictício desenvolvido com React para a Atividade — Landing Page de Produto.

## 👥 Integrante

- **Integrante** [Carlos Tevez Rosseto Soares]

## 🥛 Sobre o produto

O **CONDENSAÊ** é uma marca fictícia de leite condensado em sachês individuais, criada com a proposta de tornar o consumo desse ingrediente mais prático, divertido e acessível no dia a dia.

Inspirado na praticidade das embalagens individuais de molhos utilizadas em lanchonetes, o produto apresenta uma alternativa para quem deseja adicionar leite condensado a frutas, bolos, panquecas e outras sobremesas sem precisar abrir uma embalagem convencional.

O projeto considera dois públicos principais:

- **Consumidores individuais:** pessoas que desejam adicionar uma porção de leite condensado às suas sobremesas de maneira prática.
- **Estabelecimentos comerciais:** lanchonetes, cafeterias, docerias e outros negócios que podem oferecer porções individuais aos seus clientes.

O slogan escolhido foi:

**"Abriu, apertou, adoçou."**

O objetivo do projeto é apresentar a proposta do produto por meio de uma landing page que combine identidade visual, comunicação descontraída, apresentação dos benefícios e funcionalidades interativas.

> **Nota:** o CONDENSAÊ é um produto fictício criado para fins acadêmicos. Os preços, as ofertas, as avaliações e o processo de compra apresentados na aplicação são demonstrativos. Não há comercialização ou processamento de pagamentos reais.

---

## 🎯 Objetivos do projeto

- Desenvolver uma landing page utilizando React.
- Aplicar CSS Modules para organizar e isolar os estilos dos componentes.
- Utilizar a arquitetura FSD (Feature-Sliced Design) para estruturar o código.
- Criar uma interface responsiva e acessível.
- Apresentar um produto fictício de maneira clara e atrativa.
- Implementar interações funcionais no frontend, sem necessidade de backend.
- Documentar as decisões, mudanças e aprendizados durante o desenvolvimento.

---

# 🧭 Jornada de construção

## 1. Ideia inicial

A proposta surgiu da atividade acadêmica, que solicitava a criação de um produto fictício e o desenvolvimento de uma landing page para apresentar e divulgar sua ideia.

A intenção foi desenvolver algo simples de compreender, visualmente interessante e que permitisse explorar diferentes recursos de frontend, como componentes reutilizáveis, formulários, navegação, estados de interface e interações.

A escolha do leite condensado em sachês individuais partiu da ideia de adaptar um formato de embalagem já conhecido em estabelecimentos alimentícios para um produto tradicionalmente comercializado em embalagens maiores.

A partir dessa proposta, surgiu o CONDENSAÊ, com uma comunicação descontraída e uma identidade visual inspirada no universo dos doces.

### Alternativas consideradas

Durante a definição da solução, foram consideradas possibilidades para a apresentação do produto, sua identidade visual e a experiência de navegação.

A direção escolhida priorizou:

- Um nome fácil de associar ao produto e à sua finalidade.
- Uma comunicação informal e bem-humorada.
- Uma identidade visual que remetesse a leite condensado, caramelo e sobremesas.
- Uma apresentação que atendesse tanto consumidores individuais quanto estabelecimentos comerciais.
- Uma experiência de compra simulada, coerente com as limitações de uma aplicação exclusivamente frontend.

A escolha final foi pelo CONDENSAÊ, pois a proposta permitia combinar criatividade, comunicação visual e funcionalidades práticas de uma landing page comercial.

## 2. Pesquisa e referências

A construção visual foi orientada pela busca de uma identidade coerente com o segmento alimentício e pela observação de referências de páginas comerciais e embalagens.

Foram utilizadas referências visuais para explorar possibilidades de organização de produtos, apresentação de ofertas e composição de interfaces.

### Referências visuais

- [Hippeas — referência de projeto de marca e comércio eletrônico](https://hippeas.com/) — referência visual para apresentação de produtos alimentícios e identidade de marca.
- [Kitsui Online — referência de apresentação de kits e ofertas](https://kitsui.com/) — referência para explorar a apresentação comercial de produtos e conjuntos promocionais.

Essas referências foram utilizadas como inspiração visual, e não como modelos a serem reproduzidos integralmente. A proposta do CONDENSAÊ possui identidade, conteúdo e organização próprios.

### Definição da identidade visual

A identidade visual foi planejada para transmitir uma sensação de doçura, proximidade e descontração.

A paleta de cores definida foi:

| Cor | Código | Aplicação |
|---|---|---|
| Amarelo | `#FFD65A` | Destaques, elementos gráficos e chamadas |
| Marrom cacau | `#60391F` | Textos, contornos e elementos de contraste |
| Creme | `#FFF4D9` | Fundos e áreas de respiro |
| Caramelo | `#E98B59` | Destaques complementares |

A proposta tipográfica prioriza títulos arredondados e expressivos, combinados com uma fonte de corpo legível.

A marca também explora elementos gráficos que remetem à textura cremosa do leite condensado, reforçando a associação entre o nome e o produto.

## 3. Ferramentas utilizadas

As ferramentas e tecnologias utilizadas na construção do projeto incluem:

| Ferramenta ou tecnologia | Finalidade |
|---|---|
| React | Construção da interface e dos componentes |
| Vite | Configuração do ambiente de desenvolvimento |
| JavaScript | Implementação da lógica e das interações |
| CSS Modules | Organização e isolamento dos estilos |
| Git e GitHub | Controle de versão e disponibilização do código |
| VS Code | Edição e organização dos arquivos |
| Markdown | Documentação do projeto e das especificações |
| ChatGPT | Apoio à ideação, decisões técnicas, implementação e documentação |
| Ferramenta de geração de imagens por IA | Exploração inicial da identidade visual da marca |

A utilização de cada ferramenta deve ser compreendida dentro do seu papel: as tecnologias de desenvolvimento estruturam a aplicação, enquanto as ferramentas de apoio auxiliam na elaboração e no refinamento da solução.

## 4. Arquitetura escolhida

A arquitetura adotada foi **FSD (Feature-Sliced Design)**.

A escolha foi motivada pela possibilidade de organizar a aplicação por responsabilidades, separando a composição geral da página, as seções visuais, as funcionalidades e os componentes compartilhados.

A estrutura conceitual utiliza as seguintes camadas:

- `app`: configuração e composição principal da aplicação.
- `pages`: páginas que organizam os elementos da interface.
- `widgets`: seções completas da landing page, como cabeçalho, apresentação do produto e rodapé.
- `features`: funcionalidades e interações específicas, como o carrinho e a simulação de compra.
- `shared`: componentes reutilizáveis, estilos globais, dados e recursos compartilhados.

Essa organização busca reduzir o acoplamento entre partes da aplicação e facilitar a manutenção e a evolução do projeto.

### CSS Modules

O projeto utiliza CSS Modules para manter os estilos associados aos respectivos componentes.

Essa abordagem ajuda a evitar conflitos entre classes CSS, favorece a organização dos arquivos e permite modificar o visual de uma seção sem afetar desnecessariamente outras partes da interface.

A arquitetura FSD e o CSS Modules foram escolhidos para atender aos requisitos acadêmicos e manter uma estrutura compreensível para o desenvolvimento em equipe ou individual.

## 5. Uso de inteligência artificial

A inteligência artificial foi utilizada como ferramenta de apoio ao desenvolvimento, contribuindo para a exploração de ideias, a organização técnica e a evolução da interface.

### Modelo utilizado

**ChatGPT — modelo GPT-6**

O ChatGPT foi utilizado como apoio em diferentes etapas do projeto:

- Exploração e refinamento da proposta do produto.
- Definição da identidade visual e da organização da landing page.
- Planejamento da arquitetura FSD.
- Estruturação de requisitos e especificações técnicas no formato SDD.
- Planejamento de funcionalidades interativas, incluindo o carrinho de compras simulado.
- Apoio à implementação de responsividade, acessibilidade e estados de interface.
- Revisão da documentação e elaboração do README.

Uma ferramenta de geração de imagens também foi utilizada para explorar visualmente a identidade da marca e produzir uma proposta inicial de logotipo.

### Resultados insatisfatórios e correções

Durante a exploração da identidade visual, a geração de imagens apresentou uma limitação importante: a representação do nome da marca não ficou completamente confiável.

O texto do logotipo foi interpretado de maneira incorreta em parte da representação, gerando uma aparência semelhante a "CÊ".

Esse resultado demonstrou uma limitação da geração de imagens quando há necessidade de reproduzir textos específicos com precisão.

A solução foi corrigir a representação da marca, mantendo o conceito visual e priorizando a grafia correta de **CONDENSAÊ** nos elementos textuais da interface.

### Critérios para utilizar sugestões de IA

A IA foi tratada como uma ferramenta de apoio, e não como substituta das decisões do projeto.

As sugestões foram consideradas conforme sua compatibilidade com os requisitos da atividade, com a arquitetura escolhida e com a proposta de uma aplicação 100% client-side.

Funcionalidades que exigiriam serviços externos, backend ou integrações desnecessárias foram deixadas de fora para preservar o escopo acadêmico.

O uso de IA deve ser avaliado pela contribuição ao processo de desenvolvimento, pela revisão dos resultados e pela capacidade de identificar e corrigir limitações.

## 6. Evolução da solução

A solução evoluiu de uma proposta de landing page para uma aplicação frontend com foco maior na experiência de navegação e nas interações do usuário.

### Identidade visual

A identidade foi direcionada para uma estética de marca alimentícia, utilizando amarelo, creme, marrom e caramelo.

A proposta visual procura transmitir a ideia de um produto doce e divertido sem comprometer a legibilidade das informações.

### Organização da página

A estrutura foi planejada para apresentar o produto progressivamente, conduzindo o visitante desde o primeiro contato com a marca até as informações comerciais.

As seções previstas incluem:

- Cabeçalho e navegação.
- Hero section com proposta do produto e CTA.
- Benefícios e diferenciais.
- Apresentação do produto.
- Sugestões de consumo.
- Kits e ofertas.
- Área destinada a estabelecimentos comerciais.
- Avaliações ilustrativas.
- Perguntas frequentes.
- Chamada final e rodapé.

### Evolução das funcionalidades

Além da apresentação visual, o projeto passou a contemplar interações que simulam o funcionamento de uma página comercial.

Entre elas estão a seleção de kits, o carrinho de compras, a atualização de quantidades, o cálculo dos valores e a confirmação de um pedido fictício.

A aplicação também considera estados de interface, validação de formulários, responsividade e acessibilidade.

### Escopo e limitações

O projeto permanece exclusivamente client-side. Não possui backend, banco de dados, integração com serviços de pagamento ou processamento de pedidos reais.

Essa decisão mantém a solução alinhada à atividade e permite concentrar o desenvolvimento na interface, na arquitetura e na lógica executada no navegador.

As ofertas, os preços e os dados demonstrativos não representam uma operação comercial real.

## 7. Resultado final

O resultado esperado é uma landing page que apresente o CONDENSAÊ de maneira clara, visualmente coerente e interativa.

A proposta combina uma identidade própria, comunicação descontraída, apresentação dos diferenciais do produto e uma experiência de navegação inspirada em páginas comerciais.

Do ponto de vista técnico, o projeto permite aplicar conceitos de React, componentização, CSS Modules, arquitetura FSD, organização de responsabilidades e gerenciamento de estados no frontend.

A implementação do carrinho simulado amplia o escopo para além de uma página estática, permitindo trabalhar com regras de negócio simples, atualização de quantidades e cálculo de valores.

### O que poderia ser melhorado com mais tempo?

Com mais tempo, seria possível:

- Realizar testes de usabilidade com pessoas que representem o público-alvo.
- Validar a experiência em diferentes navegadores e dispositivos.
- Ampliar a cobertura de testes automatizados.
- Refinar os recursos de acessibilidade.
- Aperfeiçoar as ilustrações e os elementos visuais do produto.
- Revisar a experiência completa do carrinho, incluindo casos extremos e mensagens de feedback.
- Melhorar a documentação técnica e a rastreabilidade entre requisitos, implementação e testes.

Essas melhorias ajudariam a tornar a aplicação mais consistente e permitiriam avaliar a solução para além da aparência visual.

## 8. Documentação SDD

O projeto utiliza documentação orientada a requisitos e especificações, seguindo a abordagem **SDD (Spec-Driven Development)**.

A documentação é organizada para registrar o que a aplicação deve fazer, como as funcionalidades são planejadas e quais critérios podem ser utilizados para avaliar sua implementação.

Os documentos de especificação ficam no diretório `docs/sdd/` e contemplam os requisitos do produto, a especificação técnica, os critérios de aceitação, o plano de implementação e o registro de decisões.

Essa abordagem ajuda a manter o desenvolvimento alinhado ao escopo e facilita a revisão do que foi implementado.

## 9. Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm disponível no terminal.
- Git, caso deseje clonar o repositório.

### Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone [URL_PUBLICA_DO_REPOSITORIO]
cd condensae-landing-page
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Para verificar a compilação de produção:

```bash
npm run build
```

Caso o projeto tenha um script de lint configurado, execute também:

```bash
npm run lint
```

Os comandos de validação devem ser executados no ambiente de desenvolvimento antes de afirmar que a compilação, o lint ou os testes foram aprovados.

## 10. Considerações finais

O desenvolvimento do CONDENSAÊ permitiu explorar a criação de uma marca fictícia e transformar a proposta em uma experiência digital.

Mais do que construir uma interface visual, o projeto busca demonstrar a importância de tomar decisões de design, organizar o código, planejar funcionalidades e revisar os resultados produzidos durante o desenvolvimento.

A documentação da jornada também evidencia que a construção de software envolve experimentação, análise crítica e refinamento contínuo. Ferramentas de IA podem contribuir nesse processo, desde que seus resultados sejam avaliados e ajustados conforme os objetivos e as limitações do projeto.

---

**Projeto acadêmico desenvolvido para a Atividade — Landing Page de Produto.**

**Produto:** CONDENSAÊ — Abriu, apertou, adoçou!

**Tecnologias principais:** React, JavaScript, Vite e CSS Modules.

**Arquitetura:** Feature-Sliced Design (FSD).
