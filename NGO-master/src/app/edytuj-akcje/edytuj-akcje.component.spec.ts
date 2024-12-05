import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujAkcje } from './edytuj-akcje.component';

describe('EdytujAkcje', () => {
  let component: EdytujAkcje;
  let fixture: ComponentFixture<EdytujAkcje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdytujAkcje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdytujAkcje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
