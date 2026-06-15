import { Component, inject, OnInit, signal } from '@angular/core';
import { Post, PostService } from '../../services/post';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  private postService = inject(PostService);

  posts = signal<Post[]>([]);

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => this.posts.set(data),
      error: (err) => console.error('erro na API:', err),
    });
  }
}