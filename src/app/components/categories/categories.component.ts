import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryResponse } from 'src/app/models/categoryResponse';
import { CategoryType } from 'src/app/models/categoryType';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() type: string = "";
  @Input() categories: CategoryResponse[] = [];
  @Output() changeCategory = new EventEmitter<string>();
  @Output() changeCategoryByShop = new EventEmitter<CategoryType>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnCategoryClick(category: CategoryResponse) {
    if (category.available) {
      this.changeCategory.emit(category.name);
      this.changeCategoryByShop.emit({
        category: category.name,
        type: this.type});
    }
  }
}
