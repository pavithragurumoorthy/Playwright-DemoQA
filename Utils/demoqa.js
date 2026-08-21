import dotenv from 'dotenv';

dotenv.config();

export async function openDemoQA(page) {
    

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

    await page.goto(process.env.DEMOQA_URL, {
        waitUntil: 'domcontentloaded'
    });
}