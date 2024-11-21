import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAkcjeComponent } from './dodaj-akcje.component';

describe('DodajAkcjeComponent', () => {
  let component: DodajAkcjeComponent;
  let fixture: ComponentFixture<DodajAkcjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DodajAkcjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajAkcjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
