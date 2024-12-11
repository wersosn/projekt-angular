import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Akcja } from './akcja.component';

describe('Akcja', () => {
  let component: Akcja;
  let fixture: ComponentFixture<Akcja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Akcja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Akcja);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
