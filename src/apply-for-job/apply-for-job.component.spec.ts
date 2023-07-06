import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForJobComponent } from './apply-for-job.component';

describe('ApplyForJobComponent', () => {
  let component: ApplyForJobComponent;
  let fixture: ComponentFixture<ApplyForJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyForJobComponent]
    });
    fixture = TestBed.createComponent(ApplyForJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
