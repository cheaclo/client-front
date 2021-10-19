import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredProductComponent } from './stored-product.component';

describe('StoredProductComponent', () => {
  let component: StoredProductComponent;
  let fixture: ComponentFixture<StoredProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
