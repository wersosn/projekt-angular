import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajUczestnika } from './dodaj-uczestnika.component';

describe('DodajUczestnika', () => {
  let component: DodajUczestnika;
  let fixture: ComponentFixture<DodajUczestnika>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DodajUczestnika]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajUczestnika);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
