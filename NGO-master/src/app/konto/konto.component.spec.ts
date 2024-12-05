import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Konto } from './konto.component';

describe('Konto', () => {
  let component: Konto;
  let fixture: ComponentFixture<Konto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Konto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Konto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
