import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzukajUczestnikaComponent } from './szukaj-uczestnika.component';

describe('SzukajUczestnikaComponent', () => {
  let component: SzukajUczestnikaComponent;
  let fixture: ComponentFixture<SzukajUczestnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzukajUczestnikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzukajUczestnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
