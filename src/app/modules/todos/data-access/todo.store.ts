import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { FilterTaskEnum } from "../models/enums/filter-task.enum";
import { TodoModel } from "../models/todo.model";

export interface TodosState extends EntityState<TodoModel, string> {
    ui: {
        filter: string
    };
}

const initialState = {
    ui: { filter: FilterTaskEnum.ALL }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState, TodoModel> {
    constructor() {
        super(initialState);
    }
}