# 🎬 Biblioteca de Filmes

Aplicação web desenvolvida com **React** e **Vite**, que consome a [API TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api) para exibir uma biblioteca de filmes com informações detalhadas.

![MIT License](https://img.shields.io/badge/license-MIT-green)

---

## 🚀 Funcionalidades

- 🔍 Busca de filmes por título
- 📄 Página de detalhes com informações completas (sinopse, nota, lançamento, pôster, etc.)

---

## 🛠 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
  
---

## ⚙️ Como rodar o projeto localmente

### 1. Clone o repositório

```bash
https://github.com/DiegoSouza01/Atividade-05-movie-app.git
cd Atividade-05-movie-app
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Obtenha uma API Key do TMDB

Para que a aplicação funcione, você precisa de uma conta no site [TMDB](https://www.themoviedb.org/). Após criar sua conta:

1. Acesse: [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Solicite uma chave de API
3. Copie sua chave
4. Entre na pasta src
5. Abra o arquivo Api.js
6. Na terceira linha deve encontrar a const ApiKey da seguinte maneira
```
const ApiKey = 'Insira a sua chave da api aqui'
```
7. Substitua `Insira a sua chave da api aqui` pela chave real que você obteve no site.

### 5. Inicie o projeto

```bash
npm run dev
```

O app será iniciado em `http://localhost:5173` (ou outro porto indicado no terminal).

---

## 📁 Scripts disponíveis

* `npm run dev` — Inicia o servidor de desenvolvimento
* `npm run build` — Gera a build para produção
* `npm run lint` — Verifica padrões de código com ESLint

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja mais em [LICENSE](LICENSE).
