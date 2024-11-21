import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjeWolontariuszComponent } from './akcje-wolontariusz.component';

describe('AkcjeWolontariuszComponent', () => {
  let component: AkcjeWolontariuszComponent;
  let fixture: ComponentFixture<AkcjeWolontariuszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkcjeWolontariuszComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkcjeWolontariuszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
