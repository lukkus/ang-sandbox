import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFirstComponent } from './left-first.component';

describe('LeftFirstComponent', () => {
  let component: LeftFirstComponent;
  let fixture: ComponentFixture<LeftFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
