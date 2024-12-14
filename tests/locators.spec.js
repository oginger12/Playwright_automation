/*//const {test,expect} = require ('@playwright/test')
import {test,expect} from '@playwright/test'

test ('Locators', async ({page})=>{

await page.goto("https://www.demoblaze.com/index.html");

//click on login button - property 
await page.click('id=login2');

//provide user name - CSS

//await page.locator ('#loginusername').fill("pavanol")
await page.fill('#loginusername', 'pavanol');

//provide password
await page.fill ("input[id='loginpassword']", 'test@123')

//click on LOGIN button 
await page.click("//button[normalize-space()='Log in']")

//verify if logout button is visible 

const logoutlink = await page.locator ("//button[normalize-space()='Log in']")

await expect (logoutlink).toBeVisible();

await page.close();

} )
*/

import { test, expect } from '@playwright/test'

test ('Locators', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});