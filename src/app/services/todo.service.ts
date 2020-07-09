import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }
  // get todos
  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // delete todos 
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, todo, httpOptions);
  }


  // toggle completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
