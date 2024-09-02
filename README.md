# Tarefa CRUD

Este projeto é uma aplicação CRUD simples desenvolvida com React, TypeScript, e Zod para validação de dados. Ele utiliza o JSON Server para simular uma API RESTful.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Zod**: Biblioteca para validação e parsing de dados.
- **JSON Server**: Ferramenta para criar uma API RESTful a partir de um arquivo JSON.

## Estrutura do Projeto

- **`src/components`**: Componentes da aplicação para criar, atualizar, listar, buscar por ID e deletar usuários.
- **`src/schemas`**: Esquemas de validação de dados usando Zod.
- **`src/services/axios.ts`**: Configuração do cliente Axios para comunicação com a API.
- **`@types/index.ts`**: Tipos TypeScript para a aplicação.
- **`db.json`**: Arquivo JSON que simula a base de dados para o JSON Server.
- **`package.json`**: Configurações do projeto e scripts de execução.

## Scripts

- **`dev`**: Inicia o servidor de desenvolvimento e a aplicação com Vite.
- **`build`**: Compila o código TypeScript e cria a build para produção.
- **`server`**: Inicia o JSON Server para simular a API.
- **`lint`**: Executa o ESLint para verificar e corrigir problemas de linting.
- **`preview`**: Pré-visualiza a build de produção.

## Como Executar o Projeto

1. **Instale as dependências**:

    ```bash
    npm install
    ```

2. **Inicie o JSON Server**:

    Em um terminal separado, execute:

    ```bash
    npm run server
    ```

    Isso iniciará o JSON Server e a API estará disponível em `http://localhost:3000`.

3. **Inicie o servidor de desenvolvimento**:

    Em outro terminal, execute:

    ```bash
    npm run dev
    ```

    Isso iniciará a aplicação React em modo de desenvolvimento. A aplicação estará disponível em `http://localhost:5173` por padrão.

## Estrutura do JSON Server

O JSON Server utiliza o arquivo `db.json` para simular uma API RESTful. O conteúdo inicial do `db.json` é:

```json
{
  "users": [
    {
      "id": "52ab425e-f738-49ab-aa68-485d602b0333",
      "nome": "Alex",
      "sobrenome": "Marques",
      "idade": "19",
      "altura": "183",
      "peso": "89"
    }
  ]
}
