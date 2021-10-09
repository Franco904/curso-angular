import { TestBed } from '@angular/core/testing';

import { ModelosActivatechildGuard } from './modelos-activatechild.guard';

describe('ModelosActivatechildGuard', () => {
  let guard: ModelosActivatechildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModelosActivatechildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
