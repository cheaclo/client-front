import { ProductResponse } from 'src/app/models/productResponse';
import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: ProductResponse[] = [];
  @Input() numOfProducts = 0;
  page!: number;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngOnPageChange(page: number): void {
    this.page = page;
    window.scroll(0, 0);
  }
}
