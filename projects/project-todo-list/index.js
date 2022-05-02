const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function newTodo() {
  console.log(todoList);
  const listItem = document.createElement("li");
  listItem.classList.add("todo-item");
  listItem.innerText = todoInput.value;
  todoList.appendChild(listItem);
}
