import * as lsHelper from "./ls.js";
import * as renderHelper from "./utilities.js";

console.log("main.js loaded.");

const items = [
//   { text: "this is my todo item 1", completed: false },
//   { text: "this is my 2nd todo item 2", completed: false },
//   { text: "this is my 3rd todo item 3", completed: false },
];

lsHelper.writeToLS("items", items);

let value = lsHelper.readFromLS("items");

console.log(value);

renderHelper.renderList(items, "items-list");

// does this make sense here?
const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => renderHelper.filterItems(e, items)); // passing hard coded array for now
});

// event listener for check boxes
const checkBoxes = document.querySelectorAll(".item-box");
checkBoxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    let itemNum = String(e.path[1].id).match(/\d+/gm);
    if (box.checked) {
      e.path[1].classList.add("completed");
      //!! add object "completed" set true here?
    //   let itemNum = String(e.path[1].id).match(/\d+/gm);
      items[itemNum - 1].completed = true;
    console.log(items[itemNum - 1])
    } else {
      e.path[1].classList.remove("completed");
      items[itemNum - 1].completed = false;
      console.log(items[itemNum - 1])
    }
  });
});


const addButton = document.getElementById('add-button');
let input = document.getElementById('item-input');
input.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('add-button').click();
    }
})

addButton.addEventListener('click', () => {
    let text = document.getElementById('item-input');
    items.push({text: text.value, completed: false});
    
    console.log(text)
    text.value = '';

    renderHelper.renderList(items, "items-list")
})

// event listener for del box
//!! doesn't work here cause render doesn't create event listener on new render
// const delButtons = document.querySelectorAll(".item-del");
// delButtons.forEach((del) => {
//   del.addEventListener("click", (e) => {
//     console.log(String(e.path[1].id));
//     let itemNum = String(e.path[1].id).match(/\d+/gm);
//     renderHelper.removeItem(itemNum - 1, items);
//   });
// });

//!! moved to utilities
// export default function filterView(e) {
//     console.log(String(e.path[1].id));
//     let itemNum = String(e.path[1].id).match(/\d+/gm);
//     renderHelper.removeItem(itemNum - 1, items);
//   }

