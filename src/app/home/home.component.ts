import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  buyProduct(p: Product) {
    let i = this.list.indexOf(p);
    if (i != -1) {
      this.list[i].quantity--;
    }
  }

  incrementLikeByProduct(p: Product) {
    let i = this.list.indexOf(p);
    if (i != -1) {
      this.list[i].like++;
    }
  }


}
