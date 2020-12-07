'use strict';

const inputForValueItem = document.querySelector('.item__input'),
      buttonForAddItem = document.querySelector('.item__add'),
      list = document.querySelector('.list');

let listArr = [];

if (localStorage.getItem('todo')) {
  listArr = JSON.parse(localStorage.getItem('todo'));
  displayListItem();
}

// Добавить дело
buttonForAddItem.addEventListener('click', () => {
  if (!inputForValueItem.value) {
    return;
  }

  let newTodo = {
    itemName: inputForValueItem.value,
    checked: false,
  };

  listArr.push(newTodo);
  inputForValueItem.value = ''; 
  displayListItem();
  
  localStorage.setItem('todo', JSON.stringify(listArr));
});



// Вывести дела на экран
function displayListItem() {
  let displayItem = '';

  listArr.forEach((item, i) => {
    displayItem += `
    <li class="list__item">
      <input class="list__checkbox" type="checkbox" id="item_${i}" ${item.checked ? "checked": ""}>
      <label for="item_${i}">${item.itemName}</label>
    </li>
    `;
    
    list.innerHTML = displayItem;
  });
}

// 
list.addEventListener('change', function(event) {
  let idCheckBox = event.target.getAttribute('id');
  let valueLabel = list.querySelector('[for=' + idCheckBox +']').innerHTML;
  
  listArr.forEach(function(item) {
    if (item.itemName === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(listArr));
    } 
  });

  let input = event.target;
  input.classList.add('item__done');
});
