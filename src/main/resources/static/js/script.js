'use strict';

const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');

function createNewCheckBox(checked) {
  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.checked = checked;
  if (checked) {
    newCheckBox.addEventListener("click", e => clickDoneList(e));
  } else {
    newCheckBox.addEventListener("click", e => clickTodoList(e));
  }
  return newCheckBox;
}

function submit() {
  const taskInput = document.getElementById("taskInput");
  if(!taskInput.value) {
    return;
  }
  const newTask = document.createElement('li');
  newTask.appendChild(createNewCheckBox(false));
  const newSpan = document.createElement('span');
  newSpan.textContent = taskInput.value;
  newTask.appendChild(newSpan);
  todoList.appendChild(newTask);
  taskInput.value = "";
}

function clickTodoList(e) {
  const node = e.target.parentElement;
  const newTask = document.createElement('li');
  newTask.appendChild(createNewCheckBox(true));
  const newSpan = document.createElement('span');
  newSpan.textContent = node.textContent;
  newTask.appendChild(newSpan);
  doneList.appendChild(newTask);
  node.remove();
}

function clickDoneList(e) {
  const node = e.target.parentElement;
  const newTask = document.createElement('li');
  newTask.appendChild(createNewCheckBox(false));
  const newSpan = document.createElement('span');
  newSpan.textContent = node.textContent;
  newTask.appendChild(newSpan);
  todoList.appendChild(newTask);
  node.remove();
}