import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifesavingSafetyEquipmentComponent } from './lifesaving-safety-equipment.component';

describe('LifesavingSafetyEquipmentComponent', () => {
  let component: LifesavingSafetyEquipmentComponent;
  let fixture: ComponentFixture<LifesavingSafetyEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifesavingSafetyEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifesavingSafetyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
