// import statements
import ToDoItem from './Todos.js';
import * as utilities from './utilities.js';
import * as lsHelper from './ls.js';

console.log('new main loaded.')

const items = [];

const addButton = document.getElementById('add-button');

addButton.addEventListener('click', (e) => {
    let input = document.getElementById('item-input');
    let item = new ToDoItem(input.value);
    items.push(item);
    console.log(items);
    utilities.displayList(items, 'items-list');
    input.value = '';
    lsHelper.writeToLS('items', items);
})




