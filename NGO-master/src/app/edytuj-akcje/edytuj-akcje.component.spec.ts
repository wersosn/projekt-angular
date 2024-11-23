import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujAkcjeComponent } from './edytuj-akcje.component';

describe('EdytujAkcjeComponent', () => {
  let component: EdytujAkcjeComponent;
  let fixture: ComponentFixture<EdytujAkcjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdytujAkcjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdytujAkcjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
