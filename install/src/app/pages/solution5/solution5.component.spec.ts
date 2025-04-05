import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution5Component } from './solution5.component';

describe('MainComponent', () => {
  let component: Solution5Component;
  let fixture: ComponentFixture<Solution5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solution5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
