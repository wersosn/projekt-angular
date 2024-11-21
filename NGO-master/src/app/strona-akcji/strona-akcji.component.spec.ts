import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronaAkcjiComponent } from './strona-akcji.component';

describe('StronaAkcjiComponent', () => {
  let component: StronaAkcjiComponent;
  let fixture: ComponentFixture<StronaAkcjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StronaAkcjiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StronaAkcjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
