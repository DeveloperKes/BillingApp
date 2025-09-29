import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorProductComponent } from './selector-product.component';

describe('SelectorProductComponent', () => {
  let component: SelectorProductComponent;
  let fixture: ComponentFixture<SelectorProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
