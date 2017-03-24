import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerLoginComponent } from './maker-login.component';

describe('MakerLoginComponent', () => {
  let component: MakerLoginComponent;
  let fixture: ComponentFixture<MakerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
