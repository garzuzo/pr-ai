describe('Google test case', () => {


 beforeAll(async() => {
    await page.goto('https://google.com');
 })
 afterAll(async() => {
    await page.close();
 })
 it('returns successful search results', async() => {
    // Act
    await page.fill('textarea[aria-label="Buscar"]', "SF");
    await page.press('textarea[aria-label="Buscar"]', "Enter");
    // Assert
    expect(await page.title()).toBe('SF - Buscar con Google');    
})   
})