import { ProductResponse } from './../../models/productResponse';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductResponse;
  @Input() outerMarginBottom = true;
  showActionBox = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngRedirectToProduct(): void {
    window.open(
      this.product.details.productUrl,
      '_blank'
    );
  }

  ngToggleActionBox(): void {
    this.showActionBox = !this.showActionBox;
  }

  ngAddToCart(): void {
    let cart: ProductResponse[] = JSON.parse(sessionStorage.getItem('cart') || '{}');
    let duplicate = cart.find(product => this.product.id === product.id);
    if (duplicate === undefined) {
      cart.push(this.product);
      sessionStorage.setItem('cart', JSON.stringify(cart));
    }
    this.showActionBox = false;
  }

  ngAddToSaved(): void {
    this.showActionBox = false;
  }
}
