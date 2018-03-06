import { MyAppANG4Page } from './app.po';

describe('my-app-ang4 App', () => {
  let page: MyAppANG4Page;

  beforeEach(() => {
    page = new MyAppANG4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
