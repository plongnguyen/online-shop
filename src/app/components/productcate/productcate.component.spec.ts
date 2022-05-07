import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcateComponent } from './productcate.component';

describe('ProductcateComponent', () => {
  let component: ProductcateComponent;
  let fixture: ComponentFixture<ProductcateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
