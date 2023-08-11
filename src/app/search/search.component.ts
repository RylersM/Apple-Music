import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animations-module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [fadeInAnimation]
})
export class SearchComponent {
  word: string = ''
  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter()
  constructor(
    private albumService: AlbumService
  ) { }
  onSubmit(form: NgForm): void {

    const results = this
      .albumService.search(form.value.word)
      .subscribe({
        next: (alb: Album[]) => {
          if (alb.length > 0) {
            this.searchAlbums.emit(alb);
          }
        }
      })

  }


  onChangeEmit($event: string) {
    console.log("on change emit", $event);
    const results = this.albumService.search($event)
      .subscribe((alb: Album[]) => {
        this.searchAlbums.emit(alb);

      })

  }

}
