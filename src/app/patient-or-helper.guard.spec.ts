import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { patientOrHelperGuard } from './patient-or-helper.guard';

describe('patientOrHelperGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => patientOrHelperGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
