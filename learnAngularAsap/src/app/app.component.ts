import { Component, OnInit } from '@angular/core';
import { User, Student } from './interface';
import { FormBuilder, FormGroup, FormArray, NgForm, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { states } from './model.service';
import { Hero } from 'models/hero/hero.model';
import { ToDoDataService } from './services/to-do-data.service';
import { Todo } from './models/todo.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Department } from './models/department.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToDoDataService]
})

//A FormGroup with multiple FormControls
export class AppComponent {

  heroForm: FormGroup;
  states = states;
  myHeros: Array<Hero>;
  heroes: Hero[];
  newTodo: Todo = new Todo();
  filteredOptions: string[] = [];
  subcat: Department;

  myControl: FormControl = new FormControl();

  categoryOne = [
    'CheckOne',
    'CheckTwo',
    'ThirdCheck',
    'FourthCheck'
  ];

  departments: Department[] = [
    { id: 1, name: 'Help Desk',subCategories: ['dd','ddd'] },
    { id: 2, name: 'IT',subCategories: ['cc','ccc'] },

  ];

  constructor(private fb: FormBuilder, private todoDataService: ToDoDataService) {
    this.createForm();
  }

  addTodo() {
    debugger;
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
    console.log(this.newTodo);
    
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  //Learnings on model concepts and flow
  ngOnInit(): void {
    //hard coded values as objects of Hero model class and assigning to an myHero Array of type Hero.
    this.myHeros = [{ ID: 1, Name: "kamal" }, { ID: 2, Name: "sagar" }];

    this.heroes = [
      new Hero(1, "kishor"),
      new Hero(2, "nana"),
    ]
  }

  categorySelect(selectEvent){
    this.filteredOptions.splice(0,this.filteredOptions.length);
    console.log(`selected id ${selectEvent.target.value}`);
    let selectedOptionValue = selectEvent.target.value;
    this.subcat = this.departments.find(x=> x.id == selectedOptionValue);
     this.filteredOptions.push(...this.subcat.subCategories) ;
     console.log(this.filteredOptions); 
  }

// this.filteredOptions = this.myControl.valueChanges
// .pipe(startWith(''),
//   map(val => this.filter(val))
// );
// console.log(this.heroes[0].Name);

  filter(val: string): string[] {
    return this.categoryOne.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      street: '',
      city: '',
      state: ['', Validators.required],
      zip: '',
      power: '',
      openingbalance: ''
    });
  }
}




