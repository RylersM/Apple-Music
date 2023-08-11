import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { AdminModule } from './admin/admin.module';
import { AlbumComponent } from './admin/album/album.component';
import { AddAlbumComponent } from './admin/add-album/add-album.component';

//définission de la constante pour les routes
const albumsRoutes: Routes = [
  /**
   * path : 
   */
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'album/:albumId',
    component: AlbumDescriptionComponent
  },
  {
    path: 'open',
    component: OpenCloseComponent
  },
  {
    path: 'admin',
    component: AlbumComponent
  },
  {
    path: 'add',
    component: AddAlbumComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(albumsRoutes)
  ],
  exports : [ RouterModule]
})
export class AppRoutingModule { }
