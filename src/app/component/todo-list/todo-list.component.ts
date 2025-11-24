import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() inpTodoArray!: Itodo[];
  @Output() outEditTodo: EventEmitter<Itodo> = new EventEmitter();
  @Output() outDeleteTodo: EventEmitter<Itodo> = new EventEmitter();

  constructor() { }

  onTodoEdit(obj: Itodo) {
    this.outEditTodo.emit(obj)
  }

  onTodoDelete(obj: Itodo) {
    this.outDeleteTodo.emit(obj)
  }

  ngOnInit(): void {
  }

}
