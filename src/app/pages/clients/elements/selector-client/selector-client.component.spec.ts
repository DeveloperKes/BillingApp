import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorClientComponent } from './selector-client.component';

describe('SelectorClientComponent', () => {
  let component: SelectorClientComponent;
  let fixture: ComponentFixture<SelectorClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
