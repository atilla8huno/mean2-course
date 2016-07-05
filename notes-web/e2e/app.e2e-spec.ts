import { NotesWebPage } from './app.po';

describe('notes-web App', function() {
  let page: NotesWebPage;

  beforeEach(() => {
    page = new NotesWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
