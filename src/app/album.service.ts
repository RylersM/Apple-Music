import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Album, List, SortAlbumCallback } from './album';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { objectVal, ref } from '@angular/fire/database'
import * as _ from 'lodash';

// import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albumsUrl: string = environment.albumUrl //convention private & protected
  private _albumsListUrl: string = environment.albumListUrl;

  subjectAlbum = new Subject<Album>();
  sendCurrentNumberPage = new Subject<number>

  constructor(private http: HttpClient) {
    // console.log(`${this.albumService.}, album trouvés`);

  };
  /**
   * fonctions de recherche de tous les albums
   * @returns Retourne la liste de tous les albums
   */
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
    /**Référence de la BDD */  
    // const albumRef = ref(this.db, 'albums');
    // return objectVal<Album[]>(albumRef).pipe(
      map((albums: Album[]) => {
        
        return albums.sort(
          (a: Album, b: Album) => b.duration - a.duration
        );
      })
    );
  };

  /** 
   * Fonction de recherche des sons d'un album
   * @param
  */

  getAlbum(id: string): Observable<Album> | undefined {
    return this.http.get<Album>(this._albumsUrl + id)
      .pipe(
        map((album: Album) => album)
      );
  }

  getAlbumList(id: string): Observable<List> {
    return this.http.get<List>(this._albumsListUrl +'/'
     + id)

  }
  /**
   * Fonction qui retourne le nombre d'albums
   * @returns le nombre d'albums
   */
  count(): Observable<number> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map(
        (albums: Album[]) =>  albums.length)
    );
  }

  // AlbumService
  paginate(start: number, end: number): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        const res = _.values(albums) 
      // console.log('sans lodash', albums);
      // console.log('avec lodash', res);
      
      return res;
      } ),


      map(
        (albums: Album[]) => albums
        .sort((a, b) => b.duration - a.duration)
        .slice(start, end))
    )
    // .sort((a: Album, b: Album) => b.duration - a.duration);
  }


  // order(callBack: SortAlbumCallback): AlbumService {
  //   this._albums.sort(callBack);
  //   return this;
  // }

  // limit(start: number, end: number): AlbumService {
  //   this._albums = this._albums.slice(start, end)
  //   return this
  // }

  /**
   * Type de requête
   * 
   * get => récupérer une resource
   * post => envoyer une resource
   * put => m-à-j une resource
   * @param word 
   * @returns 
   */
  search(word: string): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        //parcourir le tableau d'album
        return albums.filter(album => {
          //retourner ceux contenant le string de la variable "word"
          return album.title
            .toLowerCase()
            .includes(word.trim().toLowerCase());
        })
      }))
  }

  // searchV2(word: string): Album[] {
  //   let re = new RegExp(word.trim(), "g");
  //   return this._albums.filter(album => album.title.match(re));
  // }

  paginateNumberPage(): number {
    return environment.numberPage
  }
  /**
   * Méthode qui signale à tous les composants 
   * de la page actuelle
   * @param numberPage  numéro de la page en cours
   * @returns 
   */
  currentPage(numberPage: number) {
    return this.sendCurrentNumberPage.next(numberPage)
  }


  /**
   *Méthode qui permet de change le status d'un album à "on"
   * @param album :l'album dont le status doit passer à "on"
   */
  switchOn(album: Album): void {
    album.status = "on";
    //put ('localhost:3000/albums/1, album');
    this.http.put<void>(this._albumsUrl + '/' + album.id, album)
      .subscribe({
        next: (e) => console.log(e),
        error: (err) => console.warn(err),
        complete: () => this.subjectAlbum.next(album)


      })
  }
  /**
   * Méthode qui permet de changer le status d'un album à "off"
   * @param album l'album dont le status doit passer à "off"
   */
  switchOff(album: Album): void {
    album.status = "off";
    /**
     * renvoi un observable, elle ne s'exécute
     * donc qu'à la souscription. Du coup,
     * il faut y souscrire, pour l'exécuter
     */
    this.http.put<void>(`${this._albumsUrl}/ ${album.id}`, album)
      .subscribe(() => { })
  }
}
