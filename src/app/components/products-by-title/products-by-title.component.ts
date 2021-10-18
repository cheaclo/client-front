import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductResponse } from 'src/app/models/productResponse';
import { Shop } from 'src/app/models/shop';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-by-title',
  templateUrl: './products-by-title.component.html',
  styleUrls: ['./products-by-title.component.scss']
})
export class ProductsByTitleComponent implements OnInit {
  searchedTitle = "";
  selectedShops = "";
  products: ProductResponse[] = [];

  constructor(private categoryService: CategoryService,
            private productService: ProductService,
            private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.searchedTitle = params['title'];
      this.selectedShops = params['shops'];

      this.productService.getMatchedProductsByShopString(this.searchedTitle, this.selectedShops)
      .subscribe(products => {
        this.products = products;
      });
    });
  }

  ngOnInit(): void {
  }

}
