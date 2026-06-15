import { Component, inject, OnInit, signal } from '@angular/core';
import { User, UserService } from '../../services/users';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  private userService = inject(UserService);

  users = signal<User[]>([]);

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => this.users.set(data),
      error: (err) => console.error('erro na API:', err),
    });
  }
}