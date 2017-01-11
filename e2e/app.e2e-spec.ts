import { Aula9Page } from './app.po';

describe('aula9 App', function() {
  let page: Aula9Page;

  beforeEach(() => {
    page = new Aula9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
