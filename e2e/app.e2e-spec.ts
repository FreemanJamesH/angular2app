import { JamesfreemanioPage } from './app.po';

describe('jamesfreemanio App', () => {
  let page: JamesfreemanioPage;

  beforeEach(() => {
    page = new JamesfreemanioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
