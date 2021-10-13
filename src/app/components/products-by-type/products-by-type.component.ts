import { Component, OnInit } from '@angular/core';
import { CategoryMap } from 'src/app/models/categoryMap';

@Component({
  selector: 'app-products-by-type',
  templateUrl: './products-by-type.component.html',
  styleUrls: ['./products-by-type.component.scss']
})
export class ProductsByTypeComponent implements OnInit {
  categories: CategoryMap[] = [
    {name: 'cat1', available: true},
    {name: 'ghg', available: true},
    {name: 'hjkhjk', available: false},
    {name: 'cat1', available: true},
    {name: 'cat1', available: true},
    {name: 'safasfas', available: true},
    {name: 'cat1', available: false},
    {name: 'fasfsa', available: false},
    {name: 'sdgsdgsdgdsg', available: true},
    {name: 'cat1', available: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
