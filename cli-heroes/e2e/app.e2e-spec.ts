import { Ng2CliHeroesPage } from './app.po';

describe('ng2-cli-heroes App', function() {
  let page: Ng2CliHeroesPage;

  beforeEach(() => {
    page = new Ng2CliHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
