import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResgisterComponent } from './view-resgister.component';

describe('ViewResgisterComponent', () => {
  let component: ViewResgisterComponent;
  let fixture: ComponentFixture<ViewResgisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewResgisterComponent]
    });
    fixture = TestBed.createComponent(ViewResgisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
