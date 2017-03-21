import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMakerComponent } from './register-maker.component';

describe('RegisterMakerComponent', () => {
  let component: RegisterMakerComponent;
  let fixture: ComponentFixture<RegisterMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
