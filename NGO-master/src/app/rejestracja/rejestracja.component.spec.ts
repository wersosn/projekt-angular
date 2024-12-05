import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rejestracja } from './rejestracja.component';

describe('Rejestracja', () => {
  let component: Rejestracja;
  let fixture: ComponentFixture<Rejestracja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rejestracja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rejestracja);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
