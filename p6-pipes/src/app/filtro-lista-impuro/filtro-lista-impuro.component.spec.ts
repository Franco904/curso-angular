import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroListaImpuroComponent } from './filtro-lista-impuro.component';

describe('FiltroListaImpuroComponent', () => {
  let component: FiltroListaImpuroComponent;
  let fixture: ComponentFixture<FiltroListaImpuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroListaImpuroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroListaImpuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
