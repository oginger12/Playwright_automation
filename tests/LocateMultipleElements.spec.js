// locate multiplee elements 

/*
const {test, expect} = require('@playwright/test');


test ('LocateMultipleElements', async({page})=>{


await page.goto('https://www.demoblaze.com/index.html')

page.waitForXPath("//div[@id='tbodyid']//h4/a");
const products = await page.$$("//div[@id='tbodyid']//h4/a")

for (const prodct of products)
{
    const productname = await prodct.textContent();
    console.log(productname)
}
})

*/
/*
const {test, expect} = require('@playwright/test');

test('LocateMultipleElements', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');

    // Wait for elements using XPath
    await page.waitForXPath("//div[@id='tbodyid']//h4/a");
    
    // Locate all the product links using XPath
    const products = await page.$$("xpath=//div[@id='tbodyid']//h4/a");

    for (const product of products) {
        // Get the text content of each product
        const productname = await product.textContent();
        console.log(productname);
    }
});
*/

const { test, expect } = require('@playwright/test');

test('LocateMultipleElements', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    // Use locator to find elements by XPath
    const productLocator = page.locator("//div[@id='tbodyid']//h4/a");
    
    // Wait for the elements to be visible
    await productLocator.first().waitFor();

    // Get all product elements
    const products = await productLocator.all();

    // Loop through the products and get their text content
    for (const product of products) {
        const productname = await product.textContent();
        console.log(productname);
    }
});
