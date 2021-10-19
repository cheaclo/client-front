import { ProductResponse } from './../../models/productResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: ProductResponse[] = [];

  constructor() {
    this.cartProducts = JSON.parse(sessionStorage.getItem('cart') || '{}');
  }

  ngOnInit(): void {
  }

}
