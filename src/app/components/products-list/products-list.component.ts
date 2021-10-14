import { ProductResponse } from 'src/app/models/productResponse';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  RENDER_SIZE = 24;

  @Input() products: ProductResponse[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngRenderProducts(): void {

  }
}
