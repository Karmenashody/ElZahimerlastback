import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenddingComponent } from './pendding.component';

describe('PenddingComponent', () => {
  let component: PenddingComponent;
  let fixture: ComponentFixture<PenddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenddingComponent]
    });
    fixture = TestBed.createComponent(PenddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
