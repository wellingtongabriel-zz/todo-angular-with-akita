import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/todos/todo.module').then((module) => module.TodoModule)
  }
];