# Back-End para Aplicativo de CRUD de Produtos

Aluno: Gabriela Santana Maia

Este repositório contém o código do back-end para o aplicativo de CRUD de Produtos de Estoque.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (via Mongoose)
- CORS

## Configuração

1. Crie um arquivo `.env` na raiz do projeto com a URL do MongoDB:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor estará disponível em `http://localhost:3030`.

## Endpoints Principais

- **GET /**: Testa a conexão com o servidor (responde com "hello world.").
- **CRUD de Produtos**:

| Método | Rota            | Descrição                      |
|--------|-----------------|--------------------------------|
| POST   | /produtos       | Cadastra um novo produto       |
| GET    | /produtos       | Lista todos os produtos        |
| GET    | /produtos/:id   | Visualiza um produto pelo ID   |
| PUT    | /produtos/:id   | Atualiza um produto pelo ID    |
| DELETE | /produtos/:id   | Remove um produto pelo ID      |

## Middleware Configurado

- **CORS**: Permite acesso de qualquer origem.
- **express.json()**: Configurado para aceitar payloads JSON de até 50MB.

## Estrutura Principal

Abaixo está a organização das pastas e arquivos do projeto:

- **config**: Configurações gerais, como a conexão com o banco de dados (`database.js`).
- **controller**: Controladores responsáveis pela lógica de negócio, como o arquivo `ProdutoController.js`.
- **models**: Definição dos modelos do banco de dados, incluindo o modelo `Produto.js`.
- **routes**: Gerenciamento das rotas da API, como `produtoRoutes.js`.
- **service**: Contém a lógica adicional que apoia os controladores, como `ProdutoService.js`.
- **index.js**: Arquivo principal que inicializa o servidor e configura as rotas e middlewares.

