import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.target.com.au/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Log in with Target or' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('oliveginger12@gmail.com');
  await page.getByRole('textbox', { name: 'Email*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password*' }).fill('OShopping123');
  await page.getByRole('button', { name: 'Log in with Target' }).click();
  await page.getByRole('link', { name: 'Order History' }).click();
  await page.getByRole('heading', { name: 'STORE PURCHASES' }).click();
  await page.getByRole('heading', { name: 'ONLINE ORDERS' }).click();
  await page.getByTitle('View order 273666207').click();
  await page.goto('https://www.target.com.au/my-account/order-details/273666207');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Log out' }).click();
});