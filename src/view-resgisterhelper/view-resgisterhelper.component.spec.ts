import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResgisterhelperComponent } from './view-resgisterhelper.component';

describe('ViewResgisterhelperComponent', () => {
  let component: ViewResgisterhelperComponent;
  let fixture: ComponentFixture<ViewResgisterhelperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewResgisterhelperComponent]
    });
    fixture = TestBed.createComponent(ViewResgisterhelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
