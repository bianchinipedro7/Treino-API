import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  private http = inject(HttpClient);

  getTodoss() {
    return this.http.get<Todos[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }

   getTodosById(id: number) {
    return this.http.get<Todos>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}