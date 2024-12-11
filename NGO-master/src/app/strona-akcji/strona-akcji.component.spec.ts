import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronaAkcji } from './strona-akcji.component';

describe('StronaAkcji', () => {
  let component: StronaAkcji;
  let fixture: ComponentFixture<StronaAkcji>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StronaAkcji]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StronaAkcji);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
