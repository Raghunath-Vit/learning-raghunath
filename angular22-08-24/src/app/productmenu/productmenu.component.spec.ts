import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmenuComponent } from './productmenu.component';

describe('ProductmenuComponent', () => {
  let component: ProductmenuComponent;
  let fixture: ComponentFixture<ProductmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
