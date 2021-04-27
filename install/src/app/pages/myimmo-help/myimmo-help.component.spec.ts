import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImmoHelpComponent } from './myimmo-help.component';

describe('MainComponent', () => {
  let component: MyImmoHelpComponent;
  let fixture: ComponentFixture<MyImmoHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImmoHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImmoHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
