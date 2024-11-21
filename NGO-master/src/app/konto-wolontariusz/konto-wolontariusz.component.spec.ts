import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontoWolontariuszComponent } from './konto-wolontariusz.component';

describe('KontoWolontariuszComponent', () => {
  let component: KontoWolontariuszComponent;
  let fixture: ComponentFixture<KontoWolontariuszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontoWolontariuszComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontoWolontariuszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
