import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormctrlInFormgrpComponent } from './formctrl-in-formgrp.component';

describe('FormctrlInFormgrpComponent', () => {
  let component: FormctrlInFormgrpComponent;
  let fixture: ComponentFixture<FormctrlInFormgrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormctrlInFormgrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormctrlInFormgrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
