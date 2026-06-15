import { Component, inject, OnInit, signal } from '@angular/core';
import { Comment, CommentService } from '../../services/comments';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.css',
})
export class Comments implements OnInit {
  private commentService = inject(CommentService);

  comments = signal<Comment[]>([]);

  ngOnInit() {
    this.commentService.getComments().subscribe({
      next: (data) => this.comments.set(data),
      error: (err) => console.error('erro na API:', err),
    });
  }
}


