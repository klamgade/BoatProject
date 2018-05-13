import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formctrl-in-formgrp',
  templateUrl: './formctrl-in-formgrp.component.html',
  styleUrls: ['./formctrl-in-formgrp.component.css']
})
export class FormctrlInFormgrpComponent implements OnInit {

  heroForm:  FormGroup;

  constructor() { }

  ngOnInit() {
    this.heroForm = new FormGroup({
      name: new FormControl()
    });
  }


}
