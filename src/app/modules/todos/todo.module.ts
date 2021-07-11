import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TodoCreateComponent } from "./components/todo-create/todo-create.component";
import { TodoFilterComponent } from "./components/todo-filter/todo-filter.compoent";
import { TodoLisComponent } from "./components/todo-list/todo-list.component";
import { TodoComponent } from "./containers/todo.component";
import { TodoService } from "./data-access/todo.service";
import { todoRoutes } from "./todo.routes";

const COMPONENTS = [TodoComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    TodoLisComponent,
    TodoCreateComponent,
    TodoFilterComponent
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(todoRoutes)
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }