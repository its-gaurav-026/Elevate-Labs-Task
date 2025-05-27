document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const taskItem = createTaskItem(taskText, false);
  document.getElementById('taskList').appendChild(taskItem);
  input.value = '';
}

function createTaskItem(text, isCompleted) {
  const li = document.createElement('li');
  li.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '❌';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);

  li.addEventListener('click', function(e) {
    if (e.target === deleteBtn) return;

    li.classList.toggle('completed');
    if (li.classList.contains('completed')) {
      document.getElementById('completedList').appendChild(li);
    } else {
      document.getElementById('taskList').appendChild(li);
    }
  });

  if (isCompleted) li.classList.add('completed');
  return li;
}
