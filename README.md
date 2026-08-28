# Jovi — Camera Experience (Landing Page em React + Tailwind CSS)

Projeto desenvolvido para o **Challenge FIAP x JOVI 2026**, cujo objetivo é
repensar a experiência da câmera dos smartphones JOVI a partir de soluções
baseadas em Inteligência Artificial, tornando-a mais intuitiva, funcional e
contextual para o público de estudantes *full-time*.

## Integrantes

| Nome completo | RM |
| --- | --- |
| Beatriz dos Santos Silva | 573698 |
| Lorenzo Mendes Pena | 570036 |
| Maria Clara Ramos Santini | 573246 |
| Murillo Perez da Fonseca | 573674 |
| Raíssa Demczuk Capasso | 572166 |

## Tecnologias utilizadas

- **React** — componentização da interface (estrutura pai → filho, um
  componente por seção da página).
- **Vite** — bundler e servidor de desenvolvimento.
- **Tailwind CSS** — estilização utilitária de todo o projeto.

## Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
# 1. Extraia o .zip do projeto (ou clone o repositório) e entre na pasta
cd colosys-web

# 2. Instale as dependências
npm install
```

## Como executar o projeto

```bash
npm run dev
```

O terminal exibirá o endereço local do servidor de desenvolvimento
(normalmente `http://localhost:5173`). Basta abrir esse endereço no navegador.

Outros scripts disponíveis:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # serve a build de produção localmente, para conferência
```

## Onde e como foi utilizada IA no projeto

A Inteligência Artificial (assistente Claude, da Anthropic) foi utilizada nas
seguintes etapas do desenvolvimento:

- **Migração do CSS para Tailwind**: o arquivo `stylePrincipal.css` original
  foi convertido em classes utilitárias do Tailwind, com a configuração presente em `src/index.css`. 
  Estilizações posteriores foram feitas sem o auxílio de IA.
- **Geração da documentação**: este `README.md` foi redigido com apoio de IA

## Link do Deploy na Vercel

[https://SEU-PROJETO.vercel.app](https://seu-projeto.vercel.app) — *(substitua
pelo link real após publicar o projeto na Vercel)*

## Link do repositório Github

[https://github.com/MurilloFonseca/colosys-web](https://github.com/MurilloFonseca/colosys-web)
