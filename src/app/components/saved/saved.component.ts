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
  products: ProductResponse[] = [];

  constructor(private savedService: SavedService) {
    let user: User = JSON.parse(sessionStorage.getItem('user') || '{id: -1}');

    savedService.getSavedProductsIds(user.id)
    .subscribe(idsResponse => {
      savedService.getSavedProducts(idsResponse.savedProducts)
      .subscribe(products => {this.products = products; console.log(products)})
    });
  }

  ngOnInit(): void {
  }

}
