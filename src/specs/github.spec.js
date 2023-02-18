import { test, expect } from "@playwright/test";
import GitHubPage from "../pages/github.page";
import config from "../../playwright.config";

test.describe("github", async () => {
	const baseURL = config.use.baseURL;

	test("should be logged in", async ({page}) => {
		await page.goto(baseURL);

		const githubPage = new GitHubPage(page);
		const isLoggedIn = await githubPage.isLoggedIn();
	
		expect(isLoggedIn).toBeTruthy();
	});
});
