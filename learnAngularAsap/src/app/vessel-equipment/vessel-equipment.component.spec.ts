import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselEquipmentComponent } from './vessel-equipment.component';

describe('VesselEquipmentComponent', () => {
  let component: VesselEquipmentComponent;
  let fixture: ComponentFixture<VesselEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesselEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
