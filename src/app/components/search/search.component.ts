import { Router } from '@angular/router';
import { User } from './../../models/user';
import { SearchService } from './../../services/search.service';
import { ProductService } from './../../services/product.service';
import { ShopService } from './../../services/shop.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
  @ViewChild('hints') hints!: ElementRef;
  searchInputUpdate = new Subject<string>();

  constructor(private shopService: ShopService,
              private productService: ProductService,
              private renderer: Renderer2,
              private searchService: SearchService,
              private router: Router) {
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
        this.fetchMatchedProducts(input);
      })
  }

  ngOnInit(): void {
  }

  ngOnShopClick(shop: Shop): void {
    shop.selected = !shop.selected;
    this.fetchMatchedProducts(this.searchedProduct);
  }

  ngOnSearch(): void {
    this.addSearchedPhrase();
    let shopsName = this.productService.retrieveShopsNames(this.getSelectedShops());
    this.router.navigate(['products-by-title', {'title': this.searchedProduct, 'shops': shopsName}]);
  }

  getSelectedShops(): Shop[] {
    let selectedShops: Shop[]  = [];
    for (let shop of this.shops) {
      if (shop.selected)
        selectedShops.push(shop)
    }
    return selectedShops;
  }

  fetchMatchedProducts(input: string): void {
    this.renderer.setProperty(this.hints.nativeElement, 'innerHTML', '');

    if (input === undefined || input.length == 0) {
      return;
    }

    this.productService.getFirstFiveMatchedProducts(input, this.getSelectedShops())
      .subscribe(products => {
        this.renderer.setProperty(this.hints.nativeElement, 'innerHTML', '');
        for (let product of products) {
          const a: HTMLParagraphElement = this.renderer.createElement('a');
          a.innerHTML = product.details.title.charAt(0).toUpperCase() + product.details.title.slice(1).toLowerCase();
          a.setAttribute('href', product.details.productUrl);
          a.setAttribute('target', '_blank');
          this.renderer.appendChild(this.hints.nativeElement, a)
        }
      });
  }

  addSearchedPhrase(): void {
    let userLogged = sessionStorage.getItem('userLogged');
    if (userLogged == 'true') {
      let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
      this.searchService.addPhrase(user.accountInfo.id, this.searchedProduct);
    }
  }
}
