import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoLegendaComponent } from './campo-legenda.component';

describe('CampoLegendaComponent', () => {
  let component: CampoLegendaComponent;
  let fixture: ComponentFixture<CampoLegendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoLegendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoLegendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
