/**
 * Valida se o nome é completo (pelo menos duas palavras)
 */
export function validarNome(nome) {
  return nome.trim().split(" ").length >= 2;
}

/**
 * Valida se o e-mail é do domínio institucional da UEMG
 */
export function validarEmailInstitucional(email) {
  return email.endsWith("@aluno.uemg.br") || email.endsWith("@uemg.br");
}

/**
 * Valida se a inscrição contém apenas números
 */
export function validarInscricao(inscricao) {
  const regex = /^\d+$/;
  return regex.test(inscricao);
}

/**
 * Valida se o período está entre 1 e 10
 */
export function validarPeriodo(periodo) {
  const p = parseInt(periodo);
  return p >= 1 && p <= 10;
}

/**
 * Valida o formulário completo
 * GARANTE QUE SEMPRE RETORNA TRUE OU FALSE
 */
export function validarFormulario(dados) {
  // Verifica se todos os campos básicos existem
  if (!dados.nome || !dados.email || !dados.inscricao || !dados.periodo) {
    return false;
  }

  // Executa cada validação individual
  const nomeValido = validarNome(dados.nome);
  const emailValido = validarEmailInstitucional(dados.email);
  const inscricaoValida = validarInscricao(dados.inscricao);
  const periodoValido = validarPeriodo(dados.periodo);

  // Se qualquer uma for falsa, a função toda retorna false
  if (!nomeValido || !emailValido || !inscricaoValida || !periodoValido) {
    return false;
  }

  // Se passou por tudo, retorna true
  return true;
}
