import { ProjetoAngularPage } from './app.po';

describe('projeto-angular App', () => {
  let page: ProjetoAngularPage;

  beforeEach(() => {
    page = new ProjetoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
