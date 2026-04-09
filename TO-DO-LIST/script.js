const listaDiv = document.getElementById('lista');
const criarBtn = document.getElementById('criar');
const emailInput = document.getElementById('email');
const msg = document.getElementById('msg');

let tarefas = [];
let nextId = 1;

// Validação de email
emailInput.addEventListener('input', () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(emailInput.value)) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    msg.textContent = 'Email válido';
    msg.style.color = 'green';
  } else {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
    msg.textContent = 'Email inválido';
    msg.style.color = 'red';
  }
});

// Função para exibir tarefas
function mostrarTarefas() {
  listaDiv.innerHTML = '';
  tarefas.forEach(t => {
    const div = document.createElement('div');
    div.className = 'tarefa';
    div.innerHTML = `
      <strong>ID:</strong> ${t.id}<br>
      <strong>Título:</strong> ${t.titulo}<br>
      <strong>Descrição:</strong> ${t.descricao}<br>
      <strong>Data:</strong> ${t.data}<br>
      <strong>Email:</strong> ${t.email}<br>
    `;
    listaDiv.appendChild(div);
  });
}

// Criar tarefa
criarBtn.addEventListener('click', () => {
  const titulo = document.getElementById('titulo').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const data = document.getElementById('data').value;
  const email = emailInput.value.trim();

  if (!titulo || !descricao || !data || !email) {
    alert('Preencha todos os campos!');
    return;
  }

  // Verifica se email é válido
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    alert('Email inválido!');
    return;
  }

  tarefas.push({ id: nextId++, titulo, descricao, data, email });
  mostrarTarefas();

  // Limpa campos
  document.getElementById('titulo').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('data').value = '';
  emailInput.value = '';
  emailInput.classList.remove('valid', 'invalid');
  msg.textContent = '';
});