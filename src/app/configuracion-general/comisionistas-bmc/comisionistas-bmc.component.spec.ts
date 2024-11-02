import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionistasBmcComponent } from './comisionistas-bmc.component';

describe('ComisionistasBmcComponent', () => {
  let component: ComisionistasBmcComponent;
  let fixture: ComponentFixture<ComisionistasBmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComisionistasBmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionistasBmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
