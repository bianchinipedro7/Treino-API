import { Component, inject, OnInit, signal } from '@angular/core';
import { Album, AlbumService } from '../../services/album';

@Component({
  selector: 'app-albums',
  imports: [],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  private albumService = inject(AlbumService);

  albums = signal<Album[]>([]);

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => this.albums.set(data),
      error: (err) => console.error('erro na API:', err),
    });
  }
}
