# Trab-Qualidade-CI-CD
# 🎟️ Sistema de Cadastro de Usuários para Evento - UEMG

## 📌 Descrição do Projeto

Este projeto consiste no desenvolvimento de uma aplicação web estática para cadastro de participantes em um evento da UEMG. A aplicação permite que usuários realizem seu cadastro por meio de um formulário interativo, com validação de dados e armazenamento local.

O sistema foi desenvolvido com foco na aplicação de práticas modernas de **Qualidade de Software**, incluindo testes automatizados, integração contínua (CI) e revisão de código automatizada.

---

## 🎯 Objetivo

Aplicar, na prática, conceitos fundamentais de Engenharia de Software e Qualidade de Software, tais como:

- Testes unitários
- Integração contínua (CI/CD)
- Revisão de código automatizada
- Boas práticas de versionamento com Git e GitHub

---

## 🏗️ Tipo de Aplicação

Este projeto segue a abordagem de:

> ✅ **Aplicação totalmente frontend (estática)**

### ✔ Justificativa da escolha

A escolha por uma aplicação frontend estática foi motivada pelos seguintes fatores:

- Facilidade de deploy utilizando GitHub Pages
- Foco maior na qualidade do código e nos testes automatizados
- Redução da complexidade (não há backend)
- Adequação ao escopo da atividade proposta

---

## ⚙️ Funcionalidades

- Cadastro de usuários com:
  - Nome completo
  - E-mail
  - Telefone
  - Curso/Instituição (opcional)
- Validação de campos obrigatórios
- Validação de formato de e-mail
- Feedback visual para o usuário
- Armazenamento local dos dados (LocalStorage)

---

## 🧪 Testes Automatizados

Os testes unitários foram implementados para garantir a qualidade das principais regras de negócio da aplicação.

### 🔍 O que é testado:

- Validação de campos obrigatórios
- Validação de e-mail
- Formatação de dados
- Funções de manipulação de usuários
- Persistência no LocalStorage (mockada)

### 🛠️ Ferramentas utilizadas:

- Jest (ou Vitest)

### ▶️ Como executar os testes:

```bash
npm install
npm run test
