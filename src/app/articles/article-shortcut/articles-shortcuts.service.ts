import { Injectable } from '@angular/core';
import {ARTICLES_SHORTCUTS} from './mock-articles-shortcuts';
import {Observable, of} from 'rxjs';
import {ArticleShortcut} from './article-shortcut.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesShortcutsService {

  constructor() { }

  getArticlesShortcuts(): Observable<ArticleShortcut[]> {
    return of(ARTICLES_SHORTCUTS);
  }
}
