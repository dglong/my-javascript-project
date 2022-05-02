const todoInput = document.getElementById("todo-input");

function newTodo() {
  let todoInputValue = todoInput.value;
  console.log(todoInputValue);
  todoInput.value = "";
}
