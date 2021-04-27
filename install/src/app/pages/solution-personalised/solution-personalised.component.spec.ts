import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionPersonalisedComponent } from './solution-personalised.component';

describe('MainComponent', () => {
  let component: SolutionPersonalisedComponent;
  let fixture: ComponentFixture<SolutionPersonalisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionPersonalisedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionPersonalisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
