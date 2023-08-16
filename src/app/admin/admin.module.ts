import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


//Dans l'AdminModule definition des 
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
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [AlbumComponent, RouterModule]
})
export class AdminModule { }
