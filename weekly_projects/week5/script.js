console.log("script loaded");
// start program
// reads from localStorage
// passes to displayItems
// add item
// adds to local storage
// const itemsObj = localStorage.setItem("items", {}); //!! Swap out array for local storage
// const testArray = [1, 2, 3, 4, 5, 6];
// setLocalStorage(testArray);
// let newArray = getLocalStorage();
// displayItems(newArray);

// add button
// adds new item to array
function addItem() {
  //!! currently clearing out the array rather then appending to it.
  let item = document.getElementById("item-input").value;
  if(!localStorage.getItem('array')) {
    setLocalStorage([item]);
    var array = getLocalStorage();
  }else {
    var array = getLocalStorage();
    array.push(item);
  }
  displayItems(array);
}

// del button
// deletes item from array
function removeItem(index, items) {
  // remove item from array
  // need to clear the items-section div
  // calling function with new array
  items.splice(index, 1);
  document.getElementById("items-section").innerHTML = ""; //?? put in display function?
  displayItems(items);
}

// refresh array / build list
// pass array
// build item for each item in array
// array that's passed can be all, active, or complete
function displayItems(items) {
  const itemsSection = document.getElementById("items-section");
  itemsSection.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // build html item here
    // div
    // check box
    // task item text
    // del button
    let div = document.createElement("div");
    let box = document.createElement("input");
    let p = document.createElement("p");
    let del = document.createElement("button");

    div.classList.add("item");
    div.id = `item-${i + 1}`;

    box.type = "checkbox";
    box.classList.add("item-box");
    box.id = `item-${i + 1}-checkbox`;
    box.name = `item-${i + 1}-checkbox`;

    del.classList.add("item-del");
    del.id = `item-${i + 1}-del`;
    del.textContent = "X";

    p.innerHTML = `Hello World Num: ${items[i]}`;

    // p.classList.add('completed');
    box.addEventListener("click", (e) => {
      if (box.checked) {
        // console.log(e.path[1]);
        e.path[1].classList.add("completed");
      } else {
        e.path[1].classList.remove("completed");
      }
    });

    del.addEventListener("click", (e) => {
      console.log(String(e.path[1].id));
      // need to get index of clicked item to pass to remove
      // remove elem from array
      let itemNum = String(e.path[1].id).match(/\d+/gm);
      removeItem(itemNum - 1, items);
    });

    div.appendChild(box);
    div.appendChild(p);
    div.appendChild(del);

    itemsSection.appendChild(div);
  }
}

// filter all (default)

// filter completed

// filter active

// function to write to localStorage
function getLocalStorage() {
  // check to see if LS array exists
  // create if not
  let newArray = JSON.parse(localStorage.getItem("array"));
  return newArray;
}

// function to read to localStorage

function setLocalStorage(array) {
  // localStorage.removeItem("array");
  localStorage.setItem("array", JSON.stringify(array));
}
