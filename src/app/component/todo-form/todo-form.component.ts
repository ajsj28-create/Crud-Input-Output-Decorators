import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/model/todos';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  isEditMode: boolean = false;

  @ViewChild('todoForm') form!: NgForm;
  @Output() outAddedTodo: EventEmitter<Itodo> = new EventEmitter();
  @Input() inpEditTodo!: Itodo;
  @Output() outUpdatedTodo: EventEmitter<Itodo> = new EventEmitter();

  onTodoAdd() {
    if(this.form.valid){
      let obj = {...this.form.value, id: this.uuid()}
      this.form.reset()
      this.outAddedTodo.emit(obj)      
    }else{
      this.showAlert(`Field can't be empty`)
    }
  }

  onTodoUpdate() {
    if(this.form.valid){
      let obj = {...this.form.value, id: this.inpEditTodo.id}
      this.form.reset()
      this.outUpdatedTodo.emit(obj)
      this.isEditMode = false      
    }else{
      this.showAlert(`Field can't be empty`)
    }    
  }

  constructor(private _snackBar: MatSnackBar) { }

  showAlert(msg: string, action: string = 'Close'){
    this._snackBar.open(msg, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inpEditTodo'].currentValue){
      this.isEditMode = true
      this.form.form.patchValue(changes['inpEditTodo'].currentValue)
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
