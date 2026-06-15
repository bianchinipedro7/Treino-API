import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  private http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getPostById(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

}