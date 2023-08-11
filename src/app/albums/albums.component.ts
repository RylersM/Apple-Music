import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development'

//Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animations-module';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumsComponent implements OnInit {

  titlePage: string = "Page Principale Albums Music";
  albums!: Album[]
  selectedAlbum!: Album;
  status: string | null = null

  constructor(
    private aS: AlbumService
  ) {
    // console.log(`${this.albumService.count()} album trouvés`);

  }

  ngOnInit(): void {
    this.aS
      .paginate(0, this.aS.paginateNumberPage())
      .subscribe({
        next: (alb: Album[]) => {
          this.albums = alb
        }
      });
    // .order(function(a: Album, b: Album) {
    //   return a.duration - b.duration
    // })
    // .limit(0, this.albumService.paginateNumberPage())
    // .getAlbums();
    // .paginate(0, environment.numberPage)
  }

  leClick(album: Album): void {
    this.selectedAlbum = album;
    // console.log('Le click marche');

  }


  playParent($event: any) {
    // console.log(typeof $event);
    // console.log($event: Album);
    this.status = $event.id;

  }

  search($event: Album[]) {
    if ($event) {
      this.albums = $event
    }
    console.log(`Parent sera mis à jour et affichera seulement les albums`);

  }

  onSetPaginate($event: { start: number, end: number }) {
    //Récupérer les albums compris entre [start et end]
    this.aS.paginate($event.start, $event.end)
    .subscribe({
      next: (alb: Album[]) => this.albums = alb
    });
  }
}
