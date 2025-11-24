import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Iproduct } from 'src/app/model/products';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss']
})
export class ProductDashComponent implements OnInit {

  productArray: Iproduct[] = [
    {
      id: this.uuid(),
      name: "Wireless Headphones",
      description: "High-quality Bluetooth noise-cancelling wireless headphones engineered for immersive sound. Features soft cushioned ear pads, built-in microphone, and up to 20 hours of continuous playback on a single charge, ideal for music, travel, and gaming.",
      category: "Electronics"
    },
    {
      id: this.uuid(),
      name: "Organic Green Tea",
      description: "Premium hand-picked organic green tea leaves sourced from high-altitude farms. Rich in antioxidants and natural flavor, offering a refreshing and calming beverage experience that promotes wellness, metabolism, and daily detox.",
      category: "Groceries"
    },
    {
      id: this.uuid(),
      name: "Office Chair",
      description: "Ergonomic office chair with breathable mesh back support, adjustable height, smooth 360-degree swivel, and soft foam seating cushion. Designed to reduce fatigue and provide comfort during long working or study sessions.",
      category: "Furniture"
    }
  ];

  editProduct!: Iproduct;

  getAddedProd(obj: Iproduct) {
    this.productArray.push(obj)
    this.showAlert(`${obj.name} added successfully`)
  }

  getEditProd(obj: Iproduct) {
    this.editProduct = obj
  }

  getUpdatedProd(obj: Iproduct) {
    let ind = this.productArray.findIndex(ele => ele.id === obj.id)
    this.productArray[ind] = obj
    this.showAlert(`${obj.name} updated successfully`)
  }

  getDeleteProd(obj: Iproduct) {
    let sure = confirm(`Do you really want to delete ${obj.name}?`)
    if(sure){
      this.productArray = this.productArray.filter(ele => ele.id !== obj.id)
      this.showAlert(`${obj.name} deleted successfully`)
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