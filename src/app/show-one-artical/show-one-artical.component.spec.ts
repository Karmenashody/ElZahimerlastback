import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneArticalComponent } from './show-one-artical.component';

describe('ShowOneArticalComponent', () => {
  let component: ShowOneArticalComponent;
  let fixture: ComponentFixture<ShowOneArticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOneArticalComponent]
    });
    fixture = TestBed.createComponent(ShowOneArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
