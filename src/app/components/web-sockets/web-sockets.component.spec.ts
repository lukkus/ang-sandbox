import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketsComponent } from './web-sockets.component';

describe('WebSocketsComponent', () => {
  let component: WebSocketsComponent;
  let fixture: ComponentFixture<WebSocketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebSocketsComponent]
    });
    fixture = TestBed.createComponent(WebSocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
