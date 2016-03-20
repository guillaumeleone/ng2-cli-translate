import { Ng2CliTranslatePage } from './app.po';

describe('ng2-cli-translate App', function() {
  let page: Ng2CliTranslatePage;

  beforeEach(() => {
    page = new Ng2CliTranslatePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-cli-translate Works!');
  });
});
