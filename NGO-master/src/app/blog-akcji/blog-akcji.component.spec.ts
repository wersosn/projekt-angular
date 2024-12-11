import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAkcji } from './blog-akcji.component';

describe('BlogAkcji', () => {
  let component: BlogAkcji;
  let fixture: ComponentFixture<BlogAkcji>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAkcji]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAkcji);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
