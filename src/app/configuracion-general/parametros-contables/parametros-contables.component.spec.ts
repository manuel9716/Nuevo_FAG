import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosContablesComponent } from './parametros-contables.component';

describe('ParametrosContablesComponent', () => {
  let component: ParametrosContablesComponent;
  let fixture: ComponentFixture<ParametrosContablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosContablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosContablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
