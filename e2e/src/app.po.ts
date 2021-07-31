import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getSearchText(): Promise<string> {
    return element(by.css('app-root .mat-input-element')).getAttribute('value');
  }
}
