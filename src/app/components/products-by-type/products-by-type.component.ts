import { CategoryResponse } from './../../models/categoryResponse';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-by-type',
  templateUrl: './products-by-type.component.html',
  styleUrls: ['./products-by-type.component.scss']
})
export class ProductsByTypeComponent implements OnInit {
  categories: CategoryResponse[] = [];

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router) {

    this.route.params.subscribe(params => {
      const type = params['type'];
      categoryService.getAllCategories(type)
      .subscribe(categoriesResponse => this.categories = categoriesResponse);
    });
   }

  ngOnInit(): void {
  }

}
