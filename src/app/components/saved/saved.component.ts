import { Router } from '@angular/router';
import { User } from './../../models/user';
import { ProductResponse } from './../../models/productResponse';
import { SavedService } from './../../services/saved.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {
  savedProducts: ProductResponse[] = [];

  constructor(private savedService: SavedService,
            private router: Router) {
    let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (user === null) {
      router.navigate(['/']);
    }

    savedService.getSavedProductsIds(user.id)
    .subscribe(idsResponse => {
      savedService.getSavedProducts(idsResponse.savedProducts)
      .subscribe(products => {this.savedProducts = products; console.log(products)})
    });
  }

  ngOnInit(): void {
  }

  ngRemoveFromSaved(product: ProductResponse): void {
    //send info to server
    this.savedProducts = this.savedProducts.filter(obj => obj !== product);
  }

  ngAlreadyBought(product: ProductResponse): void {
    //send info to server
    this.savedProducts = this.savedProducts.filter(obj => obj !== product);
  }
}
