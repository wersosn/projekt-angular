import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAkcje } from './dodaj-akcje.component';

describe('DodajAkcje', () => {
  let component: DodajAkcje;
  let fixture: ComponentFixture<DodajAkcje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DodajAkcje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajAkcje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
