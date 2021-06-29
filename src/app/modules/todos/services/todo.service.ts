import { Injectable } from "@angular/core";
import { createTodo } from "../models/todo.model";
import { TodosStore } from "../store/todo.store";

@Injectable({ providedIn: "root" })
export class TodoService {

  constructor(private todosStore: TodosStore) { }

  updateFilter(filter: any) {
    this.todosStore.update({
      ui: { filter }
    });
  }

  addTask(title: string): void {
    const todo = createTodo(title);
    this.todosStore.add(todo);
  }

  deleteTask(id: string): void {
    this.todosStore.remove(id);
  }

  completeTask(id: string): void {
    this.todosStore.update(id, { completed: true });
  }
}