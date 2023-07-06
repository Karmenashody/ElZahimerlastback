import { TestBed } from '@angular/core/testing';

import { DashboredServiceService } from './dashbored-service.service';

describe('DashboredServiceService', () => {
  let service: DashboredServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboredServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
