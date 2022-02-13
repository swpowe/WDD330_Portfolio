// import statements
import ToDoItem from "./Todos.js";
import * as lsHelper from "./ls.js";
import * as utilities from "./utilities.js";

console.log("main v4 loaded.");

const items = [];

const input = document.getElementById("item-input");
input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    document.getElementById("add-button").click();
  }
});

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", (e) => {
  if (input.value === "") {
    alert("Please enter a task.");
    return;
  }
  let item = new ToDoItem(input.value);
  items.push(item);
  console.log(items);

  lsHelper.writeToLS("items", items);
  utilities.displayList("items-list");
  input.value = "";

  utilities.updateCount();

  // test
  //   let main = document.getElementById('items-list');
  //   let output = document.getElementById('items-left');
  //   let num = utilities.getActive().length.toString();
  //   output.innerText = num;
  //   console.log(main.childElementCount);
});

const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => utilities.filterItems(e)); // passing hard coded array for now
});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", (e) => {
  let msg = "Are you sure you want to delete everything?";
  if(confirm(msg) == true) {
      localStorage.removeItem('items');
      console.log('items removed.');
      location.reload();
  }else {
      console.log('removed canceled.');
  }
});
