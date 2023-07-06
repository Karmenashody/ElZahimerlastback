import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndtestComponent } from './endtest.component';

describe('EndtestComponent', () => {
  let component: EndtestComponent;
  let fixture: ComponentFixture<EndtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndtestComponent]
    });
    fixture = TestBed.createComponent(EndtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
