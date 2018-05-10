import { Component, OnInit } from '@angular/core';
import { User, Student } from './interface';
import { FormBuilder, FormGroup, FormArray, NgForm, FormControl, Validators } from '@angular/forms';
import { states } from './model.service';
import { Hero } from 'models/hero/hero.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//A FormGroup with multiple FormControls
export class AppComponent{
  
  heroForm: FormGroup;
  states = states;

  myHeros: Array<Hero>;
  heroes: Hero[];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  //Learnings on model concepts and flow
  ngOnInit(): void {
    //hard coded values as objects of Hero model class and assigning to an myHero Array of type Hero.
    this.myHeros = [{ID:1, Name: "kamal"},{ ID:2, Name: "sagar"}];

    this.heroes = [
      new Hero(1, "kishor"),
      new Hero(2, "nana"),
    ]
    console.log(this.heroes[0].Name);
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      street: '',
      city: '',
      state: ['', Validators.required],
      zip: '',
      power: '',
      openingbalance: ''
    });
  }
}

