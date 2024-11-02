import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProductorComponent } from './tipo-productor.component';

describe('TipoProductorComponent', () => {
  let component: TipoProductorComponent;
  let fixture: ComponentFixture<TipoProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
