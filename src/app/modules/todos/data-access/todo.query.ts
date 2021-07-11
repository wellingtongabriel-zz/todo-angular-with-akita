import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { FilterTaskEnum } from '../models/enums/filter-task.enum';
import { TodoModel } from '../models/todo.model';
import { TodosState, TodosStore } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState, TodoModel> {
  
  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleTodos$ = combineLatest(
    this.select((state: TodosState) => state.ui.filter),
    this.selectAll(),
    this.getVisibleTodos
  )

  constructor(protected todosStore: TodosStore) {
    super(todosStore);
  }

  private getVisibleTodos(filterTask: FilterTaskEnum, todos: Array<TodoModel>): Array<TodoModel> {
    switch (filterTask) 
    {
      case FilterTaskEnum.COMPLETED:
        return todos.filter((todo: TodoModel) => todo.completed);

      case FilterTaskEnum.PENDING:
        return todos.filter((todo: TodoModel) => !todo.completed)
    
      default:
        return todos;
    }
  }
}