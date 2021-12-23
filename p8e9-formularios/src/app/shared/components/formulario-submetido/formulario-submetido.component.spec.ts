import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSubmetidoComponent } from './formulario-submetido.component';

describe('FormularioSubmetidoComponent', () => {
  let component: FormularioSubmetidoComponent;
  let fixture: ComponentFixture<FormularioSubmetidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSubmetidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSubmetidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
