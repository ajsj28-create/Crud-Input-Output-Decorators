import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/model/students';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  @Input() inpStdArray!: Istudent[];
  @Output() outEditStd: EventEmitter<Istudent> = new EventEmitter()
  @Output() outDeleteStd: EventEmitter<Istudent> = new EventEmitter()

  onStdEdit(obj: Istudent) {
    this.outEditStd.emit(obj)
  }

  onStdDelete(obj: Istudent) {
    this.outDeleteStd.emit(obj)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
