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

  constructor(private favouriteService: FavouriteService,
            private router: Router) {
    let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (user === null) {
      router.navigate(['/']);
    }

    favouriteService.getFavouriteProductsIds(user.id)
    .subscribe(idsResponse => {
      favouriteService.getFavouriteProducts(idsResponse.favouriteProducts)
      .subscribe(products => {this.favouriteProducts = products; console.log(products)})
    });
  }

  ngOnInit(): void {
  }

  ngRemoveFromFavourite(product: ProductResponse): void {
    this.favouriteService.deleteFavouriteProduct(product.id);
    this.favouriteProducts = this.favouriteProducts.filter(obj => obj !== product);
  }

  ngAlreadyBought(product: ProductResponse): void {
    //send info to server
    this.favouriteService.deleteFavouriteProduct(product.id);
    this.favouriteProducts = this.favouriteProducts.filter(obj => obj !== product);
  }
}
