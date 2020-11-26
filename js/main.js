"use strict";

let addButton = document.querySelector('.add-button');
let todoList = document.querySelector('.todo-list');
let inputValue = document.querySelector('.item-value__input');

addButton.addEventListener('click', addListItem);

// Добавить дело
function addListItem() {
    let li = document.createElement('li');
    li.innerHTML = inputValue.value;

    todoList.prepend(li);
    inputValue.value = '';
}