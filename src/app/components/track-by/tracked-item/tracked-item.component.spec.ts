import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedItemComponent } from './tracked-item.component';

describe('TrackedItemComponent', () => {
  let component: TrackedItemComponent;
  let fixture: ComponentFixture<TrackedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackedItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
