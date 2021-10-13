import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/models/productResponse';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductResponse;

  constructor() { }

  ngOnInit(): void {
  }

  ngRedirectToProduct(): void {
    window.open(
      this.product.details.productUrl,
      '_blank'
    );
  }
}
