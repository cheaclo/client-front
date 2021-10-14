import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  shopParam: string = "";
  shops: string[] = ['hm', 'ca', 'reserved', 'hm', 'ca', 'reserved', 'hm', 'ca', 'reserved', 'hm', 'ca', 'reserved'];

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.shopParam = params['shop'];
    });

  }

  ngOnInit(): void {
  }

}
