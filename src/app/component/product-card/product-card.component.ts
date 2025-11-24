import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from 'src/app/model/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() inpProdArray!: Iproduct[];
  @Output() outAddedProd: EventEmitter<Iproduct> = new EventEmitter();
  @Output() outDeleteProd: EventEmitter<Iproduct> = new EventEmitter();

  onProdEdit(obj: Iproduct) {
    this.outAddedProd.emit(obj)
  };

  onProdDelete(obj: Iproduct) {
    this.outDeleteProd.emit(obj)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
