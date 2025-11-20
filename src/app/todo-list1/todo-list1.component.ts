import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo1 } from '../model/todo1';

@Component({
  selector: 'app-todo-list1',
  templateUrl: './todo-list1.component.html',
  styleUrls: ['./todo-list1.component.scss']
})
export class TodoList1Component implements OnInit {

  @Input() gettodoArray1!: Array<Itodo1>;
  @Output() sendPatchData = new EventEmitter<Itodo1>();
  @Output() senddeleteObj = new EventEmitter<Itodo1>();

  constructor() {}

  onEdit(obj: Itodo1) {
    this.sendPatchData.emit(obj);
  }

  onRemove(obj: Itodo1) {
    this.senddeleteObj.emit(obj);
  }


  ngOnInit(): void {}

}
