import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesShortcutsListComponent } from './articles/articles-shortcuts-list/articles-shortcuts-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticleComponent } from './articles/article/article.component';
import { MasterclassesListComponent } from './masterclasses/masterclasses-list/masterclasses-list.component';
import { MasterclassComponent } from './masterclasses/masterclass/masterclass.component';
import { ArtisansListComponent } from './artisans/artisans-list/artisans-list.component';
import { ArtisanComponent } from './artisans/artisan/artisan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesShortcutsListComponent,
    HomeComponent,
    PageNotFoundComponent,
    ArticleComponent,
    MasterclassesListComponent,
    MasterclassComponent,
    ArtisansListComponent,
    ArtisanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
