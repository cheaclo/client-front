import { ShopService } from './../../../services/shop.service';
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

  constructor(private shopService: ShopService) {
    shopService.getShopsName()
      .subscribe(shopsName => {
        for (let name of shopsName) {
          name = name.toLowerCase();
          let imageSource = this.PATH_TO_IMAGES + name + this.IMAGES_EXT;
          this.shops.push({name, imageSource});
        }
      })

  }

  ngOnInit(): void {
  }

}
