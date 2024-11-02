import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasReferenciaComponent } from './listas-referencia.component';

describe('ListasReferenciaComponent', () => {
  let component: ListasReferenciaComponent;
  let fixture: ComponentFixture<ListasReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasReferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
