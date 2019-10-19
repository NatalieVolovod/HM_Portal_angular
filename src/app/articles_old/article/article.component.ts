import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article = '<h1>Mandala weaving - an exciting lesson</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/xObJ04gs0tY" frameborder="0" allowfullscreen></iframe>';

  constructor() { }

  ngOnInit() {
  }

}
