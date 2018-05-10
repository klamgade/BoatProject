import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormctrlInFormgrpComponent } from './formctrl-in-formgrp/formctrl-in-formgrp.component';

@NgModule({
  declarations: [
    AppComponent,
    FormctrlInFormgrpComponent
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
