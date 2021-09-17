module.exports = {
	globals: {
		$                   : true,
		__dirname           : true,
		AppVariables        : true,
		Backbone            : true,
		Marionette          : true,
		module              : true,
		PM                  : true,
		PMEntitySelectorView: true,
		PMSettings          : true,
		T                   : true
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
				tsconfigRootDir    : "/home/fran/vagrant/www/purplemashweb/scripts",
				project            : ["./tsconfig.eslint.json"],
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
				tsconfigRootDir    : "/home/fran/vagrant/www/purplemashweb/scripts",
				project            : ["./tsconfig.eslint.json"],
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
