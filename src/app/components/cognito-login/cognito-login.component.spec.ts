import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitoLoginComponent } from './cognito-login.component';

describe('CognitoLoginComponent', () => {
  let component: CognitoLoginComponent;
  let fixture: ComponentFixture<CognitoLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CognitoLoginComponent]
    });
    fixture = TestBed.createComponent(CognitoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
