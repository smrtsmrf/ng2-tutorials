import { CliNg2FundamentalsPage } from './app.po';

describe('cli-ng2-fundamentals App', function() {
  let page: CliNg2FundamentalsPage;

  beforeEach(() => {
    page = new CliNg2FundamentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
