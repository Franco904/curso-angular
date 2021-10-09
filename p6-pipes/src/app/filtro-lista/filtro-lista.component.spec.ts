import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroListaComponent } from './filtro-lista.component';

describe('FiltroListaComponent', () => {
  let component: FiltroListaComponent;
  let fixture: ComponentFixture<FiltroListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
