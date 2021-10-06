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
  shopName!: string;
  @ViewChild('hints') hints!: ElementRef;
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
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(input => {
        this.fetchMatchedShops(input);
      })
  }

  ngOnInit(): void {
  }

  ngOnSearch(): void {
    //TODO redirect to shop page - if exists
  }

  fetchMatchedShops(input: string): void {
    for (let child of this.hints.nativeElement.children) {
      this.renderer.removeChild(this.hints.nativeElement, child)
    }

    if (input.length == 0) {
      return;
    }

    this.shopService.getMatchedShops(input)
      .subscribe(shopsName => {
        for (let name of shopsName) {
          const p: HTMLParagraphElement = this.renderer.createElement('p');
          p.innerHTML = name.toLowerCase();
          this.renderer.appendChild(this.hints.nativeElement, p)
        }
      })
  }
}
