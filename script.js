const form = document.getElementById('add-task-form');
const input = document.getElementById('new-task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value.trim()) {
    return;
  }
  const newTask = document.createElement('li');
  newTask.innerHTML = `
    <input type="checkbox">
    <label>${input.value.trim()}</label>
    <button>Delete</button>
  `;
  list.appendChild(newTask);
  input.value = '';
  newTask.querySelector('button').addEventListener('click', () => {
    list.removeChild(newTask);
  });
});