import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityGraphComponent } from './activity-graph.component';

describe('ActivityGraphComponent', () => {
  let component: ActivityGraphComponent;
  let fixture: ComponentFixture<ActivityGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
