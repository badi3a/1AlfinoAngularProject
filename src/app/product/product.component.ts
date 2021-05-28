import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productChild: Product; //object
  @Input() priceMaxChild: number; //valeur Input formulaire
  @Output() eventLike = new EventEmitter<Product>();
  @Output() eventBuy = new EventEmitter<Product>();
  constructor() {
  }
  ngOnInit(): void {
  }
  getValue(p: Product) {
    if (p.quantity === 0) {
      return true;
    } else {
      return false;
    }
  }
  getClass(p: Product) {
    if (p.quantity === 0) {
      return 'btn btn-danger';
    } else {
      return 'btn btn-success';
    }
  }
  sendObject() {
   this.eventLike.emit(this.productChild);
  }
  sendNotifBuy(){
    this.eventBuy.emit(this.productChild);
  }
}
