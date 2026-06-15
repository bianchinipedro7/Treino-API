import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService, Album } from '../../services/album';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.html',
})
export class AlbumsDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  album = signal<Album | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumById(id).subscribe((data) => {
      this.album.set(data);
    });
  }
}