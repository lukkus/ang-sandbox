import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProgrammingComponent } from './reactive-programming.component';

describe('ReactiveProgrammingComponent', () => {
  let component: ReactiveProgrammingComponent;
  let fixture: ComponentFixture<ReactiveProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveProgrammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
