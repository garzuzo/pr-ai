import { Page, Locator } from "playwright";

export class SearchPage {
  readonly page: Page;
  readonly searchTextArea: Locator;
  constructor(page: Page) {
    this.page = page;
    this.searchTextArea = page.locator('textarea[aria-label="Buscar"]');
  }
  async goto() {
    await this.page.goto("https://google.com");
  }
}
