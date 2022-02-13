// import filterView from "./main.js";
import * as ls from "./ls.js";

export function qs(selector) {} //!! not sure??

export function onTouch(elementSelector, callback) {} //!! not sure??

export function renderList(list, element) {
  // for each in list
  // append to element
  // clear the current list
  //!! need to render checkmark based on item prop
  let itemsSection = document.getElementById(element);
  itemsSection.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
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

    if (item.completed) {
      box.checked = true;
      div.classList.add("completed");
    }

    del.classList.add("item-del");
    del.id = `item-${i + 1}-del`;
    del.textContent = "X";

    p.innerHTML = `${list[i].text}`;

    document.getElementById('items-left').innerHTML = list.length;

    // box.addEventListener("click", (e) => {
    //   if (box.checked) {
    //     e.path[1].classList.add("completed");
    //     //!! add object "completed" set true here?
    //   } else {
    //     e.path[1].classList.remove("completed");
    //   }
    // });

    del.addEventListener("click", (e) => filterView(e));

    ///////
    // const delButtons = document.querySelectorAll(".item-del");
    // delButtons.forEach((del) => {
    //   del.addEventListener("click", (e) => {
    //     console.log(String(e.path[1].id));
    //     let itemNum = String(e.path[1].id).match(/\d+/gm);
    //     renderHelper.removeItem(itemNum - 1, items);
    //   });
    // });

    /////

    div.appendChild(box);
    div.appendChild(p);
    div.appendChild(del);

    itemsSection.appendChild(div);
  }
}

export function filterItems(e, items) {
  //!! add logic for what type of filter based on string
  // if ALL filteredItems = items
  // if ACTIVE filteredItems = !completed
  // if COMPLETED filteredItems = completed
  let filteredItems = [];

  if (e.target.innerHTML === "Active") {
    console.log(e.target.innerHTML);
    for (var i = 0; i < items.length; i++) {
      if (!items[i].completed) {
        // console.log(items[i]);
        filteredItems.push(items[i]);
      }
    }
  } else if (e.target.innerHTML === "Completed") {
    console.log(e.target.innerHTML);
    for (var i = 0; i < items.length; i++) {
      if (items[i].completed) {
        // console.log(items[i]);
        filteredItems.push(items[i]);
      }
    }
  } else {
    filteredItems = items;
  }

  console.log(filteredItems);
  renderList(filteredItems, "items-list");
}

export function removeItem(index, items) {
  items.splice(index, 1);
  // document.getElementById("items-section").innerHTML = ""; //?? put in display function?
  // displayItems(items);
  renderList(items, "items-list");
  // console.log(`index: ${index} + items: ${items}`)
}

function filterView(e) {
  console.log(String(e.path[1].id));
  let itemNum = String(e.path[1].id).match(/\d+/gm);
  let items = ls.readFromLS("items");
  removeItem(itemNum - 1, items);
}
