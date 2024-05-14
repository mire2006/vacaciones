import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResultadosBusquedaComponent } from './resultados-busqueda.component';

describe('ResultadosBusquedaComponent', () => {
  let component: ResultadosBusquedaComponent;
  let fixture: ComponentFixture<ResultadosBusquedaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ResultadosBusquedaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadosBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
