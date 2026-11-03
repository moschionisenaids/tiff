# 📱 Controle de Estoque de Limpeza - App Mobile

Aplicativo mobile desenvolvido em **React Native** para o gerenciamento e controle do estoque de produtos de limpeza, focado em oferecer uma interface rápida, simples e intuitiva para uso no dia a dia.

---

## 🎯 Objetivo

Permitir que as colaboradoras da limpeza e responsáveis pelo setor consultem, cadastrem, editem e acompanhem a quantidade de materiais disponíveis no estoque diretamente pelo smartphone.

---

## 🚀 Tecnologias Utilizadas

* **React Native** (com Expo)
* **JavaScript / TypeScript**
* **Axios** (para comunicação e integração com a API Laravel)
* **React Navigation** (para gerenciamento das telas da aplicação)

---

## ⚙️ Funcionalidades do App

* 🔐 **Autenticação:** Tela de login e cadastro de usuários.
* 📦 **Consulta de Estoque:** Listagem em tempo real de todos os produtos cadastrados.
* ➕ **Cadastro de Produtos:** Formulário para inserção de novos materiais com nome, código, quantidade, categoria, fornecedor, validade e descrição.
* ✏️ **Atualização e Edição:** Edição simples e rápida das informações de qualquer item do estoque.
* 🗑️ **Exclusão de Produtos:** Remoção de produtos quando necessário.
* ⚠️ **Alerta de Estoque:** Identificação visual de itens com baixa quantidade ou próximos da data de vencimento.

---

## 🔧 Como Executar o Projeto Mobile

### Pré-requisitos
* **Node.js** instalado na máquina.
* Aplicativo **Expo Go** instalado no celular (Android ou iOS) ou um emulador configurado.

### Passos para Instalação:

```bash
# 1. Clonar o repositório
git clone [https://github.com/usuario/controle-estoque-limpeza.git](https://github.com/usuario/controle-estoque-limpeza.git)

# 2. Acessar a pasta do aplicativo mobile
cd controle-estoque-limpeza/mobile

# 3. Instalar as dependências do projeto
npm install

# 4. Iniciar o servidor do Expo
npx expo start
