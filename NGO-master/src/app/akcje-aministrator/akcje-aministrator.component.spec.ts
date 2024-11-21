import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjeAministratorComponent } from './akcje-aministrator.component';

describe('AkcjeAministratorComponent', () => {
  let component: AkcjeAministratorComponent;
  let fixture: ComponentFixture<AkcjeAministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkcjeAministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkcjeAministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
