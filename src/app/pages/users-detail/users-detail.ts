import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, User } from '../../services/users';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.html',
})
export class UsersDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private usersService = inject(UserService);

  users = signal<User | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usersService.getUsersById(id).subscribe((data) => {
      this.users.set(data);
    });
  }
}

