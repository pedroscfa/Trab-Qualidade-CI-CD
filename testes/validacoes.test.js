// validacoes.test.js

import {
  validarNome,
  validarEmailInstitucional,
  validarInscricao,
  validarPeriodo,
  validarFormulario
} from "../src/js/validacoes.js";

/**
 * Testes da função validarNome
 */
describe("Validação de Nome", () => {
  test("Deve aceitar nome completo válido", () => {
    expect(validarNome("Pedro Silva")).toBe(true);
  });

  test("Deve rejeitar nome com uma palavra", () => {
    expect(validarNome("Pedro")).toBe(false);
  });

  test("Deve rejeitar nome vazio", () => {
    expect(validarNome("")).toBe(false);
  });
});

/**
 * Testes da validação de e-mail institucional
 */
describe("Validação de Email", () => {
  test("Deve aceitar email institucional válido", () => {
    expect(validarEmailInstitucional("aluno@uemg.br")).toBe(true);
  });

  test("Deve rejeitar email não institucional", () => {
    expect(validarEmailInstitucional("gmail@gmail.com")).toBe(false);
  });
});

/**
 * Testes da inscrição
 */
describe("Validação de Inscrição", () => {
  test("Deve aceitar apenas números", () => {
    expect(validarInscricao("12345")).toBe(true);
  });

  test("Deve rejeitar letras", () => {
    expect(validarInscricao("123abc")).toBe(false);
  });
});

/**
 * Testes de período
 */
describe("Validação de Período", () => {
  test("Deve aceitar valores entre 1 e 10", () => {
    expect(validarPeriodo(5)).toBe(true);
  });

  test("Deve rejeitar valores fora do intervalo", () => {
    expect(validarPeriodo(11)).toBe(false);
  });
});

/**
 * Teste geral do formulário
 */
describe("Validação do Formulário", () => {
  test("Deve validar formulário completo correto", () => {
    const dados = {
      nome: "Pedro Silva",
      inscricao: "12345",
      email: "aluno@uemg.br",
      curso: "Sistemas de Informação",
      periodo: 5
    };

    expect(validarFormulario(dados)).toBe(true);
  });

  test("Deve rejeitar formulário inválido", () => {
    const dados = {
      nome: "Pedro",
      inscricao: "abc",
      email: "gmail.com",
      curso: "",
      periodo: 15
    };

    expect(validarFormulario(dados)).toBe(false);
  });
});