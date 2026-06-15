import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Comment {
  postId: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class CommentService {
  private http = inject(HttpClient);

  getComments() {
    return this.http.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}