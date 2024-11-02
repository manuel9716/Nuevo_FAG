import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesPermisosComponent } from './perfiles-permisos.component';

describe('PerfilesPermisosComponent', () => {
  let component: PerfilesPermisosComponent;
  let fixture: ComponentFixture<PerfilesPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilesPermisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
