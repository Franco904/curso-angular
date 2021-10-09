import { TestBed } from '@angular/core/testing';

import { ModeloDetalheResolver } from './modelo-detalhe.resolver';

describe('ModeloDetalheResolver', () => {
  let resolver: ModeloDetalheResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ModeloDetalheResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
