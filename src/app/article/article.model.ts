export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  /*However, clicking on the vote up or vote down links will cause the page to reload instead of
updating the article list.
JavaScript, by default, propagates the click event to all the parent components. Because the
click event is propagated to parents, our browser is trying to follow the empty link, which tells the
browser to reload.
To fix that, we need to make the click event handler to return false. This will ensure the browser
won’t try to refresh the page. Let’s update our code so that each of the functions voteUp() and
voteDown() return a boolean value of false (tells the browser not to propagate the event upwards)*/
  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  // domain() is a utility function that extracts
  // the domain from a URL, which we'll explain shortly
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
