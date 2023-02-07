import { Component } from '@angular/core';
import { todoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList(
    "Bob", [
      new todoItem("Go for run", true),
      new todoItem("Get Flowers"),
      new todoItem("Collect Tickets")
    ]);

    get username(): string {
      return this.list.user;
    }

    get itemCount(): number {
      return this.list.items.filter(item => !item.complete).length;
    }
}
