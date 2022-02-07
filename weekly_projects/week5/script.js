import {displayItems} from './displayItems.js'
import {Item} from './item_class.js'

console.log("script loaded");

const logging = true;


/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

// function checkLocalStorage() {
//   if(localStorage.getItem('items')== null) {
//     if(logging) console.log('info: created localStorage object.');
//     localStorage.setItem('items', JSON.stringify({}));
//   }
// }

export function addItemfefe() {
  alert('hello')
  // let item = new Item('Test Item 1', false);
  // let array = getLocalStorage();

  // if(array === 1) {
  //   localStorage.setItem('items', JSON.stringify([item]));
  // }else {
  //   array.push(item);
  //   localStorage.setItem('items', JSON.stringify(array));
  // }
  
  // // check local storage
  // // if items then push into array
  // // if not create array and push into
  // if(localStorage.getItem('items') != null){
  //   let array = JSON.parse(localStorage.getItem('items'));

  // }else {
  //   JSON.parse(localStorage.setItem('items', JSON.stringify({})))
  // }
}


function getLocalStorage() {
  if(localStorage.getItem('items') != null) {
    return JSON.parse(localStorage.getItem('items'));
  }else {
    return 1
  }
}

function setLocalStorage() {

}




// const newItem = new Item('this is an item', false);
// newItem.logItem();

// let array = [newItem, newItem];

// localStorage.setItem('class', JSON.stringify(array));
// let obj = JSON.parse(localStorage.getItem('class'));
// console.log(obj[0])



// start program
// reads from localStorage
// passes to displayItems
// add item
// adds to local storage


// const itemsObj = localStorage.setItem("items", {}); //!! Swap out array for local storage
// const testArray = [1, 2, 3, 4];
// setLocalStorage(testArray);
// let newArray = getLocalStorage();
// displayItems(newArray);

// // add button
// // adds new item to array
// function addItem() {
//   // clear input on add
// }

// // del button
// // deletes item from array
// function removeItem(index, items) {
//   items.splice(index, 1);
//   document.getElementById("items-section").innerHTML = ""; //?? put in display function?
//   displayItems(items);
// }

// // refresh array / build list
// // pass array
// // build item for each item in array
// // array that's passed can be all, active, or complete


// // filter all (default)

// // filter completed

// // filter active

// // function to write to localStorage
// function getLocalStorage() {
//   // check to see if LS array exists
//   // create if not
//   let newArray = JSON.parse(localStorage.getItem("array"));
//   return newArray;
// }

// // function to read to localStorage

// function setLocalStorage(array) {
//   // localStorage.removeItem("array");
//   localStorage.setItem("array", JSON.stringify(array));
// }
