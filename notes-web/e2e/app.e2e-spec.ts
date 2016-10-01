import { Angular2fPage } from './app.po';

describe('angular2f App', function() {
  let page: Angular2fPage;

  beforeEach(() => {
    page = new Angular2fPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
