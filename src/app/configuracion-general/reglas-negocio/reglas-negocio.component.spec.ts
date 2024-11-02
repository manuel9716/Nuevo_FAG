import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglasNegocioComponent } from './reglas-negocio.component';

describe('ReglasNegocioComponent', () => {
  let component: ReglasNegocioComponent;
  let fixture: ComponentFixture<ReglasNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglasNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglasNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
