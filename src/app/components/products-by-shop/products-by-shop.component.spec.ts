import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByShopComponent } from './products-by-shop.component';

describe('ProductsByShopComponent', () => {
  let component: ProductsByShopComponent;
  let fixture: ComponentFixture<ProductsByShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
