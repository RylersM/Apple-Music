import { Component, EventEmitter, Output } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {
  total: number = 0;

  /**
   * nombre d'albums par page (stocké dans les variables d'environnement)
   */
  perPage: number;

  /** nombre de boutons à générer*/
  numberPages: number = 0;

  /**tableau réunissant le label de chaque page */
  pages: number[] = [];
  /**Emetteur d'évenement */
  @Output() setPaginate: EventEmitter<{ start: number, end: number }> = new EventEmitter

  /**variable qui va stocké la page actuelle */
  currentPage: number = 1; //par defaut = 1

  constructor(
    private albumService: AlbumService
  ) {
    this.perPage = this.albumService.paginateNumberPage();
  }

  ngOnInit(): void {
    this.albumService.count()
      .subscribe(num => {
        this.total = num;

        this.numberPages = Math.ceil(this.total / this.perPage)

        for (let i = 1; i <= this.numberPages; i++) {
          this.pages.push(i)
        }
      });

    // console.log(this.total);

  }
  next() {
    if (this.currentPage >= this.numberPages) {
      // this.currentPage = 1
      return
    } else { this.currentPage++ }

    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }

  previous() {
    if (this.currentPage <= 1) {
      return
    } else { this.currentPage-- }

    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }

  changePage(page: number) {
    this.currentPage = page;
    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }

  setAlbums(page: number): {
    start: number, end: number
  } {
    let start = (this.currentPage - 1) * this.perPage;
    let end = start + this.perPage;


    return { start, end }
  }


}