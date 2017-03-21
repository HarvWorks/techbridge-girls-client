import { Evergreenv2Page } from './app.po';

describe('evergreenv2 App', () => {
  let page: Evergreenv2Page;

  beforeEach(() => {
    page = new Evergreenv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
