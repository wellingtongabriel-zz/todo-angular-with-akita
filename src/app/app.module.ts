import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { TodoModule } from './modules/todos/todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
