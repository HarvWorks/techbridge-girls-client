import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerProgressComponent } from './maker-progress.component';

describe('MakerProgressComponent', () => {
  let component: MakerProgressComponent;
  let fixture: ComponentFixture<MakerProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
