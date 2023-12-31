import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactifComponent } from './form-reactif/form-reactif.component';

//définission de la constante pour les routes

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
    FormTemplateComponent,
    FormReactifComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule,
    /**
     * forRoot : méthode utilisée pour définir les routes à utilisés dans le module de routage.
    */
    HttpClientModule,
    AdminModule,
    AppRoutingModule,
    ShareModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

