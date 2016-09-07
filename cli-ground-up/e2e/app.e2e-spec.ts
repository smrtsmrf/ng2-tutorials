import { DevmtnSchedulingPage } from './app.po';

describe('devmtn-scheduling App', function() {
  let page: DevmtnSchedulingPage;

  beforeEach(() => {
    page = new DevmtnSchedulingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
