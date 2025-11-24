import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/model/todos';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss']
})
export class TodoDashComponent implements OnInit {

  todoArray: Itodo[] = [
    {todo: 'HTML', id: this.uuid()},
    {todo: 'CSS', id: this.uuid()},
    {todo: 'TypeScript', id: this.uuid()}
  ]

  editTodo!: Itodo;

  constructor(private _snackBar: MatSnackBar) { }

  showAlert(msg: string, action: string = 'Close'){
    this._snackBar.open(msg, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  getAddedTodo(obj: Itodo) {
    this.todoArray.push(obj)
    this.showAlert(`${obj.todo} added successfully`)
  }

  getEditTodo(obj: Itodo) {
    this.editTodo = obj
  }

  getUpdatedTodo(obj: Itodo) {
    let ind = this.todoArray.findIndex(ele => ele.id === obj.id)
    this.todoArray[ind] = obj
    this.showAlert(`${obj.todo} updated successfully`)
  }

  getDeleteTodo(obj: Itodo) {
    let sure = confirm(`Do you really want to delete ${obj.todo}?`)
    if(sure){
      this.todoArray = this.todoArray.filter(ele => ele.id !== obj.id)
      this.showAlert(`${obj.todo} deleted successfully`)
    }
  }

  ngOnInit(): void {
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }

}
