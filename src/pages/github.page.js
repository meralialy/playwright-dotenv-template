import config from "../../playwright.config";

export default class GitHubPage {
	constructor(page) {
		this.page = page;
	}

	async isLoggedIn() {
		const element = await this.page.locator(`summary img[alt="@${config.credentials.username}"]`);

		await element.waitFor({ state: "visible" });

		return await element.isVisible();
	}

	async isLoggedOut() {
		await this.page.locator(`summary > img[alt="@${config.credentials.username}"]`).click();
		await this.page.locator(`form.logout-form > button[type="submit"]`).click();

		const element = await this.page.locator(`summary > img[alt="@${config.credentials.username}"]`);

		await element.waitFor({ state: "hidden" });

		return await element.isHidden();
	}
}
