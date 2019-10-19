import { Injectable } from '@angular/core';
import {ARTICLES_SHORTCUTS} from './mock-articles-shortcuts';

@Injectable({
  providedIn: 'root'
})
export class ArticlesShortcutsService {

  constructor() { }

  getArticlesShortcuts() {
    return ARTICLES_SHORTCUTS;
  }
}
