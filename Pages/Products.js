export class Products{
    constructor(page){
    this.page = page;
    this.ProductsBtn = page.locator('//a[@href="/products"]');
    this.SearchInput = page.locator('//input[@id="search_product"]');
    this.SearchBtn = page.locator('//button[@id="submit_search"]');
    this.WomenCategory = page.locator('//a[@href="#Women"]');
    this.Tops = page.locator('//a[text()="Tops "]');
    this.WinterTopImage = page.locator('//div[@class="productinfo text-center"]//p[text()="Winter Top"]');
    this.WinterTop = page.locator('(//p[text()="Winter Top"])[1]');
    
}
async SearchProducts(Cloths){
    console.log("Searching for products");
    await this.ProductsBtn.click();
    await this.SearchInput.click();
    await this.SearchInput.fill(Cloths);
    await this.SearchBtn.click();
    await this.WomenCategory.click();
    await this.Tops.click();
    await this.WinterTopImage.hover();
    await this.WinterTop.click();
    }
}