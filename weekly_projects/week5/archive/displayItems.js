import { removeItem } from "./main.js";

export function displayItems(items) {
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
  
      p.innerHTML = `${items[i]}`;
  
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