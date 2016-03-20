export class Ng2CliTranslatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-cli-translate-app p')).getText();
  }
}
