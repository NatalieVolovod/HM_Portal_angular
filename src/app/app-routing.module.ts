import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesListComponent} from './articles/articles-list/articles-list.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ArtisansListComponent} from './artisans/artisans-list/artisans-list.component';
import {MasterclassesListComponent} from './masterclasses/masterclasses-list/masterclasses-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artisans', component: ArtisansListComponent },
  { path: 'masterclasses', component: MasterclassesListComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }

  // TODO contacts page
  // TODO { path: 'article/:id',      component: ArticleComponent }
  // TODO { path: 'articles', component: ArticleListComponent, data: { title: 'Articles List' } }  // -- ArticlesListComponent?
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
