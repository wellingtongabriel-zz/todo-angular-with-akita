import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-todo-filter',
    templateUrl: './todo-filter.component.html'
})
export class TodoFilterComponent {
    
    selectedValue: boolean;

    @Output() onChangeFilter: EventEmitter<boolean>;

    constructor() {
        this.selectedValue = false;
        this.onChangeFilter = new EventEmitter();
    }

    changeFilter(): void {
        this.onChangeFilter.emit(this.selectedValue);
    }
}