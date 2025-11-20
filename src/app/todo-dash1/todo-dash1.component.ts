import { Component, OnInit } from '@angular/core';
import { Itodo1 } from '../model/todo1';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-dash1',
  templateUrl: './todo-dash1.component.html',
  styleUrls: ['./todo-dash1.component.scss']
})
export class TodoDash1Component implements OnInit {

  todoArray1: Array<Itodo1> = JSON.parse(localStorage.getItem('dataArray1') as string) || [];
  patchData!: Itodo1

  constructor(private _snackBar: MatSnackBar) {}

  showAlert(msg: string, action: string = 'Close') {
    this._snackBar.open(msg, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  setLocalStorage(){
    localStorage.setItem('dataArray1', JSON.stringify(this.todoArray1))
  }

  onGetTodo(obj: Itodo1) {
    this.todoArray1.push(obj)
    this.setLocalStorage()
    this.showAlert(`${obj.todoItem} added successfully!`)
  }

  onGetPatchData(obj: Itodo1){
    this.patchData = obj;
  }

  onGetUpdatedTodo(obj: Itodo1){
    let ind = this.todoArray1.findIndex(ele => ele.id === obj.id);
    this.todoArray1[ind] = obj;
    this.setLocalStorage()
    this.showAlert(`${obj.todoItem} updated successfully!`)
  }

  onGetDeleteObj(obj: Itodo1) {
    let sure = confirm(`${obj.todoItem} will be deleted permanantely!!!`)
    if(sure){
      let ind = this.todoArray1.findIndex(ele => ele.id === obj.id);
      this.todoArray1.splice(ind, 1);
      this.setLocalStorage()
      this.showAlert(`${obj.todoItem} deleted successfully!`)
    }
  }

  ngOnInit(): void {}
}
