import { RazanFormValidationPage } from './app.po';

describe('razan-form-validation App', function() {
  let page: RazanFormValidationPage;

  beforeEach(() => {
    page = new RazanFormValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
