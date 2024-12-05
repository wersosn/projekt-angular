import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsunUczestnika } from './usun-uczestnika.component';

describe('UsunUczestnika', () => {
  let component: UsunUczestnika;
  let fixture: ComponentFixture<UsunUczestnika>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsunUczestnika]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsunUczestnika);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
