import { Component, Input, OnInit } from '@angular/core';
import { CategoryMap } from 'src/app/models/categoryMap';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: CategoryMap[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
