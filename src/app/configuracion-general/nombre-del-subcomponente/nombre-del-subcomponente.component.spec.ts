import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreDelSubcomponenteComponent } from './nombre-del-subcomponente.component';

describe('NombreDelSubcomponenteComponent', () => {
  let component: NombreDelSubcomponenteComponent;
  let fixture: ComponentFixture<NombreDelSubcomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreDelSubcomponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreDelSubcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
