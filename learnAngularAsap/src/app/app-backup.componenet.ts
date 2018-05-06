import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { User, UserContact, UserContactDefin } from './interface';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
 userContact: UserContactDefin;
  peopleList: User[] = [];

  peopleForm: FormGroup;

  ngOnInit(): void {

    let people = {
      email: "yy@gmail.com",
      name: "dev",
      image: "n/a"
    };

    this.userContact = new UserContactDefin();
    this.peopleList.push(people);

    this.peopleForm = new FormGroup({
      address:  new FormControl("",[Validators.required]),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      contactNo: new FormControl("", [Validators.required])
    });
  }

  addPerson(): void {
    let kamalInfo = {
      email: "kamal@google.com",
      //toker: "test",
      name: "Kamal",
      //bio: "dev",
      image: "n/a"
    };
    this.peopleList.push(kamalInfo);
  }
  formSubmit(): void {
    //console.log(`data is submit ${this.peopleForm.value.name}`);

    let newFormData = {
      email: this.peopleForm.value.email,
      //toker: this.peopleForm.value.name,
      name: this.peopleForm.value.name,
      //bio: this.peopleForm.value.name,
      image: "n/a"
    };

    this.peopleList.push(newFormData);
    this.userContact.address = this.peopleForm.value.address;
    this.userContact.userList  = this.peopleList;

    console.log(this.userContact);
  }
}
