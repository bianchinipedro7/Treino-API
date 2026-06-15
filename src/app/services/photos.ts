import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Photo {
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private http = inject(HttpClient);

  getPhotos() {
    return this.http.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }
  getPhotoById(id: number) {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
}
