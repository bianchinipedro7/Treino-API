import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos, TodosService } from '../../services/todos';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todo implements OnInit {
  private todosService = inject(TodosService);

  todoss = signal<Todos[]>([]);

  ngOnInit() {
    this.todosService.getTodoss().subscribe({
      next: (data) => this.todoss.set(data),
      error: (err) => console.error('erro na API:', err),
    });
  }
}
