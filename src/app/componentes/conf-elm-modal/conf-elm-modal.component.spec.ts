import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfElmModalComponent } from './conf-elm-modal.component';

describe('ConfElmModalComponent', () => {
  let component: ConfElmModalComponent;
  let fixture: ComponentFixture<ConfElmModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfElmModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfElmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
