import {Component, OnInit, HostBinding, Input, } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  //  /*However, clicking on the vote up or vote down links will cause the page to reload instead of
  // updating the article list.
  // JavaScript, by default, propagates the click event to all the parent components. Because the
  // click event is propagated to parents, our browser is trying to follow the empty link, which tells the
  // browser to reload.
  // To fix that, we need to make the click event handler to return false. This will ensure the browser
  // won�t try to refresh the page. Let�s update our code so that each of the functions voteUp() and
  // voteDown() return a boolean value of false (tells the browser not to propagate the event upwards)*/
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
