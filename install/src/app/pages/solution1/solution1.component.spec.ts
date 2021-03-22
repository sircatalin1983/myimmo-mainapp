import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution1Component } from './solution1.component';

describe('MainComponent', () => {
  let component: Solution1Component;
  let fixture: ComponentFixture<Solution1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solution1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
