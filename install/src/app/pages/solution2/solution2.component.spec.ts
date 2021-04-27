import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution2Component } from './solution2.component';

describe('MainComponent', () => {
  let component: Solution2Component;
  let fixture: ComponentFixture<Solution2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solution2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
