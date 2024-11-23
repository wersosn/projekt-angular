import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjaAdministratorComponent } from './akcja-administrator.component';

describe('AkcjaAdministratorComponent', () => {
  let component: AkcjaAdministratorComponent;
  let fixture: ComponentFixture<AkcjaAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkcjaAdministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkcjaAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
