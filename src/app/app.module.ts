import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDash1Component } from './todo-dash1/todo-dash1.component';
import { TodoForm1Component } from './todo-form1/todo-form1.component';
import { TodoList1Component } from './todo-list1/todo-list1.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TodoDash2Component } from './todo-dash2/todo-dash2.component';
import { TodoForm2Component } from './todo-form2/todo-form2.component';
import { TodoList2Component } from './todo-list2/todo-list2.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TodoDash1Component,
    TodoForm1Component,
    TodoList1Component,
    TodoDash2Component,
    TodoForm2Component,
    TodoList2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
