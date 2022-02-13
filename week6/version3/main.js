// import statements
import ToDoItem from './Todos.js';
import * as utilities from './utilities.js';
import * as lsHelper from './ls.js';

console.log('new main loaded.')

const items = [];
// CHECK LS HERE?

const input = document.getElementById('item-input'); 
input.addEventListener('keyup', (e) => {
    if(e.key == 'enter') {
        e.preventDefault();
        addButton.click();
    }
})

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', (e) => {
    
    let item = new ToDoItem(input.value);
    items.push(item);
    console.log(items);
    
    
    lsHelper.writeToLS('items', items);
    utilities.displayList('items-list');
    input.value = '';
})




