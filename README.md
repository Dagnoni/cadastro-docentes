# Cadastro de Docentes — CRUD com React

Aplicação completa de CRUD (Create, Read, Update, Delete) para gerenciar docentes, seguindo a arquitetura de componentes do exemplo de agenda de contatos.

## Como rodar

```bash
npm install
npm start
```

## Arquitetura

- **App.jsx** — componente principal, gerencia state global e renderização condicional
- **Login.jsx** — tela de autenticação
- **Menu.jsx** — navegação com botões para trocar de tela
- **Welcome.jsx** — tela inicial após login
- **DocenteForm.jsx** — formulário único para CREATE e UPDATE
- **ListDocentes.jsx** — lista todos os docentes com botões de editar e remover

## Características

✅ **Autenticação** — tela de login antes de acessar o sistema
✅ **Navegação** — Menu com 4 telas (Início, Cadastrar, Listar, Sair)
✅ **CRUD Completo:**
  - **CREATE** — formulário cadastra novo docente
  - **READ** — lista com map() exibe todos os docentes
  - **UPDATE** — clique em "Alterar" preenche formulário e salva alterações
  - **DELETE** — botão "Remover" usa filter() para deletar

✅ **Validação:**
  - Nome: mínimo 3 caracteres
  - CPF: formato válido (000.000.000-00)
  - Email institucional: obrigatório com @
  - Email particular: opcional, se preenchido deve ter @
  - Telefone: formato (00) 00000-0000
  - Endereço, número, cidade: obrigatórios
  - CEP: formato 00000-000
  - Estado: select obrigatório com 27 opções (AC a TO)

✅ **Máscaras de entrada:**
  - CPF: 000.000.000-00
  - Telefone: (00) 00000-0000
  - CEP: 00000-000

✅ **Feedback visual:**
  - Campos inválidos ficam com `is-invalid` (Bootstrap)
  - Mensagens de erro aparecem com `invalid-feedback`
  - Rótulos ligados com `htmlFor`

✅ **Bootstrap 5** — sem estilos inline, apenas classes CSS

## Campos do Cadastro

### Dados Pessoais
- Nome Completo (mín. 3 letras)
- CPF (formato válido)
- Formação/Área de Atuação

### Contatos
- Email Institucional (obrigatório com @)
- Email Particular (opcional, com @)
- Telefone Celular (formato válido)

### Endereço
- Endereço Residencial
- Número
- Cidade
- CEP (formato válido)
- Estado (dropdown com 27 UFs)

## State Management

- `isLoggedIn` — controla exibição de Login
- `activeScreen` — controla qual tela renderizar
- `docentes` — array de docentes
- `docenteToEdit` — docente em edição (null se criando novo)
