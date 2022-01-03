import { TestBed } from '@angular/core/testing';

import { PraiasService } from './praias.service';

describe('PraiasService', () => {
  let service: PraiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
