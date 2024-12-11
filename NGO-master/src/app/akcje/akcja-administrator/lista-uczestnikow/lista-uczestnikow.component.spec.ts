import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUczestnikow } from './lista-uczestnikow.component';

describe('ListaUczestnikow', () => {
  let component: ListaUczestnikow;
  let fixture: ComponentFixture<ListaUczestnikow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUczestnikow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUczestnikow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
