import { Component, OnInit } from '@angular/core';

import { ArticlesShortcutsService} from '../article-shortcut/articles-shortcuts.service';
import { ArticleShortcut } from '../article-shortcut/article-shortcut.model';

@Component({
  selector: 'app-articles-selection',
  templateUrl: './articles-shortcuts-list.component.html',
  styleUrls: ['./articles-shortcuts-list.component.css']
})
export class ArticlesShortcutsListComponent implements OnInit {

  articles: ArticleShortcut[];

  constructor(private articlesShortcutsService: ArticlesShortcutsService) { }

  ngOnInit() {
    this.getArticlesShortcuts();
  }

  getArticlesShortcuts(): void {
    this.articlesShortcutsService.getArticlesShortcuts()
      .subscribe(articles => this.articles = articles);
  }
}
