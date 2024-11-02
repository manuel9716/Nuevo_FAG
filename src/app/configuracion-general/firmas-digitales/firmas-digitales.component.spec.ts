import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmasDigitalesComponent } from './firmas-digitales.component';

describe('FirmasDigitalesComponent', () => {
  let component: FirmasDigitalesComponent;
  let fixture: ComponentFixture<FirmasDigitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmasDigitalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmasDigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
