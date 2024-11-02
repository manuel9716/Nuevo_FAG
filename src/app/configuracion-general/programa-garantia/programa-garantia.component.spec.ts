import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaGarantiaComponent } from './programa-garantia.component';

describe('ProgramaGarantiaComponent', () => {
  let component: ProgramaGarantiaComponent;
  let fixture: ComponentFixture<ProgramaGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramaGarantiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
