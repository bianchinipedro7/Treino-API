import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, Post } from '../../services/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './posts-detail.html',
})
export class PostsDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  post = signal<Post | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPostById(id).subscribe((data) => {
      this.post.set(data);
    });
  }
}