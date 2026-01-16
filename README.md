<div align="center">
  <h1>🐾 Get a Pet</h1>
  <p>
    <strong>Plataforma Fullstack de Adoção de Animais</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  </p>
</div>

---

## 💡 Sobre o Projeto

O **Get a Pet** é uma solução completa para conectar doadores e adotantes de animais. O sistema foi projetado para gerenciar todo o ciclo de vida da adoção, desde o cadastro do pet, upload de imagens, até o agendamento de visitas e conclusão do processo.

O foco técnico deste projeto foi a implementação sólida da arquitetura **MVC no Backend** e o gerenciamento eficiente de estado no **Frontend**, garantindo segurança via tokens JWT e performance na manipulação de dados.

## 🛠️ Tech Stack & Diferenciais

**Backend (API Restful):**

- **Node.js & Express:** Servidor performático e escalável.
- **MongoDB (Mongoose):** Modelagem de dados flexível para os perfis dos pets.
- **JWT (JSON Web Token):** Sistema de autenticação robusto com validação de sessão.
- **Multer:** Middleware para upload e armazenamento de imagens dos pets.
- **Bcrypt:** Criptografia de senhas para segurança dos usuários.

**Frontend (SPA):**

- **React.js:** Componentização e reatividade.
- **Context API:** Gerenciamento global de estado (Usuário/Auth).
- **CSS Modules:** Estilização escopada para evitar conflitos visuais.
- **Axios:** Consumo otimizado da API.

---

## 🚀 Funcionalidades Principais

### 🔐 Autenticação e Segurança

- [x] Registro e Login com hash de senha.
- [x] Validação de Token JWT em rotas protegidas.
- [x] Persistência de login (usuário não desloga ao recarregar).

### 🐶 Core da Aplicação

- [x] **CRUD de Pets:** Criação, leitura, atualização e remoção.
- [x] **Sistema de Upload:** Envio de múltiplas fotos por animal.
- [x] **Dashboard do Usuário:** Gestão de "Meus Pets" e "Minhas Adoções".
- [x] **Fluxo de Adoção:** Agendamento de visitas e finalização do ciclo.

---

## 🔌 Endpoints da API

A API segue o padrão RESTful e conta com upload de imagens e proteção via JWT.

### 👤 Usuários (`/users`)

| Método    | Endpoint     | Descrição                             | Auth | Upload      |
| --------- | ------------ | ------------------------------------- | ---- | ----------- |
| **POST**  | `/register`  | Registra um novo usuário              | ❌   | -           |
| **POST**  | `/login`     | Autentica e retorna o Token           | ❌   | -           |
| **GET**   | `/checkuser` | Verifica validade do token (Auxiliar) | ❌   | -           |
| **GET**   | `/:id`       | Busca perfil público de um usuário    | ❌   | -           |
| **PATCH** | `/edit/:id`  | Atualiza perfil do usuário            | ✅   | 📸 (Single) |

### 🐶 Pets (`/pets`)

| Método     | Endpoint        | Descrição                            | Auth | Upload     |
| ---------- | --------------- | ------------------------------------ | ---- | ---------- |
| **POST**   | `/create`       | Cadastra um novo pet                 | ✅   | 📸 (Array) |
| **GET**    | `/`             | Lista todos os pets disponíveis      | ❌   | -          |
| **GET**    | `/mypets`       | Lista pets cadastrados pelo usuário  | ✅   | -          |
| **GET**    | `/myadoptions`  | Lista pets que o usuário quer adotar | ✅   | -          |
| **GET**    | `/:id`          | Detalhes de um pet específico        | ❌   | -          |
| **DELETE** | `/:id`          | Remove um pet do sistema             | ✅   | -          |
| **PATCH**  | `/:id`          | Atualiza dados do pet                | ✅   | 📸 (Array) |
| **PATCH**  | `/schedule/:id` | Agenda uma visita para o pet         | ✅   | -          |
| **PATCH**  | `/conclude/:id` | Finaliza o ciclo de adoção           | ✅   | -          |

---

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (v14+)
- MongoDB (Local ou Atlas)

### 1. Clonar o repositório

```bash
git clone [https://github.com/DanielASantos7/get-a-pet-fullstack.git](https://github.com/DanielASantos7/get-a-pet-fullstack.git)

2. Backend (Porta 5000)
Bash

cd backend
npm install
# Configure seu arquivo .env com as variáveis PORT e DB_URL
npm start
3. Frontend (Porta 3000)
Bash

cd frontend
npm install
npm start
<p align="center"> Desenvolvido por <strong>Daniel Andrade Santos</strong> </p>
```
