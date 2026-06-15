import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService, Comment } from '../../services/comments';

@Component({
  selector: 'app-comments-detail',
  templateUrl: './comments-detail.html',
})
export class CommentsDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private commentService = inject(CommentService);

  comment = signal<Comment | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.commentService.getCommentById(id).subscribe((data) => {
      this.comment.set(data);
    });
  }
}