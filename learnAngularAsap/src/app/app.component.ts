import { Component } from '@angular/core';
import { User } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


peopleList: User[] = [];

  ngOnInit(): void {

    let people = {
      email: "yy@gmail.com",
      name:"kamal",
      image: "n/a"
    };

    this.peopleList.push(people);
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
