import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesShortcutsListComponent} from './articles-shortcuts-list/articles-shortcuts-list.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesShortcutsListComponent }
];

// { path: 'article/:id',      component: ArticleComponent }
// { path: 'articles', component: ArticleListComponent, data: { title: 'Articles List' } }  // -- ArticlesShortcutsListComponent?

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
