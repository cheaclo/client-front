import { ShopService } from './../../services/shop.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  shopParam: string = "";
  shops: string[] = [];

  constructor(private route: ActivatedRoute,
              private shopService: ShopService) {
    route.params.subscribe(params => {
      this.shopParam = params['shop'];

      shopService.getMatchedShops(this.shopParam)
      .subscribe(shops => this.shops = shops);
    });
  }

  ngOnInit(): void {
  }

}
