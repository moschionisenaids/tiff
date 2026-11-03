# Tiff

Aplicativo mobile em React Native com Expo para gerenciamento de usuários e cadastro de produtos de limpeza, com fluxo de autenticação e formulário de cadastro de itens de estoque.

## Visão geral

Este projeto foi desenvolvido para facilitar o controle de produtos de limpeza, permitindo:

- cadastro de usuários;
- login do usuário;
- cadastro de produtos com categoria, fornecedor, validade e descrição;
- validação de campos e mensagens de erro do backend; e
- navegação entre telas do app.

## Stack

- React Native
- Expo
- React Navigation
- Axios
- Async Storage

## Estrutura do projeto

```bash
.
├── App.js
├── app.json
├── index.js
├── package.json
├── assets/
├── pages/
│   ├── splash.js
│   ├── login.js
│   ├── cadastro.js
│   └── cadastroproduto.js
└── README.md
```

## Funcionalidades

- Tela de splash inicial;
- Login com email e senha;
- Cadastro de usuário com nome, email, senha, CPF e data de nascimento;
- Cadastro de produto com nome, código, estoque, categoria, fornecedor, validade e descrição;
- Validação de campos obrigatórios;
- Alertas para sucesso, erro de validação e falha de conexão com a API.

## Requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Node.js
- npm
- Expo Go no celular, ou um emulador Android/iOS configurado

## Instalação

```bash
git clone https://github.com/moschionisenaids/tiff.git
cd tiff
npm install
```

## Como executar

### Emulador ou dispositivo físico

```bash
npm start
```

Depois, escolha uma opção:

- pressionando `a` para abrir no emulador Android;
- pressionando `i` para abrir no simulador iOS;
- escaneando o QR Code com o app Expo Go no celular.

### Executar diretamente no Android

```bash
npm run android
```

## Observações sobre a API

O app comunica com uma API Laravel em `http://10.0.2.2:8000`. Esse endereço é necessário para emuladores Android, pois representa o localhost do ambiente host da máquina.

Endpoints usados no app:

- `POST /api/login`
- `POST /api/cadastro_usuario`
- `POST /api/cadastro_produto`

## Como contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção.
3. Faça suas alterações.
4. Realize o commit.
5. Abra um pull request.

## Licença

Este projeto está disponível para uso educacional e de desenvolvimento local.

