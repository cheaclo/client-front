import { FavouriteService } from '../../services/favourite.service';
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

  constructor(private favouriteService: FavouriteService) {}

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

  ngAddToFavourite(): void {
    this.showActionBox = false;
    let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (user !== null) {
      this.favouriteService.addFavouriteProduct(user.id, this.product.id);
    }
  }
}
