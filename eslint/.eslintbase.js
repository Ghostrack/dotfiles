module.exports = {
	rules: {
        'quotes': ['error', 'double'],
        'indent': ['error', 4],
		'max-lines': 'off',
		'quote-props': [ 'error', 'as-needed'],
		'sort-keys': 'off',
		'sort-imports': ['error', {
			allowSeparatedGroups: true,
			ignoreCase: true
		}],
		'padded-blocks': 'off',
		'no-ternary': 'off',
		'no-use-before-define': 'off',
		'max-statements': [
			'error', 15
		],
		'one-var': ['error', 'never'],
		radix: ['error', 'as-needed'],
		'function-call-argument-newline': ['error', 'consistent'],
		'multiline-ternary': ['error', 'always-multiline'],
		'array-element-newline': ['error', 'consistent'],
		'no-underscore-dangle': [
			'error',
			{allow: ['_id']}
		],
		'key-spacing': [
			'error',
			{
				align: {
					beforeColon: false,
					afterColon : true,
					on         : 'colon',
					mode       : 'strict'
				}
			}
		],
		'array-bracket-newline': [
			'error',
			{minItems: 2}
		],
		'prefer-destructuring': [
			'error',
			{object: false}
		],
		'new-cap': [
			'error',
			{capIsNewExceptions: [
                'Component',
				'Inject',
                'Mixins',
                'Prop',
				'Provide',
				'Ref',
				'VModel',
                'Watch'
            ]}
		],
        "comma-dangle": ["error", "always-multiline"],
        "unicorn/filename-case": ["error", {case: "pascalCase"}]
	}
};
