import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animations-module';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumDescriptionComponent implements OnInit {
  album : Album | undefined ;
  constructor(
  private route: ActivatedRoute, // récupérez le service route
  private aS: AlbumService // récupérez le service
  ) { }
  ngOnInit(): void {
  // permet de récupérer l'identifiant
  // const id = this.route.snapshot.paramMap.get('albumId');
  const id = this.route.snapshot.params['albumId']
  // TODO récupérez le détail d'un album
  
  // console.log(this.route.snapshot.params['albumId']);
  this.aS.getAlbum(id)?.subscribe(album => {
    this.album = album
  })
}  }