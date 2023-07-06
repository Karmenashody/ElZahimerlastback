import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHelperComponent } from './form-helper.component';

describe('FormHelperComponent', () => {
  let component: FormHelperComponent;
  let fixture: ComponentFixture<FormHelperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHelperComponent]
    });
    fixture = TestBed.createComponent(FormHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
