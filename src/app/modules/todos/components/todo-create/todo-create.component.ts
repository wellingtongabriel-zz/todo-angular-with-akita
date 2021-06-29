import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-todo-create',
    templateUrl: './todo-create.component.html'
})
export class TodoCreateComponent {
    
    @Output() onAddTodo: EventEmitter<string>;

    constructor() {
        this.onAddTodo = new EventEmitter();
    }

    addTodo(input: HTMLInputElement): void {
        this.onAddTodo.emit(input.value);
        input.value = "";
    }
}