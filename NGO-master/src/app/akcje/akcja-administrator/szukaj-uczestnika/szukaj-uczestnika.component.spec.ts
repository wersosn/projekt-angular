import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzukajUczestnika } from './szukaj-uczestnika.component';

describe('SzukajUczestnika', () => {
  let component: SzukajUczestnika;
  let fixture: ComponentFixture<SzukajUczestnika>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzukajUczestnika]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzukajUczestnika);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
