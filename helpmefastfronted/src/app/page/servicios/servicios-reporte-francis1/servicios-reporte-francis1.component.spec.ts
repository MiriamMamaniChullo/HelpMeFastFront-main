import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosReporteFrancis1Component } from './servicios-reporte-francis1.component';

describe('ServiciosReporteFrancis1Component', () => {
  let component: ServiciosReporteFrancis1Component;
  let fixture: ComponentFixture<ServiciosReporteFrancis1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosReporteFrancis1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosReporteFrancis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
