import {test} from '@playwright/test';

test('Text Box', async({page})=> {
        await page.route('**/*', async route => {
        const url = route.request().url();

        if (
            url.includes('googleads') ||
            url.includes('doubleclick') ||
            url.includes('googlesyndication') ||
            url.includes('adservice')
        ) {
            await route.abort();
        } else {
            await route.continue();
        }
    });

    await page.goto('https://demoqa.com/');
    // console.log("Website Opened");

    await page.getByText('Elements').click();
    // console.log("Elements clicked");
    // await page.pause();
    await page.locator('a',{hasText: 'Text Box'}).click({ force: true });
    // console.log("TextBox Clicked");
    // await page.pause();
    await page.getByPlaceholder('Full Name').fill('Pavithra');
    // console.log("Full Name filled");
    // await page.pause();
    await page.getByPlaceholder('name@example.com').fill('test@gmail.com');
    // console.log("Mail filled");
    // await page.pause();
    await page.getByPlaceholder('Current Address').fill('1/11');
    // console.log("Current Address filled");
    // await page.pause();
    await page.locator('#permanentAddress').fill('Main road');
    // console.log("Permanent Address filled");
    // await page.pause();
    await page.getByRole('button',{name : 'Submit'}).click();
    // console.log("Submitted");
    const output = await page.locator('#output').innerText();
    console.log(output);

})

test ('Check Box',async({page})=> {
    await page.locator('a',{hasText: 'Check Box'}).click({ force: true });
    await page.locator('span[class="rc-tree-switcher"]').click();
})
