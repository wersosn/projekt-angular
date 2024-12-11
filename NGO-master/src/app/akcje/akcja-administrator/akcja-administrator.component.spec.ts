import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjaAdministrator } from './akcja-administrator.component';

describe('AkcjaAdministrator', () => {
  let component: AkcjaAdministrator;
  let fixture: ComponentFixture<AkcjaAdministrator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkcjaAdministrator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkcjaAdministrator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
