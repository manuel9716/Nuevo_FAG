import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosMunicipiosComponent } from './departamentos-municipios.component';

describe('DepartamentosMunicipiosComponent', () => {
  let component: DepartamentosMunicipiosComponent;
  let fixture: ComponentFixture<DepartamentosMunicipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentosMunicipiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentosMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
