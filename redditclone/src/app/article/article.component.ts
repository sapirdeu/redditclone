import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  @Input() article: Article;

  constructor() {
    // this.article = new Article('Angular Course', 'https://angular.io', 50);
    console.log(this.article)
  }

  voteUp(){
    this.article.voteUp();
  }

  voteDown(){
      this.article.voteDown();
  }


  ngOnInit(): void {
  }

}
