import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TodoModel } from "../../models/todo.model";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoLisComponent {

    @Input() todos: Array<TodoModel>;

    @Output() onDeleteTask: EventEmitter<string>;
    @Output() onCompleteTask: EventEmitter<string>; 

    constructor() {
        this.todos = [];
        this.onDeleteTask = new EventEmitter();
        this.onCompleteTask = new EventEmitter();
    }

    deleteTask(id: string): void  {
        this.onDeleteTask.emit(id);
    }

    completeTask(id: string): void {
        this.onCompleteTask.emit(id);
    }
}