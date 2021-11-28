module.exports = {
	rules: {
		'camelcase': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase', 'snake_case'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},
			{
				selector: 'objectLiteralProperty',
				format: ['camelCase', 'PascalCase', 'snake_case'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},
			{
				selector: 'classProperty',
				format: ['camelCase', 'snake_case'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
		],
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',
		'@typescript-eslint/no-dynamic-delete': 'off',
		'@typescript-eslint/no-restricted-imports': ['error', []]
	}
};
