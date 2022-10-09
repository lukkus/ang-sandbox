import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFirstComponent } from './right-first.component';

describe('RightFirstComponent', () => {
  let component: RightFirstComponent;
  let fixture: ComponentFixture<RightFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
