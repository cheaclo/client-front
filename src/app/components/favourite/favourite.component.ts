import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ProductResponse } from '../../models/productResponse';
import { FavouriteService } from '../../services/favourite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  favouriteProducts: ProductResponse[] = [];
  user!: User;

  constructor(private favouriteService: FavouriteService,
            private router: Router) {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (this.user === null) {
      router.navigate(['/']);
    }

    favouriteService.getFavouriteProductsIds(this.user.id)
    .subscribe(idsResponse => {
      favouriteService.getFavouriteProducts(idsResponse.favouriteProducts)
      .subscribe(products => {this.favouriteProducts = products; console.log(products)})
    });
  }

  ngOnInit(): void {
  }

  ngRemoveFromFavourite(product: ProductResponse): void {
    this.favouriteService.deleteFavouriteProduct(product.id, this.user.id);
    this.favouriteProducts = this.favouriteProducts.filter(obj => obj !== product);
  }

  ngAlreadyBought(product: ProductResponse): void {
    //send info to server
    this.favouriteService.deleteFavouriteProduct(product.id, this.user.id);
    this.favouriteProducts = this.favouriteProducts.filter(obj => obj !== product);
  }
}
