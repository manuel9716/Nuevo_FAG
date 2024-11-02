import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesPagoComponent } from './modalidades-pago.component';

describe('ModalidadesPagoComponent', () => {
  let component: ModalidadesPagoComponent;
  let fixture: ComponentFixture<ModalidadesPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
