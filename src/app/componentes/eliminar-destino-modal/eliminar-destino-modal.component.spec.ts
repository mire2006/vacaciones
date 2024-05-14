import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EliminarDestinoModalComponent } from './eliminar-destino-modal.component';

describe('EliminarDestinoModalComponent', () => {
  let component: EliminarDestinoModalComponent;
  let fixture: ComponentFixture<EliminarDestinoModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EliminarDestinoModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarDestinoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
