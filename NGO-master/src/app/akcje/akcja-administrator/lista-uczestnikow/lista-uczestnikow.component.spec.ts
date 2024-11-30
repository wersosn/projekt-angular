import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUczestnikowComponent } from './lista-uczestnikow.component';

describe('ListaUczestnikowComponent', () => {
  let component: ListaUczestnikowComponent;
  let fixture: ComponentFixture<ListaUczestnikowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUczestnikowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUczestnikowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
