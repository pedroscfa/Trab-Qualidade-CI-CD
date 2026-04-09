import {
  validarNome,
  validarEmailInstitucional,
  validarInscricao,
  validarCurso,
  validarPeriodo
} from "./validacoes.js";

import { salvarNoLocalStorage } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-inscricao");

  const campos = {
    nome: document.getElementById("nome"),
    inscricao: document.getElementById("inscricao"),
    email: document.getElementById("email"),
    curso: document.getElementById("curso"),
    periodo: document.getElementById("periodo")
  };

  /**
   * Função genérica para exibir erro
   */
  function setErro(campo, mensagem) {
    const erroSpan = document.getElementById(`erro-${campo.id}`);
    erroSpan.innerText = mensagem;

    campo.classList.add("input-invalido");
    campo.classList.remove("input-valido");
  }

  /**
   * Remove erro
   */
  function limparErro(campo) {
    const erroSpan = document.getElementById(`erro-${campo.id}`);
    erroSpan.innerText = "";

    campo.classList.remove("input-invalido");
    campo.classList.add("input-valido");
  }

  /**
   * Validação individual de campos
   */
  function validarCampo(campo) {
    const valor = campo.value;

    switch (campo.id) {
      case "nome":
        if (!validarNome(valor)) {
          setErro(campo, "Informe nome completo.");
          return false;
        }
        break;

      case "inscricao":
        if (!validarInscricao(valor)) {
          setErro(campo, "Apenas números são permitidos.");
          return false;
        }
        break;

      case "email":
        if (!validarEmailInstitucional(valor)) {
          setErro(campo, "Use um email institucional (@uemg.br).");
          return false;
        }
        break;

      case "curso":
        if (!validarCurso(valor)) {
          setErro(campo, "Informe o curso.");
          return false;
        }
        break;

      case "periodo":
        if (!validarPeriodo(valor)) {
          setErro(campo, "Período deve ser entre 1 e 10.");
          return false;
        }
        break;
    }

    limparErro(campo);
    return true;
  }

  /**
   * Validação em tempo real
   */
  Object.values(campos).forEach((campo) => {
    campo.addEventListener( "blur", () => validarCampo(campo));
  });

  /**
   * Submissão do formulário
   */
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let valido = true;

    Object.values(campos).forEach((campo) => {
      if (!validarCampo(campo)) {
        valido = false;
      }
    });

    if (valido) {
      const dados = {
        nome: campos.nome.value,
        inscricao: campos.inscricao.value,
        email: campos.email.value,
        curso: campos.curso.value,
        periodo: campos.periodo.value
      };

      salvarNoLocalStorage("inscritos", dados);

      alert("Inscrição realizada com sucesso!");
      form.reset();

      // limpa estilos após reset
      Object.values(campos).forEach(c => {
        c.classList.remove("input-valido");
      });

    } else {
      alert("Corrija os erros antes de enviar.");
    }
  });
});