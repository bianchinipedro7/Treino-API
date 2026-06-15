import { Component, inject, OnInit, signal } from '@angular/core';
import { Photo, PhotoService } from '../../services/photos';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos implements OnInit {
  private photoService = inject(PhotoService);

  photos = signal<Photo[]>([]);

  ngOnInit() {
    this.photoService.getPhotos().subscribe({
      next: (data) => this.photos.set(data),
      error: (err) => console.error('erro na API:', err),
    });
  }
}