import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjaAministratorComponent } from './akcja-aministrator.component';

describe('AkcjaAministratorComponent', () => {
  let component: AkcjaAministratorComponent;
  let fixture: ComponentFixture<AkcjaAministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkcjaAministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkcjaAministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
