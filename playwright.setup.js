const { chromium } = require("@playwright/test");
const config = require("./playwright.config");

module.exports = async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage();
	
	await page.goto(config.credentials.url);
	await page.type('input[id="login_field"]', config.credentials.username);
	await page.type('input[id="password"]', config.credentials.password);
	await page.locator('input[type="submit"]').click();
	await page.context().storageState({ path: config.use.storageState });
	await browser.close();
};
