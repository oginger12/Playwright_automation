const {test,expect}=require('@playwright/test')

test('AssertionsTest', async({page}) => {
//open app URL

await page.goto('https://demo.nopcommerce.com/register')
//check if the page has same URL or not !!
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

//verify the title of the page

await expect(page).toHaveTitle('nopCommerce demo store. Register')

//check if element is visible or not
const logoelement = await page.locator('.header-logo')
await expect(logoelement).toBeVisible()



})