import { Component, Input, OnInit } from '@angular/core';
import { CategoryResponse } from 'src/app/models/categoryResponse';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: CategoryResponse[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
