import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticlesShortcutsListComponent } from './articles_old/articles-shortcuts-list/articles-shortcuts-list.component';
import { ArticleComponent } from './articles_old/article/article.component';
import { ArtisansListComponent } from './artisans_old/artisans-list/artisans-list.component';
import { ArtisanComponent } from './artisans_old/artisan/artisan.component';
import { MasterclassesListComponent } from './masterclasses_old/masterclasses-list/masterclasses-list.component';
import { MasterclassComponent } from './masterclasses_old/masterclass/masterclass.component';

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
