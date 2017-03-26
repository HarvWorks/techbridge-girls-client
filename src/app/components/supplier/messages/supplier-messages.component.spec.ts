import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMessagesComponent } from './supplier-messages.component';

describe('SupplierMessagesComponent', () => {
  let component: SupplierMessagesComponent;
  let fixture: ComponentFixture<SupplierMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
