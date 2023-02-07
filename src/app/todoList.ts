import { todoItem } from "./todoItem";

export class TodoList{
    constructor(public user:string, private todoItems: todoItem[] = []){}

    get items(): readonly todoItem[] {
        return this.todoItems;
    }

    addItem(task: string){
        this.todoItems.push(new todoItem(task));
    }

}