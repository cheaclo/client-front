import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryResponse } from 'src/app/models/categoryResponse';
import { ProductResponse } from 'src/app/models/productResponse';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-by-shop',
  templateUrl: './products-by-shop.component.html',
  styleUrls: ['./products-by-shop.component.scss']
})
export class ProductsByShopComponent implements OnInit {
  categories: CategoryResponse[] = [];
  products: ProductResponse[] = [];
  showCategories = false;
  shop: string = "";

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private route: ActivatedRoute) {

    route.params.subscribe(params => {
      this.shop = params['shop'];
      categoryService.getAllCategories(this.shop)
      .subscribe(categoriesResponse => this.categories = categoriesResponse);

      productService.getAllProductsByType(this.shop)
      .subscribe(products => {
        this.products = products;
      });
    });

   }

  ngOnInit(): void {
  }

  ngShowCategories(): void {
    this.showCategories = !this.showCategories;
  }

  ngChangeCategory(category: string): void {
  }
}
