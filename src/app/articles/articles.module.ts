import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleComponent } from './article/article.component';
import { ArticlesShortcutsListComponent} from './articles-shortcuts-list/articles-shortcuts-list.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesShortcutsListComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
