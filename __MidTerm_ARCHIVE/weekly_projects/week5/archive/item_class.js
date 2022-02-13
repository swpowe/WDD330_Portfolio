export class Item {
    constructor(item, completed) {
        this.item = item;
        this.completed = completed;
    }

    logItem() {
        console.log(`ToDo: ${this.item}`);
    }

}