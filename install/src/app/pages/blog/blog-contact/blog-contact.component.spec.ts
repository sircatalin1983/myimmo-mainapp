import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContactComponent } from './blog-contact.component';

describe('MainComponent', () => {
  let component: BlogContactComponent;
  let fixture: ComponentFixture<BlogContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
