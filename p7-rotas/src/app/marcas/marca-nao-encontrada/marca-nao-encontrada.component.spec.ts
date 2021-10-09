import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaNaoEncontradaComponent } from './marca-nao-encontrada.component';

describe('MarcaNaoEncontradaComponent', () => {
  let component: MarcaNaoEncontradaComponent;
  let fixture: ComponentFixture<MarcaNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaNaoEncontradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
