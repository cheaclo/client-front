import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryByShopResponse } from 'src/app/models/categoryByShopResponse';
import { CategoryType } from 'src/app/models/categoryType';
import { ProductResponse } from 'src/app/models/productResponse';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-by-shop',
  templateUrl: './products-by-shop.component.html',
  styleUrls: ['./products-by-shop.component.scss']
})
export class ProductsByShopComponent implements OnInit {
  categories: CategoryByShopResponse[] = [];
  products: ProductResponse[] = [];
  showCategories = false;
  shop: string = "";

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private route: ActivatedRoute) {

    route.params.subscribe(params => {
      this.shop = params['shop'];
      categoryService.getAllCategoriesByShop(this.shop)
      .subscribe(categoriesResponse => this.categories = categoriesResponse);


      productService.getAllProductsByShop(this.shop)
      .subscribe(products => {
        // Shuffle products
        this.products = products.sort((a, b) => 0.5 - Math.random());
      });
    });
   }

  ngOnInit(): void {
  }

  ngShowCategories(): void {
    this.showCategories = !this.showCategories;
  }

  ngChangeCategory(category: CategoryType): void {
    console.log(category);
  }
}
