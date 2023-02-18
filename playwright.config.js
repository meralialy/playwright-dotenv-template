const { devices } = require("@playwright/test");

require("dotenv").config();

module.exports = {
	credentials: {
		url: process.env.BASE_URL + process.env.LOGIN_PATH,
		username: process.env.USERNAME,
		password: process.env.PASSWORD,
	},
	globalSetup: require.resolve("./playwright.setup.js"),
	outputDir: "./playwright-results",
	projects: [
		{
			name: "chromium",
			browserName: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			browserName: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "webkit",
			browserName: "webkit",
			use: { ...devices["Desktop Safari"] },
		}
	],
	reporter: [["list", { printSteps: true }]],
	retries: 1,
	use: {
		baseURL: process.env.BASE_URL,
		colorScheme: 'dark',
		headless: true,
		screenshot: {
			mode: "only-on-failure",
			fullPage: true,
		},
		storageState: "playwright.state.json",
		trace: 'retain-on-failure',
		video: 'on-first-retry',	
    	viewport: { width: 1280, height: 720 }
	},
};
