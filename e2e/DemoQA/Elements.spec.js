import {test} from '@playwright/test';

test('Elements', async({page})=> {
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

    await test.step('WebSite', async () => {
    await page.goto('https://demoqa.com/');
    // console.log("Website Opened");

    await page.getByText('Elements').click();
    // console.log("Elements clicked");
    // await page.pause();
    })

    // await test.step('Text Box', async () => {
    // await page.locator('a',{hasText: 'Text Box'}).click({ force: true });
    // // console.log("TextBox Clicked");
    // // await page.pause();
    // await page.getByPlaceholder('Full Name').fill('Pavithra');
    // // console.log("Full Name filled");
    // // await page.pause();
    // await page.getByPlaceholder('name@example.com').fill('test@gmail.com');
    // // console.log("Mail filled");
    // // await page.pause();
    // await page.getByPlaceholder('Current Address').fill('1/11');
    // // console.log("Current Address filled");
    // // await page.pause();
    // await page.locator('#permanentAddress').fill('Main road');
    // // console.log("Permanent Address filled");
    // // await page.pause();
    // await page.getByRole('button',{name : 'Submit'}).click();
    // // console.log("Submitted");
    // const output = await page.locator('#output').innerText();
    // console.log(output);
    // });



    // await test.step('Check Box', async () => {

    // await page.locator('a',{hasText: 'Check Box'}).click({ force: true });

    // await page.getByRole('treeitem', {name: 'Select Home Home'}).locator('.rc-tree-switcher').click();

    // await page.getByRole('treeitem', {name: 'Select Desktop Desktop'}).locator('.rc-tree-switcher').click();

    // await page.getByRole('treeitem', {name: 'Select Documents Documents'}).locator('.rc-tree-switcher').click();

    // await page.getByRole('treeitem', {name: 'Select Downloads Downloads'}).locator('.rc-tree-switcher').click();

    // await page.getByRole('treeitem', {name: 'Select WorkSpace WorkSpace'}).locator('.rc-tree-switcher').click();

    // await page.getByRole('treeitem', {name: 'Select Office Office'}).locator('.rc-tree-switcher').click();

    // const Checkbox = page.getByRole('checkbox');

    // let i = 1;
    // for (const box of await Checkbox.all()) {
        
    //     if (!(await box.isChecked())) {
    //         await box.check();
    //         const result = await page.locator('#result').innerText();
    //         console.log(result);
    //     }
    // }
    // for (const box of await Checkbox.all()) {
        
    //     if ((await box.isChecked())) {
    //         await box.click();
    //         console.log("Checkbox unchecked");
    //     }
    // }

    // });

    // await test.step('Radio Button', async () => {

    // await page.locator('a',{hasText: 'Radio Button'}).click({ force: true });

    // await page.locator('#yesRadio').click();

    // const radioResult = await page.getByRole('paragraph').innerText();
    // console.log(radioResult);

    // await page.locator('#impressiveRadio').click();
    // const radioResult = await page.getByRole('paragraph').innerText();
    // console.log(radioResult);


    // })

    // await test.step('Web Tables', async () => {
    // await page.locator('a',{hasText: 'Web Tables'}).click({ force: true });

    // await page.getByRole('button',{name : 'Add'}).click();
    // await page.getByPlaceholder('First Name').fill('Pavithra');
    // await page.getByPlaceholder('Last Name').fill('G');
    // await page.getByPlaceholder('name@example.com').fill('pavithra.g@example.com');
    // await page.getByPlaceholder('Age').fill('25');
    // await page.getByPlaceholder('Salary').fill('50000');
    // await page.getByPlaceholder('Department').fill('IT');
    // await page.getByRole('button',{name : 'Submit'}).click();
    // await page.locator('#searchBox').fill('Pavithra');
    // const table = page.getByRole('table');
    // console.log(await table.innerText());

    // await page.getByTitle('Edit').click();
    // await page.getByRole('textbox', { name: 'First Name' }).fill('Pavithra Gurumoorthy');
    // await page.getByRole('button',{name : 'Submit'}).click();
    // await page.getByTitle('Delete').click();
    // console.log(await table.innerText());
    // })

    await test.step('Buttons', async () => {
    await page.locator('a',{hasText: 'Buttons'}).click({ force: true });
    await page.getByRole('button',{name : 'Double Click Me'}).dblclick();
    await page.getByRole('button',{name : 'Right Click Me'}).click({button: 'right'});
    await page.getByRole('button',{name : 'Click Me',exact: true}).click();
    console.log(await page.locator('#doubleClickMessage').innerText());
    console.log(await page.locator('#rightClickMessage').innerText());
    console.log(await page.locator('#dynamicClickMessage').innerText());

    })

})
