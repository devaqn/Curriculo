# Currículo — Pedro Miguel

**[Ver no ar](https://devaqncurriculo.netlify.app)**

Meu currículo como página única, em HTML, CSS e um punhado de JavaScript. Sem
framework e sem build: são quatro arquivos que qualquer servidor estático serve.

## Por que uma página, e não um PDF

Currículo acaba virando PDF de qualquer jeito, mas quem escreve num editor
perde o controle do resultado. Aqui a página é a fonte e o PDF sai dela: o botão
Salvar em PDF chama a impressão do navegador, e um bloco `@media print` no
`style.css` troca o tema escuro por um claro, tira sombras, esconde os botões e
impede que um card quebre no meio da folha. Um arquivo só, sem manter duas
versões.

## Estrutura

| Arquivo | O quê |
|---|---|
| `index.html` | Todo o conteúdo: contato, experiência, projetos, formação |
| `style.css` | Tema escuro, layout em duas colunas e as regras de impressão |
| `script.js` | Só o botão de imprimir |
| `perfil.jpg` | Foto |

## Rodando

Não precisa instalar nada: abra o `index.html` no navegador. Para ver com
servidor, o que evita surpresas com caminho relativo:

```bash
python -m http.server 8000
```

## Identidade visual

Mesma paleta do meu [perfil no GitHub](https://github.com/devaqn) e do
[portfólio](https://portfoliodevaqn.netlify.app), de propósito: gradiente escuro
de `#0f0c29` a `#302b63`, acento violeta `#a78bfa`, e as fontes Space Grotesk e
JetBrains Mono.

## Licença

MIT
