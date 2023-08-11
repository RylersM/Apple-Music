import { Component } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent {
  /**Variable permettant d'afficher oou non le composant audio-player */
showplayer: boolean = false;
 /**Variable representant l'album joué */
playedAlbum! : Album;
/**Variable représentant le nombre total de sons dans l'album */
total: number = 1;
/**Variable representant le numéro du son joué actuellement (1 / 4) */
currentSongNumber: number = 1;
/**Variable représentant le pourcentage de sons joué (25% pour 1/4,  50% pour 2 / 4 75% pour 3 / 4  et 100% pour 4 / 4) */
ratio: number = 0;

constructor(private albumService: AlbumService){}

ngOnInit(): void {
  //souscrire au Sujet "subjectAlbum"
  this.albumService.subjectAlbum.subscribe({
    next: (a: Album) => {
      this.playedAlbum = a;
      //afficher le composant
      this.showplayer = true;
      //le son joué en 1er est le son numéro 1
      this.currentSongNumber = 1;

      let duration: number = this.playedAlbum.duration; //durée total de l'album
      this.total = Math.floor(duration / 120);

      //
      this.ratio = (100 / this.total)
      /**Variable représentant le % à ajouter après chaque sons la barre de progression */
      let step = this.ratio;

      //augmenter le niveau de la barre de progression chaque 2min (et donc chaque 1000 * 120 milliseconde)

      const intervalId = setInterval(() => {
    this.currentSongNumber++;
        this.ratio += step;
        if(this.ratio > 100){
          clearInterval(intervalId);
          this.showplayer = false;
        }
      }, 1000 )
    }  })
}
}
