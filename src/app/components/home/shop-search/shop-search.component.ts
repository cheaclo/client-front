import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ShopService } from './../../../services/shop.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  searchedShop!: string;
  shopsName: string[] = [];
  searchInputUpdate = new Subject<string>();

  constructor(private shopService: ShopService,
              private renderer: Renderer2) {
    shopService.getShopsName()
      .subscribe(shopsName => {
        for (let name of shopsName) {
          name = name.toLowerCase();
          let imageSource = this.PATH_TO_IMAGES + name + this.IMAGES_EXT;
          this.shops.push({name, imageSource, selected: true});
        }
      })

    this.searchInputUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(input => {
        this.fetchMatchedShops(input);
      })
  }

  ngOnInit(): void {
  }

  fetchMatchedShops(input: string): void {
    this.shopsName = [];
    if (input.length == 0) {
      return;
    }

    this.shopService.getMatchedShops(input)
      .subscribe(shopsName => this.shopsName = shopsName.slice(0, 5))
  }
}
