import { SearchPage } from "../pages/search-page";
describe("Google test case", () => {
  afterAll(async () => {
    await page.close();
  });
  it("returns successful search results", async () => {
    // Arrange
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    // Act
    await searchPage.searchTextArea.fill("SF");
    await searchPage.searchTextArea.press("Enter");
    // Assert
    expect(await page.title()).toBe("SF - Buscar con Google");
  });
});
