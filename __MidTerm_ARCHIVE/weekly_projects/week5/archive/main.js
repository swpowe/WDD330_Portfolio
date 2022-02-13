import { displayItems } from "./displayItems.js"

document.getElementById('add-button').addEventListener('click', addItem);

let array = [];

displayItems(array); // this should be in a setup or start

function addItem() {
  let newItem = document.getElementById('item-input');  
  array.push(newItem.value);
  displayItems(array);
  newItem.value = ""; //clear input 
}

export function removeItem(index, items) {
    items.splice(index, 1);
    document.getElementById("items-section").innerHTML = ""; //?? put in display function?
    displayItems(items);
  }