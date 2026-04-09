import unittest
from unittest.mock import patch
from main import validar_data, criar_tarefa, deletar_tarefa, Tarefa

# ----------------------------
# Testes para validar_data
# ----------------------------
class TestValidarData(unittest.TestCase):

    def test_data_valida(self):
        self.assertTrue(validar_data("2024-01-01"))

    def test_data_invalida_formato(self):
        self.assertFalse(validar_data("01-01-2024"))

    def test_data_vazia(self):
        self.assertFalse(validar_data(""))

    def test_data_invalida_valor(self):
        self.assertFalse(validar_data("2024-13-01"))

# ----------------------------
# Testes para criar_tarefa
# ----------------------------
class TestCriarTarefa(unittest.TestCase):

    @patch("builtins.input", side_effect=["Minha tarefa", "Descrição da tarefa", "2024-03-17"])
    def test_criar_tarefa_sucesso(self, mock_input):
        tarefas = {}
        next_id = 1
        next_id = criar_tarefa(tarefas, next_id)
        self.assertEqual(len(tarefas), 1)
        tarefa = tarefas[1]
        self.assertEqual(tarefa.titulo, "Minha tarefa")
        self.assertEqual(tarefa.descricao, "Descrição da tarefa")
        self.assertEqual(tarefa.data, "2024-03-17")
        self.assertEqual(next_id, 2)

    @patch("builtins.input", side_effect=["   ", "Descrição", "2024-03-17"])
    def test_criar_tarefa_titulo_vazio(self, mock_input):
        tarefas = {}
        next_id = 1
        next_id = criar_tarefa(tarefas, next_id)
        tarefa = tarefas[1]
        self.assertEqual(tarefa.titulo, "")  # título limpo

# ----------------------------
# Testes para deletar_tarefa
# ----------------------------
class TestDeletarTarefa(unittest.TestCase):

    @patch("builtins.input", side_effect=["1", "s"])
    def test_deletar_tarefa_sucesso(self, mock_input):
        # Criar uma tarefa para depois deletar
        tarefas = {1: Tarefa(1, "Tarefa teste", "Descrição", "2024-03-17")}
        deletar_tarefa(tarefas)
        self.assertEqual(len(tarefas), 0)  # deve ter sido removida

    @patch("builtins.input", side_effect=["999"])
    def test_deletar_id_inexistente(self, mock_input):
        tarefas = {1: Tarefa(1, "Tarefa teste", "Descrição", "2024-03-17")}
        deletar_tarefa(tarefas)
        self.assertEqual(len(tarefas), 1)  # não remove nada

    @patch("builtins.input", side_effect=["1", "n"])
    def test_deletar_cancelado(self, mock_input):
        tarefas = {1: Tarefa(1, "Tarefa teste", "Descrição", "2024-03-17")}
        deletar_tarefa(tarefas)
        self.assertEqual(len(tarefas), 1)  # não remove, usuário cancelou

if __name__ == "__main__":
    unittest.main()