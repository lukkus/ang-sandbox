import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwdComponent } from './rwd.component';

describe('RwdComponent', () => {
  let component: RwdComponent;
  let fixture: ComponentFixture<RwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
