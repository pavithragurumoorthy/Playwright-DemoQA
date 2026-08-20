import { test } from '@playwright/test'; //Playwright library-la irundhu test function-a import pannrom.


test('Open Google', async ({ page }) => {
    /*
test() -> Idhu oru test case.
'Open Google' -> Idhu test name.Report-la idha than kaatum.
async -> async na asynchronous function.Indha function-la await use panna porom.
({ page }) -> page = browser tab. driver==page.
    */

  await page.goto('https://www.google.com');

  /*
await -> Wait until browser completes this action.
goto -> driver.get(url), goto used for to go to url
  */

 await page.getByRole('combobox').fill('Playwright');

    await page.getByRole('combobox').press('Enter');
});