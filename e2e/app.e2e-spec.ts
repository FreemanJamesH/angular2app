import { angular2appPage } from './app.po';

describe('angular2app App', () => {
  let page: angular2appPage;

  beforeEach(() => {
    page = new angular2appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
