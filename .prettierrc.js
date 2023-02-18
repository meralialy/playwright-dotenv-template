module.exports = {
	arrowParens: "always",
	bracketSameLine: true,
	bracketSpacing: true,
	printWidth: 120,
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "all",
	useTabs: true,
	overrides: [
		{
			files: ["package.json"],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
