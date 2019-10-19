import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArtisansListComponent } from './artisans_old/artisans-list/artisans-list.component';
import { ArtisanComponent } from './artisans_old/artisan/artisan.component';
import { MasterclassesListComponent } from './masterclasses_old/masterclasses-list/masterclasses-list.component';
import { MasterclassComponent } from './masterclasses_old/masterclass/masterclass.component';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    MasterclassesListComponent,
    MasterclassComponent,
    ArtisansListComponent,
    ArtisanComponent
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
