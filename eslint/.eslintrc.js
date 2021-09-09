module.exports = {
	globals: {
		__dirname   : true,
		AppVariables: true,
		Backbone    : true,
		module      : true
	},
	extends: [
		"eslint:all",
		"plugin:vue/essential",
		"plugin:vue/recommended",
		"plugin:vue/strongly-recommended",
		"./.eslintbase.js"
	],
	overrides: [
		{
			files        : ["*.vue"],
			parser       : "vue-eslint-parser",
			parserOptions: {
				parser             : "@typescript-eslint/parser",
				tsconfigRootDir    : `${__dirname}/scripts`,
				project            : ["./tsconfig.json"],
				extraFileExtensions: [".vue"]
			},
			plugins: ["@typescript-eslint"],
			extends: [
				"eslint:all",
				"plugin:vue/essential",
				"plugin:vue/recommended",
				"plugin:vue/strongly-recommended",
				"plugin:@typescript-eslint/all",
				"./.eslintbase.js",
				"./.eslintrcts.js"
			]
		},
		{
			files        : ["*.ts"],
			parser       : "@typescript-eslint/parser",
			parserOptions: {
				parser             : "@typescript-eslint/parser",
				tsconfigRootDir    : `${__dirname}/scripts`,
				project            : ["./tsconfig.json"],
				extraFileExtensions: [".vue"]
			},
			plugins: ["@typescript-eslint"],
			extends: [
				"eslint:all",
				"plugin:@typescript-eslint/all",
				"./.eslintbase.js",
				"./.eslintrcts.js"
			]
		}
	]
};
