// app.js

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const task = taskInput.value;
  if (!task) {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';
  deleteButton.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}
