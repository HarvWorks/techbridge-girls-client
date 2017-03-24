import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierProgressComponent } from './supplier-progress.component';

describe('SupplierProgressComponent', () => {
  let component: SupplierProgressComponent;
  let fixture: ComponentFixture<SupplierProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
