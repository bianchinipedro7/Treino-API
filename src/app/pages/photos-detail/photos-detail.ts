import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService, Photo } from '../../services/photos';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.html',
})
export class PhotosDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private photoService = inject(PhotoService);

  photo = signal<Photo | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.photoService.getPhotoById(id).subscribe((data) => {
      this.photo.set(data);
    });
  }
}