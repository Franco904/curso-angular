import { TestBed } from '@angular/core/testing';

import { ModelosDeactivateGuard } from './modelos-deactivate.guard';

describe('ModelosDeactivateGuard', () => {
  let guard: ModelosDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModelosDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
