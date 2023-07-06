import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboredHelperComponent } from './dashbored-helper.component';

describe('DashboredHelperComponent', () => {
  let component: DashboredHelperComponent;
  let fixture: ComponentFixture<DashboredHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboredHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboredHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
