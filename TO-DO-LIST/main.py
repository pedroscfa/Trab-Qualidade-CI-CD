#!/usr/bin/env python3
"""CRUD simples de tarefas: título, descrição e data."""

from datetime import datetime
from typing import Dict, List, Optional


class Tarefa:
    def __init__(self, id_: int, titulo: str, descricao: str, data: str):
        self.id = id_
        self.titulo = titulo.strip()
        self.descricao = descricao.strip()
        self.data = data.strip()

    def __repr__(self):
        return (
            f"Tarefa(id={self.id}, titulo={self.titulo!r}, descricao={self.descricao!r}, data={self.data!r})"
        )

    def exibir(self):
        return (
            f"ID: {self.id}\n"
            f"Título: {self.titulo}\n"
            f"Descrição: {self.descricao}\n"
            f"Data: {self.data}\n"
            "------------------------------"
        )


def validar_data(data_texto: str) -> bool:
    try:
        datetime.strptime(data_texto.strip(), "%Y-%m-%d")
        return True
    except ValueError:
        return False


def entrada_data(prompt_text: str) -> str:
    while True:
        valor = input(prompt_text).strip()
        if not valor:
            print("Data não pode ficar em branco. Use o formato YYYY-MM-DD.")
            continue
        if not validar_data(valor):
            print("Formato inválido. Use YYYY-MM-DD.")
            continue
        return valor


def criar_tarefa(tarefas: Dict[int, Tarefa], next_id: int) -> int:
    # Correção: Valida se o título não está vazio ou apenas com espaços
    titulo = input("Título: ").strip()
    if not titulo:
        print("Erro: O título da tarefa não pode ser vazio.")
        return next_id  # Retorna o mesmo ID sem criar a tarefa

    descricao = input("Descrição: ").strip()
    data = entrada_data("Data (YYYY-MM-DD): ")
    
    tarefa = Tarefa(next_id, titulo, descricao, data)
    tarefas[next_id] = tarefa
    
    print(f"Tarefa criada com sucesso! ID: {next_id}")
    return next_id + 1


def listar_tarefas(tarefas: Dict[int, Tarefa]) -> None:
    if not tarefas:
        print("Nenhuma tarefa cadastrada.")
        return
    print("\n=== Lista de Tarefas ===")
    for tarefa in tarefas.values():
        print(tarefa.exibir())


def obter_id_existente(tarefas: Dict[int, Tarefa]) -> Optional[int]:
    if not tarefas:
        print("Nenhuma tarefa para selecionar.")
        return None
    try:
        id_texto = input("Informe o ID da tarefa: ").strip()
        if not id_texto:
            return None
        id_tarefa = int(id_texto)
