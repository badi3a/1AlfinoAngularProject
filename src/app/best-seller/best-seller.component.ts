import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {
  listBestSeller: Product[];
  constructor() { }

  ngOnInit(): void {
    this.listBestSeller = [
      {id: 12, title: 'T-shirt 56', price: 10, quantity: 50, like: 1000},
      {id: 12, title: 'T-shirt 10', price: 10, quantity: 50, like: 3}
    ];
  }

}
