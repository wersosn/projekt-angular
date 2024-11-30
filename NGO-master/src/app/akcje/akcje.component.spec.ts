import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjeComponent } from './akcje.component';

describe('AkcjeComponent', () => {
  let component: AkcjeComponent;
  let fixture: ComponentFixture<AkcjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkcjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkcjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
