# 02 — Especificação técnica

## Stack

- React com componentes funcionais e hooks.
- Vite para desenvolvimento e build.
- JavaScript ES Modules.
- CSS Modules (`*.module.css`) para estilos locais.
- CSS global apenas para tokens, reset, tipografia e acessibilidade transversal.
- Oxlint conforme configuração já presente no projeto.

## Arquitetura FSD adotada

```text
src/
├── app/                  # composição e entrada de alto nível
├── pages/landing/        # composição da landing page
├── widgets/              # blocos visuais completos da página
│   ├── header/
│   ├── hero/
│   ├── benefits/
│   ├── uses/
│   ├── pricing/
│   ├── faq/
│   └── footer/
├── features/             # ações e comportamentos do usuário
│   ├── mobile-menu/
│   ├── kit-selector/
│   ├── purchase-modal/
│   └── business-inquiry/
└── shared/
    ├── data/             # conteúdo estático tipado por convenção
    ├── styles/           # tokens e estilos globais
    └── ui/               # componentes visuais reutilizáveis
```

### Regras de dependência

- `pages` compõe widgets e features.
- `widgets` podem usar features e `shared`.
- `features` podem usar `shared`.
- `shared` não importa camadas superiores (`pages`, `widgets`, `features`, `app`).
- Não criar estado global enquanto estado local resolver o requisito.
- Os estilos de componente ficam no CSS Module adjacente. Classes globais são reservadas a tokens/utilitários documentados.

## Contratos de comportamento

### Estado da seleção de kit

- Estado: `selectedId`, inicialmente `six`.
- Fonte de dados: `shared/data/content.js`.
- Derivação: produto selecionado é encontrado por `id`; total, quantidade e resumo vêm do mesmo objeto para evitar divergência.
- Interação: o seletor atualiza `selectedId`; o CTA abre o modal com o produto selecionado naquele momento.

### Modal de compra simulada

- Recebe `product` e `onClose` por props.
- Só renderiza quando `product` não é nulo.
- Fecha por botão, clique no backdrop e Escape.
- Bloqueia scroll do documento enquanto aberto e restaura ao desmontar.
- Apresenta aviso de simulação; não executa transação.

### Formulário comercial

- Estado local controlado: nome, estabelecimento, e-mail e volume.
- Validação no submit: nome e estabelecimento não vazios; e-mail com formato básico.
- Erros são apresentados junto ao campo e comunicados com atributos ARIA.
- Sucesso é apenas visual/local; os dados não são enviados nem armazenados.
- O texto da interface recomenda não usar dados pessoais reais na demonstração.

### FAQ

- Estado `openIndex`; `-1` representa todas as respostas fechadas.
- Cada botão informa `aria-expanded` e aponta para o painel da resposta.

### Menu mobile

- Estado local booleano.
- Botão alterna menu e expõe `aria-expanded`/rótulo dinâmico.
- Selecionar âncora fecha o menu.

## Design system

| Token | Valor | Uso |
|---|---|---|
| `--yellow` | `#FFD65A` | destaque e seleção |
| `--brown` | `#60391F` | texto principal, bordas e CTAs |
| `--cream` | `#FFF4D9` | fundos suaves |
| `--caramel` | `#E98B59` | acento e títulos |
| `--white` | `#FFFDF7` | superfícies |

- Raio visual: superfícies arredondadas, sachê e selos com contorno escuro.
- Hierarquia: títulos expressivos, textos curtos e CTAs claros.
- Movimento: microinterações discretas; respeitar redução de movimento.

## Acessibilidade e responsividade

- Usar `header`, `main`, `section`, `article`, `nav` e `footer` conforme sentido.
- Manter foco de teclado visível.
- Campos com `label`, erros relacionados via `aria-describedby` e estado `aria-invalid`.
- Dialog com `role="dialog"`, `aria-modal` e título associado.
- Controles devem ser `<button>` ou links semânticos, não `div` clicável.
- Breakpoints locais podem variar conforme o conteúdo; validar pelo menos 320, 375, 768, 1024 e 1440 px.
- Verificar `prefers-reduced-motion`.

## Convenções

- Componentes React: PascalCase.
- Arquivos CSS Modules: `ComponentName.module.css`.
- Dados de conteúdo não devem ser duplicados entre widgets.
- Identificadores de requisito (`RF-*`, `RNF-*`) devem ser usados em commits/notas quando útil.
- Não instalar dependências sem necessidade justificada.
