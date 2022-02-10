export function qs(selector) {}

export function onTouch(elementSelector, callback) {}

export function renderList(list, element) {
  // for each in list
  // append to element
  // clear the current list
  let itemsSection = document.getElementById(element)
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

    del.classList.add("item-del");
    del.id = `item-${i + 1}-del`;
    del.textContent = "X";

    p.innerHTML = `${list[i].text}`;

    box.addEventListener("click", (e) => {
      if (box.checked) {
        e.path[1].classList.add("completed");
      } else {
        e.path[1].classList.remove("completed");
      }
    });

    del.addEventListener("click", (e) => {
      console.log(String(e.path[1].id));
      let itemNum = String(e.path[1].id).match(/\d+/gm);
      removeItem(itemNum - 1, items);
    });

    div.appendChild(box);
    div.appendChild(p);
    div.appendChild(del);

    itemsSection.appendChild(div);
  }
}

