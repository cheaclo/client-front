import { SavedService } from './../../services/saved.service';
import { ProductResponse } from './../../models/productResponse';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductResponse;
  @Input() outerMarginBottom = true;
  showActionBox = false;

  constructor(private savedService: SavedService) {}

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
    let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (user !== null) {
      this.savedService.addSavedProduct(user.id, this.product.id);
    }
  }
}
