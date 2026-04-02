// validacoes.js

/**
 * Valida se o nome possui pelo menos duas palavras.
 * Regra: nome completo deve conter nome e sobrenome.
 * 
 * @param {string} nome
 * @returns {boolean}
 */
export function validarNome(nome) {
  if (!nome) return false;

  // Remove espaços extras e separa por espaço
  const partes = nome.trim().split(" ");

  return partes.length >= 2;
}

/**
 * Valida se o e-mail é institucional da UEMG.
 * Regra: deve terminar com @uemg.br
 * 
 * @param {string} email
 * @returns {boolean}
 */
export function validarEmailInstitucional(email) {
  if (!email) return false;

  // Expressão regular para validar e-mail institucional
  const regex = /^[a-zA-Z0-9._%+-]+@uemg\.br$/;

  return regex.test(email);
}

/**
 * Valida o número de inscrição (somente números).
 * 
 * @param {string} inscricao
 * @returns {boolean}
 */
export function validarInscricao(inscricao) {
  if (!inscricao) return false;

  // Apenas números (0-9)
  const regex = /^[0-9]+$/;

  return regex.test(inscricao);
}

/**
 * Valida se o curso foi preenchido.
 * 
 * @param {string} curso
 * @returns {boolean}
 */
export function validarCurso(curso) {
  return curso && curso.trim().length > 0;
}

/**
 * Valida o período (entre 1 e 10).
 * 
 * @param {string|number} periodo
 * @returns {boolean}
 */
export function validarPeriodo(periodo) {
  const numero = Number(periodo);

  return Number.isInteger(numero) && numero >= 1 && numero <= 10;
}

/**
 * Verifica se todos os campos obrigatórios foram preenchidos.
 * 
 * @param {object} dados
 * @returns {boolean}
 */
export function validarCamposObrigatorios(dados) {
  return (
    dados.nome &&
    dados.inscricao &&
    dados.email &&
    dados.curso &&
    dados.periodo
  );
}

/**
 * Função principal de validação do formulário.
 * Centraliza todas as regras de negócio.
 * 
 * @param {object} dados
 * @returns {boolean}
 */
 
export function validarFormulario(dados) {
  return (
    validarCamposObrigatorios(dados) &&
    validarNome(dados.nome) &&
    validarEmailInstitucional(dados.email) &&
    validarInscricao(dados.inscricao) &&
    validarCurso(dados.curso) &&
    validarPeriodo(dados.periodo)
  );
}