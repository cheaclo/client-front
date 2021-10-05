import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ShopService } from './../../../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shop-search',
  templateUrl: './shop-search.component.html',
  styleUrls: ['./shop-search.component.scss']
})
export class ShopSearchComponent implements OnInit {
  PATH_TO_IMAGES = 'assets/images/';
  IMAGES_EXT = '.png';

  shops: Shop[] = [];
  shopName!: string;
  hints!: string[];
  searchInputUpdate = new Subject<string>();
  hintsToAdd!: string;

  constructor(private shopService: ShopService) {
    shopService.getShopsName()
      .subscribe(shopsName => {
        for (let name of shopsName) {
          name = name.toLowerCase();
          let imageSource = this.PATH_TO_IMAGES + name + this.IMAGES_EXT;
          this.shops.push({name, imageSource});
        }
      })

    this.searchInputUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(input => {
        this.fetchMatchedShops(input);
      })
  }

  ngOnInit(): void {
  }

  ngOnSearch(): void {
    console.log(this.shopName);
  }

  fetchMatchedShops(input: string): void {
    this.hintsToAdd = "";
    if (input.length == 0)
      return;

    this.shopService.getMatchedShops(input)
      .subscribe(shopsName => {
        for (let name of shopsName) {
          this.hintsToAdd += '<p>' + name.toLowerCase() + '</p>';
        }
      })
  }
}
