# Pebolso

Pebolso é um gerenciador financeiro pessoal construído com NestJS, Prisma e MySQL. Este projeto fornece uma API robusta para gerenciar usuários, contas, transações e categorias, além de implementar autenticação JWT.

## Sumário

- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/pebolso.git
    cd pebolso
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto com as chaves usadas no projeto, como o exemplo abaixo:
    ```env
    BACKEND_PORT=3000
    DATABASE_URL="mysql://username:password@localhost:port/database"
    JWT_SECRET="example_jwt_secret"
    JWT_EXPIRES_IN="7d"
    ```

2. Configure o banco de dados MySQL conforme necessário e certifique-se de que as credenciais no `.env` estão corretas.

## Uso

1. Execute as migrações do Prisma para criar as tabelas no banco de dados:
    ```bash
    npx prisma migrate dev
    ```

2. Inicie o servidor de desenvolvimento:
    ```bash
    npm run start:dev
    ```

    O servidor estará disponível em `http://localhost:BACKEND_PORT`.

## Contribuição

1. Fork este repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Minha nova feature'`
4. Envie para a branch original: `git push origin minha-feature`
5. Crie um Pull Request.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.