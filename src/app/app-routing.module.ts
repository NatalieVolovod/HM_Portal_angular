import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesSelectionComponent} from './articles-selection/articles-selection.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'articles-selection', component: ArticlesSelectionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent }

  // { path: 'article/:id',      component: ArticleComponent }
  // { path: 'articles', component: ArticleListComponent, data: { title: 'Articles List' } }  // -- ArticlesSelectionComponent?
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
