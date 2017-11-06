import { AngularKenticoHeadlessPage } from './app.po';

describe('angular-kentico-headless App', () => {
  let page: AngularKenticoHeadlessPage;

  beforeEach(() => {
    page = new AngularKenticoHeadlessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
