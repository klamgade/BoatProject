import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../services/storage/storage.service';
import { NavigationalSafetyEquipment } from 'models/vessel-equipment/navigational-safety-equipment.model';
import { LifesavingSafetyEquipment } from 'models/vessel-equipment/lifesaving-safety-equipment';
import { VesselEquipments } from 'models/vessel-equipment/vessel-equipments.model';

@Component({
  selector: 'app-vessel-equipment',
  templateUrl: './vessel-equipment.component.html',
  styleUrls: ['./vessel-equipment.component.css']
})
export class VesselEquipmentComponent implements OnInit {

  NavigationSafetyForm: FormGroup;
  LifesavingSafetyForm: FormGroup;
  navigationSafety: NavigationalSafetyEquipment  = new NavigationalSafetyEquipment();
  lifesavingSafety: LifesavingSafetyEquipment = new LifesavingSafetyEquipment();
  vesselEquipments: VesselEquipments = new VesselEquipments(new NavigationalSafetyEquipment(), new LifesavingSafetyEquipment());

  constructor(private formBuilder: FormBuilder, private storageService: StorageService) {

  }

  ngOnInit() {
    this.NavigationSafetyForm = this.formBuilder.group({
      Image: new FormControl(this.navigationSafety.Image, Validators.required),
      Equipment: new FormControl(this.navigationSafety.Equipment, Validators.required),
      Description: new FormControl(this.navigationSafety.Description, Validators.required),
      Location: new FormControl(this.navigationSafety.Location, Validators.required),
      CertificateNumber: new FormControl(this.navigationSafety.CertificateNumber, Validators.required),
      Certificate: new FormControl(this.navigationSafety.Certificate, Validators.required),
      ExpiryIndicator: new FormControl(this.navigationSafety.ExpiryIndicator, Validators.required),
      ExpirtyDate: new FormControl(this.navigationSafety.ExpirtyDate, Validators.required),
      LastSerivceDate: new FormControl(this.navigationSafety.LastSerivceDate, Validators.required),
      ServiceFrequency: new FormControl(this.navigationSafety.ServiceFrequency, Validators.required)    
    })

    this.lifesavingSafety = new LifesavingSafetyEquipment();
    this.LifesavingSafetyForm = this.formBuilder.group({
      Image: new FormControl(this.lifesavingSafety.Image, Validators.required),
      Equipment: new FormControl(this.lifesavingSafety.Equipment, Validators.required),
      Description: new FormControl(this.lifesavingSafety.Description, Validators.required),
      Location: new FormControl(this.lifesavingSafety.Location, Validators.required),
      CertificateNumber: new FormControl(this.lifesavingSafety.CertificateNumber, Validators.required),
      Certificate: new FormControl(this.lifesavingSafety.Certificate, Validators.required),
      ExpiryIndicator: new FormControl(this.lifesavingSafety.ExpiryIndicator, Validators.required),
      ExpirtyDate: new FormControl(this.lifesavingSafety.ExpirtyDate, Validators.required),
      LastSerivceDate: new FormControl(this.lifesavingSafety.LastSerivceDate, Validators.required),
      ServiceFrequency: new FormControl(this.lifesavingSafety.ServiceFrequency, Validators.required),
      BatchNumber: new FormControl(this.lifesavingSafety.BatchNumber, Validators.required),
      BatchEquipmentCount: new FormControl(this.lifesavingSafety.BatchEquipmentCount, Validators.required)
    })
  }

  onUpdateNavigationSafety(){
    this.vesselEquipments.navigationSafetyEquipment.Image = this.NavigationSafetyForm.value.Image;
    this.vesselEquipments.navigationSafetyEquipment.Equipment = this.NavigationSafetyForm.value.Equipment;
    this.vesselEquipments.navigationSafetyEquipment.Description = this.NavigationSafetyForm.value.Description;
    this.vesselEquipments.navigationSafetyEquipment.Location = this.NavigationSafetyForm.value.Location;
    this.vesselEquipments.navigationSafetyEquipment.CertificateNumber = this.NavigationSafetyForm.value.CertificateNumber;
    this.vesselEquipments.navigationSafetyEquipment.Certificate = this.NavigationSafetyForm.value.Certificate;
    this.vesselEquipments.navigationSafetyEquipment.ExpiryIndicator = this.NavigationSafetyForm.value.ExpiryIndicator;
    this.vesselEquipments.navigationSafetyEquipment.ExpirtyDate = this.NavigationSafetyForm.value.ExpirtyDate;
    this.vesselEquipments.navigationSafetyEquipment.LastSerivceDate = this.NavigationSafetyForm.value.LastSerivceDate;
    this.vesselEquipments.navigationSafetyEquipment.ServiceFrequency = this.NavigationSafetyForm.value.ServiceFrequency
    this.storageService.saveItem("sagar@gmail.com", this.vesselEquipments);
  }

  onUpdateLifesavingSafety(){
    this.vesselEquipments.lifesavingSafetyEquipment.Image = this.LifesavingSafetyForm.value.Image;
    this.vesselEquipments.lifesavingSafetyEquipment.Equipment = this.LifesavingSafetyForm.value.Equipment;
    this.vesselEquipments.lifesavingSafetyEquipment.Description = this.LifesavingSafetyForm.value.Description;
    this.vesselEquipments.lifesavingSafetyEquipment.Location = this.LifesavingSafetyForm.value.Location;
    this.vesselEquipments.lifesavingSafetyEquipment.CertificateNumber = this.LifesavingSafetyForm.value.CertificateNumber;
    this.vesselEquipments.lifesavingSafetyEquipment.Certificate = this.LifesavingSafetyForm.value.Certificate;
    this.vesselEquipments.lifesavingSafetyEquipment.ExpiryIndicator = this.LifesavingSafetyForm.value.ExpiryIndicator;
    this.vesselEquipments.lifesavingSafetyEquipment.ExpirtyDate = this.LifesavingSafetyForm.value.ExpirtyDate;
    this.vesselEquipments.lifesavingSafetyEquipment.LastSerivceDate = this.LifesavingSafetyForm.value.LastSerivceDate;
    this.vesselEquipments.lifesavingSafetyEquipment.ServiceFrequency = this.LifesavingSafetyForm.value.ServiceFrequency
    this.vesselEquipments.lifesavingSafetyEquipment.BatchNumber = this.LifesavingSafetyForm.value.BatchNumber
    this.vesselEquipments.lifesavingSafetyEquipment.BatchEquipmentCount = this.LifesavingSafetyForm.value.BatchEquipmentCount
    this.storageService.saveItem("sagar@gmail.com", this.vesselEquipments);
  }
}
