import * as items from "./main.js";
import * as lsHelper from "./ls.js";

export function addItem(itemsArray, item) {}

export function displayList(element, list = lsHelper.readFromLS("items")) {
  // !! need to pass the list so getAll, Active, Completed will render
  // let list = lsHelper.readFromLS("items");
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
    box.addEventListener("click", (e) => updateStatus(e));

    // if (item.completed) {
    //   box.checked = true;
    //   div.classList.add("completed");
    // }

    del.classList.add("item-del");
    del.id = `item-${i + 1}-del`;
    del.textContent = "X";
    del.addEventListener("click", (e) => removeItem(e));

    p.innerHTML = `${list[i].item}`;

    // document.getElementById("items-left").innerHTML = list.length; //!! not list length, filtered complete and get that length

    // del.addEventListener("click", (e) => filterView(e));

    div.appendChild(box);
    div.appendChild(p);
    div.appendChild(del);

    output.appendChild(div);
  }
}

function removeItem(e) {
  //!! change to using local storage
  let list = lsHelper.readFromLS('items');
  let index = getIndex(e);
  list.splice(index, 1)
  // list.splice(index, 1);
  console.log(list)
  localStorage.setItem('items', JSON.stringify(list));
  displayList("items-list");
  // lsHelper.writeToLS('items', JSON.stringify(list))
}

function getIndex(e) {
  return String(e.path[1].id).match(/\d+/gm) - 1;
}

function updateStatus(e) {
  e.path[1].classList.toggle("completed");

  let i = getIndex(e);
  let items = getAll();
  items[i].completed = !items[i].completed;
  localStorage.setItem("items", JSON.stringify(items));

  updateCount();
}

function getAll() {
  return lsHelper.readFromLS("items");
}

export function getActive() {
  let objAll = getAll();
  let activeItems = [];
  for (let i = 0; i < objAll.length; i++) {
    const obj = objAll[i];
    if (obj.completed == false) {
      activeItems.push(obj);
    }
  }
  console.log(`active items length: ${activeItems.length}`);
  return activeItems;
}

function getCompleted() {
  let objAll = getAll();
  let activeItems = [];
  for (let i = 0; i < objAll.length; i++) {
    const obj = objAll[i];
    if (obj.completed == true) {
      activeItems.push(obj);
    }
  }
  console.log(`active items length: ${activeItems.length}`);
  return activeItems;
}

export function filterItems(e) {
  //!! add logic for what type of filter based on string
  // if ALL filteredItems = items
  // if ACTIVE filteredItems = !completed
  // if COMPLETED filteredItems = completed
  let filteredItems = [];
  let items = getAll();

  if (e.target.innerHTML === "Active") {
    console.log(e.target.innerHTML);
    // get active
    // rerender
    let active = getActive();
    displayList('items-list', active);
    document.getElementById('filter_all').classList.remove('active');
    document.getElementById('filter_completed').classList.remove('active');
    document.getElementById('filter_active').classList.add('active');
    
  } else if (e.target.innerHTML === "Completed") {
    console.log(e.target.innerHTML);
    let completed = getCompleted();
    displayList('items-list', completed);
    document.getElementById('filter_all').classList.remove('active');
    document.getElementById('filter_active').classList.remove('active');
    document.getElementById('filter_completed').classList.add('active');
  } else {
    console.log(e.target.innerHTML);
    displayList('items-list', getAll())
    document.getElementById('filter_active').classList.remove('active');
    document.getElementById('filter_completed').classList.remove('active');
    document.getElementById('filter_all').classList.add('active');
  }
}

export function updateCount() {
  let output = document.getElementById("items-left");
  let num = getActive().length;
  // console.log(num)
  output.innerText = num.toString();
}
