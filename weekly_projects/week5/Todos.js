export default class ToDoItem {
  constructor(item, completed = false) {
    this.item = item;
    this.completed = completed;
  }

  logItem() {
    console.log(`ToDo: ${this.item}`);
  }

  
}
