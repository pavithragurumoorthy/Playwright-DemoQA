import { test } from '@playwright/test';

test('open google',async({page}) => {

    // const browser = await chromium.launch({
    //     headless: false,
    //     channel: 'chrome',
    //     args: [
    //         '--force-device-scale-factor=0.6',
    //         '--disable-notifications'
    //     ]
    // });

    // const context = await browser.newContext({
    //     viewport: null,
    //     permissions: []
    // });

    // const page = await context.newPage();

    // page.setDefaultTimeout(40000);
    
    await page.goto('https://vizzainsurance.com');
    console.log("Google opened");

    await page.getByRole('button',{name : 'Login'}).click();
    console.log("Login Button click panniyachu");
    await page.getByRole('link', { name: 'POS Login' }).click();
    console.log("POS click panniyachu");
    await page.getByPlaceholder('Mobile number').fill('6380461491');
    console.log("6380461491");
    await page.getByPlaceholder('Password').fill('M@082026');
    console.log('M@082026');





}) 