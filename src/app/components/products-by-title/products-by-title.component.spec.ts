import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByTitleComponent } from './products-by-title.component';

describe('ProductsByTitleComponent', () => {
  let component: ProductsByTitleComponent;
  let fixture: ComponentFixture<ProductsByTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
