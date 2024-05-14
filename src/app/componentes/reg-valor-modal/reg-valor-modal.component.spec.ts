import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegValorModalComponent } from './reg-valor-modal.component';

describe('RegValorModalComponent', () => {
  let component: RegValorModalComponent;
  let fixture: ComponentFixture<RegValorModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RegValorModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegValorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
