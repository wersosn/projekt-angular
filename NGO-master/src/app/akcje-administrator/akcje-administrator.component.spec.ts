import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjeAdministratorComponent } from './akcje-administrator.component';

describe('AkcjeAdministratorComponent', () => {
  let component: AkcjeAdministratorComponent;
  let fixture: ComponentFixture<AkcjeAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkcjeAdministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkcjeAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
