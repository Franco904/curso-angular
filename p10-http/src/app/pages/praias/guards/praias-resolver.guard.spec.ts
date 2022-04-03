import { TestBed } from '@angular/core/testing';

import { PraiasResolverGuard } from './praias-resolver.guard';

describe('PraiasResolverGuard', () => {
  let guard: PraiasResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PraiasResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
