import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajUczestnikaComponent } from './dodaj-uczestnika.component';

describe('DodajUczestnikaComponent', () => {
  let component: DodajUczestnikaComponent;
  let fixture: ComponentFixture<DodajUczestnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DodajUczestnikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajUczestnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
