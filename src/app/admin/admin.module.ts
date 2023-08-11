import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { RouterModule, Routes } from '@angular/router';


//Dans l'AdminModule 
const routes: Routes = [
  {
    path: 'admin/add',
    component: AddAlbumComponent
  },
]

@NgModule({
  declarations: [
    AlbumComponent,
    AddAlbumComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  exports: [AlbumComponent, RouterModule]
})
export class AdminModule { }
