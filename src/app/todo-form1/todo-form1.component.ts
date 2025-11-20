import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo1 } from '../model/todo1';

@Component({
  selector: 'app-todo-form1',
  templateUrl: './todo-form1.component.html',
  styleUrls: ['./todo-form1.component.scss']
})
export class TodoForm1Component implements OnInit, OnChanges {

  @Output() sendtodoObj = new EventEmitter<Itodo1>();
  @Output() sendupdatedObj = new EventEmitter<Itodo1>();
  @ViewChild('todoForm') form!: NgForm;
  @Input() getPatchData!: Itodo1;

  isEditMode: boolean = false;

  constructor() {}

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

  onTodoAdd() {
    if(this.form.valid){
      let todoObj: Itodo1 = {...this.form.value, id: this.uuid()}
      this.form.reset()
      this.sendtodoObj.emit(todoObj)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['getPatchData'])
    if(changes['getPatchData'].currentValue){
      this.isEditMode = true;
      this.form.form.patchValue(changes['getPatchData'].currentValue);
    }
  }

  onTodoUpdate() {
    if(this.form.valid){
      let obj = {...this.form.value, id: this.getPatchData.id};
      this.sendupdatedObj.emit(obj);
      this.isEditMode = false;
      this.form.reset()      
    }
  }

  onCancel(){
    this.isEditMode = false;
    this.form.reset();
    window.location.reload();
  }

  ngOnInit(): void {}
}
