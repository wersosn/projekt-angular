import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjaComponent } from './akcja.component';

describe('AkcjaComponent', () => {
  let component: AkcjaComponent;
  let fixture: ComponentFixture<AkcjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkcjaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkcjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
