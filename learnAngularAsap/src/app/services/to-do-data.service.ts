import { Injectable } from '@angular/core';
import { Todo } from '../angular-forms/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  lastId: number = 0; //placeholder for last id so can automatic incrementing of ids
  todos: Todo[] = []; //placeholder for todos

  constructor() { }

  //simulate POST/ todos
  addTodo(todo: Todo): ToDoDataService {
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }
}
