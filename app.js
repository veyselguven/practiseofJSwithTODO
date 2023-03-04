const form = document.querySelector(".todo_form");
const input = document.querySelector(".todo_input");
const todo_container = document.querySelector(".todo_container");

const addHTML = (todo) => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoLeft = document.createElement("div");
  todoLeft.classList.add("todo_left");

  const todoCb = document.createElement("input");
  todoCb.type = "checkbox";
  todoCb.checked = todo.isCompleted;
  todoDiv.classList.add("todo_cb");

  const todoText = document.createElement("span");
  todoText.classList.add("todo_text");
  todoText.textContent = todo.text;

  todoLeft.appendChild(todoCb);
  todoLeft.appendChild(todoText);

  const todoRight = document.createElement("div");
  todoRight.classList.add("todo_right");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("todo_delete");
  deleteBtn.textContent = "Delete";

  const editBtn = document.createElement("button");
  editBtn.classList.add("todo_edit");
  editBtn.textContent = "Edit";

  todoRight.appendChild(deleteBtn);
  todoRight.appendChild(editBtn);

  todoDiv.appendChild(todoLeft);
  todoDiv.appendChild(todoRight);

  todo_container.appendChild(todoDiv);
};
const startConf = () => {
  // starting setting
  const todos = JSON.parse(localStorage.getItem("todos"));

  if (!todos) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    todos.forEach((todo) => {
      addHTML(todo);
    });
  }
};

startConf();

const addTodo = (e) => {
  e.preventDefault();
  //console.log("Hersey yolunda mi");
  inputVal = input.value;

  const todo = {
    text: inputVal,
    isCompleted: false,
  };

  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  //console.log(todos);
  addHTML(todo);
  form.reset();
};

form.addEventListener("submit", addTodo);
