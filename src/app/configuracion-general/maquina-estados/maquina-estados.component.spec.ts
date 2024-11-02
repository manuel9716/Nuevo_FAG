import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaEstadosComponent } from './maquina-estados.component';

describe('MaquinaEstadosComponent', () => {
  let component: MaquinaEstadosComponent;
  let fixture: ComponentFixture<MaquinaEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinaEstadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
