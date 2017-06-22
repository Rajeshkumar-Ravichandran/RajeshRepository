import { MyGitappPage } from './app.po';

describe('my-gitapp App', () => {
  let page: MyGitappPage;

  beforeEach(() => {
    page = new MyGitappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
