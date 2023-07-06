import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowarticalsComponent } from './showarticals.component';

describe('ShowarticalsComponent', () => {
  let component: ShowarticalsComponent;
  let fixture: ComponentFixture<ShowarticalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowarticalsComponent]
    });
    fixture = TestBed.createComponent(ShowarticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
