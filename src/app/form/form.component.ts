import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product = new Product();


  constructor() {
  }

  ngOnInit(): void {
  }

  save() {
    this.product.like = 0;
    console.log(this.product);

  }

}
