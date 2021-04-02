import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  title: string;
  list: Product[];
  priceMax: number;
  constructor() {
  }

  ngOnInit(): void {
    this.title = '1Alinfo6 Project';
    this.list = [
      {id: 12, title: 'T-shirt 1', price: 10, quantity: 50, like: 3},
      {id: 13, title: 'T-shirt 2', price: 340, quantity: 0, like: 0},
      {id: 14, title: 'T-shirt 3', price: 34, quantity: 1, like: 2}
    ];
  }

  incrementLikeByProduct(p: Product) {
    p.like++;
  }

  getValue(p: Product) {
    if (p.quantity === 0) {
      return true;
    } else {
      return false;
    }
  }

  buyProduct(p: Product) {
    p.quantity--;
  }
  getClass(p: Product) {
    if (p.quantity === 0) {
      return 'btn btn-danger';
    } else {
      return 'btn btn-success';
    }
  }
}
