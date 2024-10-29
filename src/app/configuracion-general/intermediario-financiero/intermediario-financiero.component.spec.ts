import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediarioFinancieroComponent } from './intermediario-financiero.component';

describe('IntermediarioFinancieroComponent', () => {
  let component: IntermediarioFinancieroComponent;
  let fixture: ComponentFixture<IntermediarioFinancieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediarioFinancieroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediarioFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
