//Component enfant
//la classe Inpput est nécessaire
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
// import { ALBUM_LISTS } from '../mock-albums';
import { fadeInAnimation } from '../animations-module';
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumDetailsComponent implements OnInit{
  //classe Input permet de récupérer les data de l'enfant
  //album est liée à une entrée [album] du parent dans le sélecteur

  @Input() album!: Album | undefined;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  @Output() onHide: EventEmitter<Album> = new EventEmitter();

albumLists: List [] = [];
songs: string[] | undefined = []; 
  constructor(
    private albumService: AlbumService
  ){ }

  ngOnInit(){
    //console.log(this.album); //pour l'instant c'est undefined
    
  }

  tabAlbum!: Array<string>
  ngOnChanges(): void {
    if(this.album){
      this.albumService.getAlbumList(this.album.id)
      .subscribe((albumList) => { this.songs = albumList.list})
      }
      
    }
    play(songs : Album) {
      // console.log("jouer l'album", album.name);
      
      this.onPlay.emit(songs);//émettre un album vers le parent
      this.albumService.switchOn(songs);
  
    }
  
    hide(){
      this.onHide.emit(this.album)
      // this.tabAlbum = [];
      // if(this.album){
      //   this.album = undefined;
  
      // }
      // this.onPlay = !this.onPlay
      
    }
  }
  