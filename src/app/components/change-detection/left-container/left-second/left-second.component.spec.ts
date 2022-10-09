import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSecondComponent } from './left-second.component';

describe('LeftSecondComponent', () => {
  let component: LeftSecondComponent;
  let fixture: ComponentFixture<LeftSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
