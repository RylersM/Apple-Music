import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums!: Album[];
  albumService: any;

  constructor(private aS: AlbumService) { }

  ngOnInit(): void {
    this.aS
    .paginate(0, this.aS.paginateNumberPage())
    .subscribe({
      next: (alb: Album[]) => {
        this.albums = alb
      }
    });
  }
  //tsLint: disable-next-line: typedef
  onSetPaginate($event: any) {
    //Récupérer les albums compris entre [start et end]
    this.aS.paginate($event.start, $event.end)
    .subscribe({
      next: (alb: Album[]) => this.albums = alb
    });
  }

}
