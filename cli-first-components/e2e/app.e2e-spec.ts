import { CliFirstComponentsPage } from './app.po';

describe('cli-first-components App', function() {
  let page: CliFirstComponentsPage;

  beforeEach(() => {
    page = new CliFirstComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
