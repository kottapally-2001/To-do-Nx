// Elements..
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const todoInput = document.getElementById('todoInput');
const todoContainer = document.getElementById('todoContainer');

// Task..
function addTodo() {
  const text = (todoInput.value || '').trim();
  if (!text) {
    todoInput.animate([{ borderColor: 'red' }, { borderColor: '#ff0040' }], { duration: 300 });
    todoInput.focus();
    return;
  }

  // Card..
  const card = document.createElement('div');
  card.className = 'todo-card';

  // Title..
  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = text;

  // Actions..
  const actions = document.createElement('div');
  actions.className = 'card-actions';

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.addEventListener('click', () => {
    card.classList.toggle('done');
    doneBtn.textContent = card.classList.contains('done') ? 'Undo' : 'Done';
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', () => card.remove());

  actions.appendChild(doneBtn);
  actions.appendChild(delBtn);

  card.appendChild(title);
  card.appendChild(actions);

  todoContainer.prepend(card);

  todoInput.value = '';
  todoInput.focus();

  card.animate(
    [{ transform: 'scale(.8)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }],
    { duration: 220, easing: 'ease-out' }
  );
}

// Events..
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo();
});
clearBtn.addEventListener('click', () => {
  todoContainer.innerHTML = '';
  todoInput.focus();
});
