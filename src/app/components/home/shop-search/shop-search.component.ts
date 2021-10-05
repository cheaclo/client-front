import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop';

@Component({
  selector: 'app-shop-search',
  templateUrl: './shop-search.component.html',
  styleUrls: ['./shop-search.component.scss']
})
export class ShopSearchComponent implements OnInit {
  PATH_TO_IMAGES = 'assets/images/';
  IMAGES_EXT = '.png';
  shops: Shop[] = [];

  //TODO: replace this list with service incjection
  tempNames: string[] = ['hm', 'ca', 'reserved'];

  constructor() {
    for (let name of this.tempNames) {
      let imageSource = this.PATH_TO_IMAGES + name + this.IMAGES_EXT;
      this.shops.push({name, imageSource});
    }
  }

  ngOnInit(): void {
  }

}
