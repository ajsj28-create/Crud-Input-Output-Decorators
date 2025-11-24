import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Istudent } from 'src/app/model/students';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {

  isEditMode: boolean = false;
  @ViewChild('studentForm') form!: NgForm;
  @Output() outAddedStd: EventEmitter<Istudent> = new EventEmitter();
  @Input() inpEditStd!: Istudent;
  @Output() outUpdatedStd: EventEmitter<Istudent> = new EventEmitter();

  onStdAdd() {
    if(this.form.valid){
      let obj = {...this.form.value, id: this.uuid()}
      this.form.reset()
      this.outAddedStd.emit(obj)    
    }else{
      this.showAlert(`Field can't be empty`)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inpEditStd'].currentValue){
      this.isEditMode = true
      this.form.form.patchValue(changes['inpEditStd'].currentValue)
    }
  }

  onStdUpdate() {
    if(this.form.valid){
      let obj = {...this.form.value, id: this.inpEditStd.id}
      this.form.reset()
      this.outUpdatedStd.emit(obj)
      this.isEditMode = false      
    }else{
      this.showAlert(`Field can't be empty`)
    }    
  }

  constructor(private _snackBar: MatSnackBar) {}

  showAlert(msg: string, action: string = 'Close'){
    this._snackBar.open(msg, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
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
