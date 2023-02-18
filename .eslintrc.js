module.exports = {
	env: {
		browser: true,
		es2022: true,
		jest: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:playwright/playwright-test"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"no-console": ["error"],
		semi: ["error", "always"],
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
