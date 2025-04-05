import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalGuideComponent } from './fiscal-guide.component';

describe('MainComponent', () => {
  let component: FiscalGuideComponent;
  let fixture: ComponentFixture<FiscalGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiscalGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
