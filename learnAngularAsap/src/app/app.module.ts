import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormctrlInFormgrpComponent } from './formctrl-in-formgrp/formctrl-in-formgrp.component';
import { VesselEquipmentComponent } from './vessel-equipment/vessel-equipment.component';
import { LifesavingSafetyEquipmentComponent } from './lifesaving-safety-equipment/lifesaving-safety-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    FormctrlInFormgrpComponent,
    VesselEquipmentComponent,
    LifesavingSafetyEquipmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
