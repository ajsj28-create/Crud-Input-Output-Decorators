import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TodoDashComponent } from './component/todo-dash/todo-dash.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { StudentDashComponent } from './component/student-dash/student-dash.component';
import { StudentFormComponent } from './component/student-form/student-form.component';
import { StudentTableComponent } from './component/student-table/student-table.component';
import {MatIconModule} from '@angular/material/icon';
import { ProductDashComponent } from './component/product-dash/product-dash.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductCardComponent } from './component/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentDashComponent,
    StudentFormComponent,
    StudentTableComponent,
    ProductDashComponent,
    ProductFormComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
