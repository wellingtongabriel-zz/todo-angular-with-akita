import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { TodoModel } from "../models/todo.model";
import { TodoService } from "../data-access/todo.service";
import { TodosQuery } from "../data-access/todo.query";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {

    todos$: Observable<TodoModel[] | any>;

    constructor(
        private todosQuery: TodosQuery,
        private todoService: TodoService
    ) {
        this.todos$ = this.todosQuery.selectVisibleTodos$;
    }

    addTodo(title: string): void {
        this.todoService.addTask(title);
    }

    deleteTask(id: string): void {
        this.todoService.deleteTask(id);
    }

    completeTask(id: string): void {
        this.todoService.completeTask(id);
    }

    changeFilter(value: boolean): void {
        this.todoService.updateFilter(value);
    }
}