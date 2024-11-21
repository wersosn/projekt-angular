import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAkcjiComponent } from './blog-akcji.component';

describe('BlogAkcjiComponent', () => {
  let component: BlogAkcjiComponent;
  let fixture: ComponentFixture<BlogAkcjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAkcjiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAkcjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
