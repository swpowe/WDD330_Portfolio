import * as lsHelper from "./ls.js";
import * as renderHelper from "./utilities.js"

console.log("main.js loaded.");

const items = [{ text: "this is my todo item 1" }, {text: "this is my 2nd todo item 2"}];

lsHelper.writeToLS('items', items);

let value = lsHelper.readFromLS('items');

console.log(value);

renderHelper.renderList(items, 'items-section')
