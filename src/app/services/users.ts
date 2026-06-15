import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../pages/users/users';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

    getUsersById(id: number) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

}