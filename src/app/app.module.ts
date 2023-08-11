import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PaginateComponent } from './paginate/paginate.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { AdminModule } from './admin/admin.module';
import { ShareModule } from './share/share.module';

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
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // },
  
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    LoginComponent,
    AlbumDescriptionComponent,
    OpenCloseComponent,
    PageNotFoundComponent,
    // PaginateComponent,
    AudioPlayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    /**
     * forRoot : méthode utilisée pour définir les routes à utilisés dans le module de routage.
    */
    RouterModule.forRoot(albumsRoutes),
    HttpClientModule,
    AdminModule,
    AppRoutingModule,
    ShareModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

