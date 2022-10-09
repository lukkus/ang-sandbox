import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSecondComponent } from './right-second.component';

describe('RightSecondComponent', () => {
  let component: RightSecondComponent;
  let fixture: ComponentFixture<RightSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
