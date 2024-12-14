const {test, expect} = require ('@playwright/test')

test('Built-inLocators', async({page})=>{

await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

const logo = await page.getByAltText('company-branding')
await expect(logo).toBeVisible();


})