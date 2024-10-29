import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroComisionComponent } from './parametro-comision.component';

describe('ParametroComisionComponent', () => {
  let component: ParametroComisionComponent;
  let fixture: ComponentFixture<ParametroComisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametroComisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
