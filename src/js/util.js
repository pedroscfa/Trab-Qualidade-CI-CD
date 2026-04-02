// utils.js

/**
 * Salva um registro no LocalStorage.
 * Caso já existam dados, ele adiciona ao array existente.
 * 
 * @param {string} chave
 * @param {object} valor
 */
export function salvarNoLocalStorage(chave, valor) {
  const dados = JSON.parse(localStorage.getItem(chave)) || [];

  dados.push(valor);

  localStorage.setItem(chave, JSON.stringify(dados));
}

/**
 * Recupera dados do LocalStorage.
 * 
 * @param {string} chave
 * @returns {array}
 */
export function obterDoLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave)) || [];
}