import * as items from "./main.js";
import * as lsHelper from "./ls.js";

export function addItem(itemsArray, item) {}

export function displayList(list, element) {
  const output = document.getElementById(element);
  output.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
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
    box.addEventListener("click", (e) => status(e));

    // if (item.completed) {
    //   box.checked = true;
    //   div.classList.add("completed");
    // }

    del.classList.add("item-del");
    del.id = `item-${i + 1}-del`;
    del.textContent = "X";
    del.addEventListener("click", (e) => removeItem(e, list));

    p.innerHTML = `${list[i].item}`;

    document.getElementById("items-left").innerHTML = list.length; //!! not list length, filtered complete and get that length

    // del.addEventListener("click", (e) => filterView(e));

    div.appendChild(box);
    div.appendChild(p);
    div.appendChild(del);

    output.appendChild(div);
  }
}

function removeItem(e, list) {
  //!! change to using local storage
  let index = getIndex(e);
  list.splice(index, 1);
  displayList(list, "items-list");
}

function status(e) {
  let index = getIndex(e);
  let items = lsHelper.readFromLS("items");
  console.log(e);
//   if (items[index].completed) {
//     items[index].completed = false;
//   } else {
//     items[index].completed = true;
//   }
}

function getIndex(e) {
  return String(e.path[1].id).match(/\d+/gm);
}
