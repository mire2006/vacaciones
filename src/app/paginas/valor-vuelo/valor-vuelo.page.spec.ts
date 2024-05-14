import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValorVueloPage } from './valor-vuelo.page';

describe('ValorVueloPage', () => {
  let component: ValorVueloPage;
  let fixture: ComponentFixture<ValorVueloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorVueloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
