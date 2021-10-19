import { ProductResponse } from './../../models/productResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: ProductResponse[] = [];
  temp = '[{"id":61145,"details":{"title":"Multipack of 3 - baby sleepsuit - organic cotton","price":17.99,"regularPrice":10.99,"productUrl":"https://www.c-and-a.com/eu/en/shop/multipack-of-3-baby-sleepsuit-organic-cotton-2141067/2?categoryId=16107","imageUrl":"https://www.c-and-a.com/productimages/b_rgb:ECECEC,c_scale,h_430,q_auto:eco,e_sharpen:70/v1623397792/2141067-2-08.jpg"},"categories":[{"id":2,"name":"Babies"}],"shop":{"id":2,"name":"CA"},"type":{"id":3,"name":"Kid"},"lastUpdate":"2021-10-14T15:31:50.229+00:00","hash":-1755572855},{"id":61466,"details":{"title":"PAW Patrol - long sleeve T-shirt - organic cotton - shiny","price":9.99,"regularPrice":7.99,"productUrl":"https://www.c-and-a.com/eu/en/shop/paw-patrol-long-sleeve-t-shirt-organic-cotton-shiny-2127024/1?categoryId=43530","imageUrl":"https://www.c-and-a.com/productimages/b_rgb:ECECEC,c_scale,h_430,q_auto:eco,e_sharpen:70/v1607467099/2127024-1-08.jpg"},"categories":[{"id":11,"name":"Others"}],"shop":{"id":2,"name":"CA"},"type":{"id":3,"name":"Kid"},"lastUpdate":"2021-10-14T15:31:53.815+00:00","hash":1590495512}]';

  constructor() {
    this.cartProducts = JSON.parse(this.temp); //JSON.parse(sessionStorage.getItem('cart') || '{}');
    this.cartProducts.push(this.cartProducts[0]);
    this.cartProducts.push(this.cartProducts[1]);
  }

  ngOnInit(): void {
  }

}
