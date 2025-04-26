let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

// Load todos from localStorage
let todoList = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

function getToDo(value, index) {
  let todo = document.createElement("div");
  let textEl = document.createElement("span");
  textEl.innerHTML = value;

  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times;";
  closeEl.classList.add("delete");

  closeEl.addEventListener("click", () => {
    todoList.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
  });

  todo.appendChild(textEl);
  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value.trim();
  if (!value) return;
  todoList.push(value);
  saveToLocalStorage();
  renderTodos();
  input.value = "";
});

function renderTodos() {
  todos.innerHTML = "";
  todoList.forEach((item, index) => {
    todos.appendChild(getToDo(item, index));
  });
}
