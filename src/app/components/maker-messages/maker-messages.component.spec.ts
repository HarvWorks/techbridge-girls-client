import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerMessagesComponent } from './maker-messages.component';

describe('MakerMessagesComponent', () => {
  let component: MakerMessagesComponent;
  let fixture: ComponentFixture<MakerMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
