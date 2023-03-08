module.exports = {
    rules: {

        // enforces getter/setter pairs in objects
        'accessor-pairs': 'off',

        // Enforce array multiline if it has more than 1 items
        'array-bracket-newline': [
            'error',
            {minItems: 2}
        ],

        // Enforces return statements in callbacks of array's methods
        'array-callback-return': [
            'error',
            { allowImplicit: true }
        ],

        // Force arrays to always be multiline
        'array-element-newline': ['error', 'always'],

        // Treat var statements as if they were block scoped
        'block-scoped-var': 'error',

        // Enforce dangling comma with multiline arrays and objects
        "comma-dangle": ["error", "always-multiline"],

        // Enforce function argument in new line only if function declaration has multiple lines
        'function-call-argument-newline': ['error', 'consistent'],

        // Enforce space after object key
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

        // Disable limit number of lines
        "max-lines": "off",

        // Max statements allowed per function
        'max-statements': [
            'error', 15
        ],

        // Force ternary operator to always be multiline
        'multiline-ternary': ['error', 'always-multiline'],

        // Allow capitalised name only for constructors, with exceptions
        'new-cap': [
            'error',
            {capIsNewExceptions: [
                "Component",
                "Inject",
                "Mixins",
                "Prop",
                "PropSync",
                "Provide",
                "Ref",
                "VModel",
                "Watch"
            ]}
        ],

        // Allow ternary operator
        'no-ternary': 'off',

        // Allow use of undefined
        'no-undefined': "off",

        // No dangling underscore allowed, with exceptions
        'no-underscore-dangle': [
            'error',
            {allow: ['_id']},
        ],

        // Allow use of variable before definition
        'no-use-before-define': 'off',

        // Enforce variables being declared separately
        'one-var': ['error', 'never'],

        // Don't enforce padding blocks with empty lines
        'padded-blocks': 'off',

        // Don't enforce object destructuring
        'prefer-destructuring': [
            'error',
            {object: false}
        ],

        // Enforce quote around object properties only if needed.
        "quote-props": ["error", "consistent-as-needed"],

        // Force double quotes
        "quotes": ["error", "double"],

        // Enforce radix value in numerical operators only if needed
        radix: ['error', 'as-needed'],

        // Sort Imports
        'sort-imports': ['error', {
            allowSeparatedGroups: true,
            ignoreCase: true
        }],

        // Allow pascal case for filenames
        "unicorn/filename-case": ["error", {case: "pascalCase"}],

    }

};
