function addTask() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      const btn = document.createElement("button");
      btn.textContent = "X";
      btn.onclick = () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      };

      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value === "") return;

    tasks.push(input.value);
    saveTasks();
    renderTasks();

    input.value = "";
  }

  renderTasks();
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = () => {
    li.style.textDecoration = "line-through";
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
