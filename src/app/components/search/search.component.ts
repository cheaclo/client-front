import { ShopService } from './../../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  PATH_TO_IMAGES = 'assets/images/';
  IMAGES_EXT = '.png';

  shops: Shop[] = [];
  searchedProduct!: string;

  constructor(private shopService: ShopService) {
    shopService.getShopsName()
      .subscribe(shopsName => {
        for (let name of shopsName) {
          name = name.toLowerCase();
          let imageSource = this.PATH_TO_IMAGES + name + this.IMAGES_EXT;
          this.shops.push({name, imageSource, selected: true});
        }
      })
  }

  ngOnInit(): void {
    //TODO populate hints with last searched products
  }

  ngOnShopClick(event: Event, shop: Shop): void {
    shop.selected = !shop.selected;
  }

  ngOnSearch() {
  }

  getSelectedShops(): Shop[] {
    let selectedShops: Shop[]  = [];
    for (let shop of this.shops) {
      if (shop.selected)
        selectedShops.push(shop)
    }
    return selectedShops;
  }
}
