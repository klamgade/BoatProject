import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormctrlInFormgrpComponent } from './formctrl-in-formgrp/formctrl-in-formgrp.component';
import { VesselEquipmentComponent } from './vessel-equipment/vessel-equipment.component';
import { LifesavingSafetyEquipmentComponent } from './lifesaving-safety-equipment/lifesaving-safety-equipment.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FormctrlInFormgrpComponent,
    VesselEquipmentComponent,
    LifesavingSafetyEquipmentComponent,
    AngularFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
