import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Istudent } from 'src/app/model/students';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.scss']
})
export class StudentDashComponent implements OnInit {

  editStudent!: Istudent;

  studentArray: Istudent[] = [
    {
      fname: 'Jhon',
      lname: 'Doe',
      contact: '1231231230',
      email: 'jd@gmail.com',
      isActive: 'true',
      id: this.uuid()
    },
    {
      fname: 'May',
      lname: 'Doe',
      contact: '4564564560',
      email: 'md@gmail.com',
      isActive: 'false',
      id: this.uuid()
    },
  ];

  getAddedStd(obj: Istudent) {
    this.studentArray.push(obj)
    this.showAlert(`Student ${obj.fname} ${obj.lname} added successfully`)
    console.log(this.studentArray)
  }

  getEditStd(obj: Istudent) {
    this.editStudent = obj
  }

  getUpdatedStd(obj: Istudent) {
    console.log(obj)
    let ind = this.studentArray.findIndex(ele => ele.id === obj.id)
    this.studentArray[ind] = obj
    console.log(this.studentArray)
    this.showAlert(`Student ${obj.fname} ${obj.lname} updated successfully`)
  }

  getDeleteStd(obj: Istudent) {
    let sure = confirm(`Do you really want to delete ${obj.fname} ${obj.lname}?`)
    if(sure){
      this.studentArray = this.studentArray.filter(ele => ele.id !== obj.id)
      this.showAlert(`Student ${obj.fname} ${obj.lname} deleted successfully`)
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
