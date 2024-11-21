import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjaWolontariuszComponent } from './akcja-wolontariusz.component';

describe('AkcjaWolontariuszComponent', () => {
  let component: AkcjaWolontariuszComponent;
  let fixture: ComponentFixture<AkcjaWolontariuszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkcjaWolontariuszComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkcjaWolontariuszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
