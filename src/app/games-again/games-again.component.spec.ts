import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAgainComponent } from './games-again.component';

describe('GamesAgainComponent', () => {
  let component: GamesAgainComponent;
  let fixture: ComponentFixture<GamesAgainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesAgainComponent]
    });
    fixture = TestBed.createComponent(GamesAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
