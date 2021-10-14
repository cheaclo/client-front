import { ProductService } from './../../services/product.service';
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
  products: ProductResponse[] = [];
  showCategories = false;
  type: string = "";

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private route: ActivatedRoute) {

    route.params.subscribe(params => {
      this.type = params['type'];
      categoryService.getAllCategories(this.type)
      .subscribe(categoriesResponse => this.categories = categoriesResponse);

      productService.getAllProductsByType(this.type)
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
    console.log('Category name ' + category);

    this.productService.getAllProductsByTypeAndCategory(this.type, category)
      .subscribe(products => {
        this.products = products;
      });
  }
}
