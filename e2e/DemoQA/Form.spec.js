import { test } from '@playwright/test';
import { openDemoQA } from '../../Utils/demoqa.js';
import dotenv from 'dotenv';

dotenv.config();

test('Form', async ({ page }) => {
    await openDemoQA(page);

    await test.step('Forms', async () => {
        await page.getByText('Forms').click();
        // console.log("Forms clicked");
        // await page.pause();
        await page.getByRole('link', {name: 'Practice Form',exact: true}).click();
        await page.getByPlaceholder('First Name').fill(process.env.FIRSTNAME);
        await page.getByPlaceholder('Last Name').fill(process.env.LASTNAME);
        await page.getByPlaceholder('name@example.com').fill(process.env.MAIL);
        await page.getByRole('radio', { name: 'Female' }).check();
        await page.getByPlaceholder('Mobile Number').fill(process.env.MOBILE);
        await page.getByPlaceholder('Current Address').fill(process.env.ADDRESS);
        await page.locator('#dateOfBirthInput').click();
        await page.getByRole('combobox', { name: 'Month' }).selectOption({ label: process.env.MONTH });
        await page.getByRole('combobox', { name: 'Year' }).selectOption(process.env.YEAR);
        await page.getByRole('gridcell', { name: process.env.DATE }).click();
        // await page.locator('#subjectsInput').fill(process.env.SUBJECT);
        // await page.getByText(process.env.SUBJECT, { exact: true }).click();
        // await page.getByRole('checkbox', { name: process.env.HOBBY }).check();
        // await page.setInputFiles('#uploadPicture', process.env.FILEPATH);
        // console.log("File Uploaded");
        // await page.pause();
        // await page.locator('#state').click();
        // await page.getByRole('option', { name: 'NCR' }).click();
        // await page.locator('#city').click();
        // await page.getByRole('option', { name: 'Delhi' }).click();
        // await page.getByRole('button', { name: 'Submit' }).click();
        // console.log("Form Submitted");
        // await page.pause();
    })
    
})