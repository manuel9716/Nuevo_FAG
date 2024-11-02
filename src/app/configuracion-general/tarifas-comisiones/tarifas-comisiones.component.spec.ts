import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifasComisionesComponent } from './tarifas-comisiones.component';

describe('TarifasComisionesComponent', () => {
  let component: TarifasComisionesComponent;
  let fixture: ComponentFixture<TarifasComisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifasComisionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifasComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
