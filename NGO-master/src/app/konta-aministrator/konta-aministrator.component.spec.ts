import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaAministratorComponent } from './konta-aministrator.component';

describe('KontaAministratorComponent', () => {
  let component: KontaAministratorComponent;
  let fixture: ComponentFixture<KontaAministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontaAministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontaAministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
