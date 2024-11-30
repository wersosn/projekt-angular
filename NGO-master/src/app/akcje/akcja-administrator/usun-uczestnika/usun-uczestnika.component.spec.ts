import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsunUczestnikaComponent } from './usun-uczestnika.component';

describe('UsunUczestnikaComponent', () => {
  let component: UsunUczestnikaComponent;
  let fixture: ComponentFixture<UsunUczestnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsunUczestnikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsunUczestnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
