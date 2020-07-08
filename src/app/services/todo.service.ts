import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [  
      {
      id: 1,
      title: "Walk the ferrets",
      completed: false
    },
    {
      id: 2,
      title: "Cook a nice and crispy beef rendang",
      completed: true
    },
    {
      id: 3,
      title: "Learn Tibetan",
      completed: false
    }
  ]
  }
}
