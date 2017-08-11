import { MyNg4AppPage } from './app.po';

describe('my-ng4-app App', () => {
  let page: MyNg4AppPage;

  beforeEach(() => {
    page = new MyNg4AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
