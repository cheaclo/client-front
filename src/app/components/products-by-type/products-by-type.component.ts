import { CategoryResponse } from './../../models/categoryResponse';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductResponse } from 'src/app/models/productResponse';

@Component({
  selector: 'app-products-by-type',
  templateUrl: './products-by-type.component.html',
  styleUrls: ['./products-by-type.component.scss']
})
export class ProductsByTypeComponent implements OnInit {
  categories: CategoryResponse[] = [];
  products: ProductResponse[] = [
    {
      id: 1,
      details: {
        title: 'title',
        price: 23.5,
        regularPrice: 44.2,
        productUrl: 'https://www.c-and-a.com/eu/en/shop/sleeveless-blouse-2150336/2?categoryId=16199',
        imageUrl: 'https://www.c-and-a.com/productimages/b_rgb:ECECEC,c_scale,h_430,q_auto:eco,e_sharpen:70/v1626777793/2150336-2-01.jpg',
      },
      categories: {
        id: 1,
        name: 'Accessories',
      },
      shop: {
        id: 1,
        name: 'HM',
      },
      type: {
        id: 1,
        name: 'man',
      },
      lastUpdate: new Date(),
      hash: 2352352
    }
  ];

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      const type = params['type'];
      categoryService.getAllCategories(type)
      .subscribe(categoriesResponse => this.categories = categoriesResponse);
    });
   }

  ngOnInit(): void {
  }

}
