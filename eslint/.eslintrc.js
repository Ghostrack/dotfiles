module.exports = {
	globals: {
		_        : true,
		axios    : true,
		require  : true,
		moment   : true,
		process  : true,
		Vue      : true,
		path     : true,
		$        : true,
		module   : true,
		__dirname: true
	},
	extends: [
		'eslint:all',
		'plugin:vue/essential',
		'plugin:vue/recommended',
		'plugin:vue/strongly-recommended',
		'./.eslintdarwin.js',
		'./.eslintoverride.js'
	],
	overrides: [
		{
			files        : ['*.vue'],
			parser       : 'vue-eslint-parser',
			parserOptions: {
				parser             : '@typescript-eslint/parser',
				tsconfigRootDir    : __dirname,
				project            : ['./tsconfig.json'],
				extraFileExtensions: ['.vue']
			},
			plugins: ['@typescript-eslint'],
			extends: [
				'eslint:all',
				'plugin:vue/essential',
				'plugin:vue/recommended',
				'plugin:vue/strongly-recommended',
				'plugin:@typescript-eslint/all',
				'./.eslintdarwin.js',
				'./.eslintrcts.js'
			]
		},
		{
			files        : ['*.ts'],
			parser       : '@typescript-eslint/parser',
			parserOptions: {
				parser             : '@typescript-eslint/parser',
				tsconfigRootDir    : __dirname,
				project            : ['./tsconfig.json'],
				extraFileExtensions: ['.vue']
			},
			plugins: ['@typescript-eslint'],
			extends: [
				'eslint:all',
				'plugin:@typescript-eslint/all',
				'./.eslintdarwin.js',
				'./.eslintrcts.js'
			]
		}
	]
};
