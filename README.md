# Portfólio — Reimberg

Site de portfólio em HTML, CSS e JavaScript puro — sem frameworks, sem build, pronto pra publicar no GitHub Pages.

## Como rodar localmente
Abra `index.html` com a extensão Live Server do VS Code, ou simplesmente abra o arquivo direto no navegador.

## O que você PRECISA trocar antes de publicar

### 1. Identidade
- `index.html` linha ~14: troque "Reimberg" pelo seu nome, se esse não for exatamente o nome que você usa profissionalmente.
- Título da aba (`<title>`) e meta descrição no `<head>`.

### 2. Seção "Sobre mim" (`#sobre`)
- Substitua o texto entre colchetes `[Escreva aqui...]` pela sua trajetória real.
- Troque o `.photo-placeholder` por uma foto sua (adicione a imagem em `assets/` e substitua o bloco pelo `<img>`).

### 3. Projeto OrgFinance
- Já está com conteúdo real e completo. Só troque o link "Ver case no Behance" (`href="#"`) pelo link de verdade do seu case publicado.
- O link "Testar protótipo" já aponta pro seu GitHub Pages real.

### 4. Projeto iFood — Peso & Volume
- Troque o bloco `.mockup-ifood` por um print real do seu redesign (veja comentário no HTML).
- Substitua o parágrafo de descrição e os números em `.project-facts` pelos dados reais do seu case.
- Adicione o link do Behance.

### 5. Projeto Mariana — Psicóloga
- Troque o bloco `.mockup-mariana` pela sua identidade visual real (logo, paleta aplicada).
- Substitua o parágrafo de descrição.
- Adicione o link do Behance.

### 6. Contato
- Troque `seuemail@email.com` (aparece 2x: no `href="mailto:"` e no texto do botão) pelo seu e-mail real.
- Troque os `href="#"` de LinkedIn e Behance pelos seus links reais.
- O link do GitHub já está correto (`github.com/reimbergUxFront`).

### 7. Currículo
- O botão "Baixar currículo" aponta pra `#contato` por enquanto (rola a página). Se quiser que baixe um PDF de verdade, troque o `href="#contato"` desse botão (dentro de `.hero-actions`) por `href="assets/curriculo.pdf"` e coloque o arquivo em `assets/`.

## Estrutura de pastas
```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/        (crie e coloque suas imagens/PDF aqui)
```

## Notas técnicas
- O efeito de "aparecer suavemente" ao rolar (`reveal`) foi construído pra nunca deixar o conteúdo invisível: se o JavaScript falhar por qualquer motivo, tudo continua visível normalmente — só perde a animação, não o conteúdo.
- Sem dependências externas além da fonte (Plus Jakarta Sans, via Google Fonts).
- Menu mobile e nav com blur já funcionam a partir de telas menores que 900px.
