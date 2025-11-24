import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Iproduct } from 'src/app/model/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {

  isEditMode: boolean = false;
  @ViewChild('productForm') form!: NgForm;
  @Output() outAddedProd: EventEmitter<Iproduct> = new EventEmitter();
  @Input() inpEditProd!: Iproduct;
  @Output() outUpdatedProd: EventEmitter<Iproduct> = new EventEmitter();

  onProdAdd() {
    if(this.form.valid){
      let obj = {...this.form.value, id: this.uuid()}
      this.form.reset()
      this.outAddedProd.emit(obj)      
    }else{
      this.showAlert(`Field can't be empty`)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inpEditProd'].currentValue){
      this.isEditMode = true;
      this.form.form.patchValue(changes['inpEditProd'].currentValue)
    }
  }

  onProdUpdate() {
    if(this.form.valid){
      let obj = {...this.form.value, id: this.inpEditProd.id}
      this.form.reset()
      this.outUpdatedProd.emit(obj)
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
