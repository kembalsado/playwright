// @ts-check
const { test, expect } = require('@playwright/test');
const {faker} = require('@faker-js/faker');

test('has title', async ({ page }) => {
  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();
  const randomPhone = faker.phone.number();

  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

  await page.getByPlaceholder('First Name').fill(randomName);
  await page.getByPlaceholder('name@example.com').fill(randomEmail);
  await page.getByLabel('Gender:').check();
  await page.getByPlaceholder('Enter Mobile Number').fill(randomPhone);
  await page.getByLabel('Date of Birth:').fill('2024-06-25');
  await page.getByPlaceholder('Enter Subject').click();
  await page.getByPlaceholder('Enter Subject').fill('Math');
  await page.getByLabel('Hobbies:').check();
  await page.getByRole('checkbox').nth(1).check();
  await page.getByRole('checkbox').nth(2).check();
  const handle = page.locator('input[type="file"]');
  await handle.setInputFiles('./Test Image.jpeg')
  await page.getByPlaceholder('Currend Address').click();
  await page.getByPlaceholder('Currend Address').fill('test address');
  await page.locator('#state').selectOption('NCR');
  await page.locator('#city').selectOption('Agra');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(10000);
});

