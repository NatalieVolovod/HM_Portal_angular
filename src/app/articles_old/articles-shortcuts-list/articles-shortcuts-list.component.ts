import { Component, OnInit } from '@angular/core';
import { ARTICLES_SHORTCUTS } from '../article-shortcut/mock-articles-shortcuts';

@Component({
  selector: 'app-articles-selection',
  templateUrl: './articles-shortcuts-list.component.html',
  styleUrls: ['./articles-shortcuts-list.component.css']
})
export class ArticlesShortcutsListComponent implements OnInit {

  articles = ARTICLES_SHORTCUTS;

  constructor() { }

  ngOnInit() {
  }

}
