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
  @Input() showHeart = true;
  heart = {
    active: false,
    deactivePath: 'assets/icons/heart-empty.svg',
    activePath: 'assets/icons/heart-full.svg'
  }
  user!: User;

  constructor(private favouriteService: FavouriteService) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (this.user === null) {
      this.showHeart = false;
    } else {
      this.favouriteService.findFavouriteProduct(this.product.id, this.user.id)
      .subscribe(resposne => {
        if (resposne.success)
          this.heart.active = true
      });
    }
  }

  ngRedirectToProduct(): void {
    window.open(
      this.product.details.productUrl,
      '_blank'
    );
  }

  ngToggleFavourite(): void {
    if (this.heart.active) {
      this.favouriteService.deleteFavouriteProduct(this.product.id, this.user.id);
    } else {
      let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
      if (user !== null) {
        this.favouriteService.addFavouriteProduct(user.id, this.product.id);
      }
    }

    this.heart.active = !this.heart.active;
  }
}
