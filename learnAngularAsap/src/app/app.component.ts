import { Component, OnInit } from '@angular/core';
import { User, Student } from './interface';
import { FormBuilder, FormGroup, FormArray, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title = 'app';
peopleList: User[] = [];
studentList: Student[] = [];
form: FormGroup;
isActive: true;


  constructor(private formBuilder: FormBuilder )
  {
    this.studentList = [
      {name: "kamal" , 
        skills:[{
            id:1, name:"JS", selected: true
        }]
      }]

      this.form = this.formBuilder.group({
          skills: this.buildSkills()
      })
  }

  ngOnInit(): void {

  }

  saveStudent(studentForm: NgForm){
    debugger;
    console.log(studentForm);
  }






























  getSkills()  {
    return this.form.get('skills');
  }

  buildSkills() : void {
  }

  addPerson():void{

    let kamalInfo = {
      email: "kamal@google.com",
      name: "Kamal",
      image: "n/a"
    };
    this.peopleList.push(kamalInfo);

  }
}
