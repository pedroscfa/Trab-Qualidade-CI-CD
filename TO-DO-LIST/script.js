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

// ✅ Função corrigida para evitar XSS (Uso de textContent)
function mostrarTarefas() {
  listaDiv.innerHTML = ''; // Limpa a lista
  
  tarefas.forEach(t => {
    const div = document.createElement('div');
    div.className = 'tarefa';
    
    // 1. Criamos a estrutura fixa (Placeholders)
    div.innerHTML = `
      <strong>ID:</strong> <span class="t-id"></span><br>
      <strong>Título:</strong> <span class="t-titulo"></span><br>
      <strong>Descrição:</strong> <span class="t-descricao"></span><br>
      <strong>Data:</strong> <span class="t-data"></span><br>
      <strong>Email:</strong> <span class="t-email"></span><br>
      <hr>
    `;

    // 2. Inserimos os dados usando textContent (Trata tudo como texto puro, nunca como código)
    div.querySelector('.t-id').textContent = t.id;
    div.querySelector('.t-titulo').textContent = t.titulo;
    div.querySelector('.t-descricao').textContent = t.descricao;
    div.querySelector('.t-data').textContent = t.data;
    div.querySelector('.t-email').textContent = t.email;

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
