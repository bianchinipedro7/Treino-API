import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService, Todos } from '../../services/todos';

@Component({
  selector: 'app-todos-detail',
  templateUrl: './todos-detail.html',
})
export class TodosDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private todosService = inject(TodosService);

  todos = signal<Todos | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.todosService.getTodosById(id).subscribe((data) => {
      this.todos.set(data);
    });
  }
}