module.exports = {
	globals: {
		_: true,
		axios: true,
		require: true,
		moment: true,
		process: true,
		Vue: true,
		path: true,
		$: true,
		module: true
	},
	extends: [
		'eslint:all',
		'plugin:vue/essential',
		'plugin:vue/recommended',
		'plugin:vue/strongly-recommended'
	],
	rules: {
		'vue/html-indent': 0,
		'vue/max-attributes-per-line': [
			1,
			{
				singleline: 1,
				multiline: {
					max: 1,
					allowFirstLine: false
				}
			}
		],
		'vue/multiline-html-element-content-newline': ['error', {allowEmptyLines: true}],
		'max-lines': 'off',
		'no-tabs': 'off',
		'max-len': 'off',
		quotes: ['error', 'single', {avoidEscape: true}],
		'max-lines-per-function': 'off',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		indent: ['error', 'tab', {SwitchCase: 1}],
		'quote-props': ['error', 'as-needed'],
		'sort-keys': 'off',
		'padded-blocks': 'off',
		'no-magic-numbers': 'off',
		'no-ternary': 'off',
		'dot-location': 'off',
		'consistent-return': 'off',
		'no-console': 'off',
		'no-use-before-define': 'off',
		'multiline-comment-style': 'off',
		'no-process-env': 'off',
		'max-params': 'off',
		'max-statements': ['error', 15],
		'one-var': 'off',
		radix: ['error', 'as-needed'],
		'consistent-this': ['error', 'env'],
		'function-call-argument-newline': ['error', 'consistent'],
		'multiline-ternary': ['error', 'always-multiline'],
		'array-element-newline': ['error', 'consistent'],
		'no-unused-expressions': ['error', {allowTernary: true}],
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
			}
		],
		camelcase: ['error', {properties: 'never'}],
		'no-underscore-dangle': ['error', {allow: ['_d']}],
		'capitalized-comments': 'off',
		'id-length': 'off',
		'no-unused-vars': ['error', {ignoreRestSiblings: true}]
	}
};
