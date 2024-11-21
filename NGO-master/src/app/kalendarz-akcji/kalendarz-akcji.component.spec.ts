import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarzAkcjiComponent } from './kalendarz-akcji.component';

describe('KalendarzAkcjiComponent', () => {
  let component: KalendarzAkcjiComponent;
  let fixture: ComponentFixture<KalendarzAkcjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KalendarzAkcjiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalendarzAkcjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
