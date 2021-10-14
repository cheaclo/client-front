import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryResponse } from 'src/app/models/categoryResponse';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: CategoryResponse[] = [];
  @Output() changeCategory = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnCategoryClick(category: CategoryResponse) {
    if (category.available) {
      this.changeCategory.emit(category.name);
    }
  }
}
