import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Akcje } from './akcje.component';

describe('Akcje', () => {
  let component: Akcje;
  let fixture: ComponentFixture<Akcje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Akcje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Akcje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
