import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarticalComponent } from './addartical.component';

describe('AddarticalComponent', () => {
  let component: AddarticalComponent;
  let fixture: ComponentFixture<AddarticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddarticalComponent]
    });
    fixture = TestBed.createComponent(AddarticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
