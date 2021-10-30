module.exports = {
	rules: {
		'max-lines'               : 'off',
		'max-lines-per-function'  : 'off',
		'quote-props': [
			'error', 'as-needed'
		],
		'sort-keys'              : 'off',
		'padded-blocks'          : 'off',
		'no-magic-numbers'       : 'off',
		'no-ternary'             : 'off',
		'no-console'             : 'off',
		'no-use-before-define'   : 'off',
		'multiline-comment-style': 'off',
		'no-process-env'         : 'off',
		'max-params'             : 'off',
		'max-statements'         : [
			'error', 15
		],
		'one-var': 'off',
		radix    : [
			'error', 'as-needed'
		],
		'consistent-this': [
			'error', 'env'
		],
		'function-call-argument-newline': [
			'error', 'consistent'
		],
		'multiline-ternary': [
			'error', 'always-multiline'
		],
		'array-element-newline': [
			'error', 'consistent'
		],
		'no-unused-expressions': [
			'error',
			{
				allowTernary: true
			}
		],
		'sort-imports': [
			'error',
			{
				ignoreCase           : true,
				ignoreDeclarationSort: true,
				ignoreMemberSort     : false,
				memberSyntaxSortOrder: [
					'none',
					'all',
					'multiple',
					'single'
				]
			}
		],
		camelcase: [
			'error',
			{
				properties: 'never'
			}
		],
		'no-underscore-dangle': [
			'error',
			{
				allow: ['_d']
			}
		],
		'capitalized-comments': 'off',
		'id-length'           : 'off',
		'no-unused-vars'      : [
			'error',
			{
				ignoreRestSiblings: true
			}
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
			{capIsNewExceptions: ['Component']}
		]
	}
};
