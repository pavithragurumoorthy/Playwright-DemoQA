import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './e2e',

    fullyParallel: false,

    workers: 1,

    use: {
        headless: false,
        viewport: null,
        ignoreHTTPSErrors: true,

        launchOptions: {
            slowMo: 1000,
            args: [
                '--start-maximized',
                '--force-device-scale-factor=0.6'
            ],
        },
    },

    reporter: 'html',
});