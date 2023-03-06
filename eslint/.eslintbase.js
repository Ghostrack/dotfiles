module.exports = {
    rules: {

        // Disable limit number of lines
        "max-lines": "off",

        // Enforce quote around object properties only if needed.
        "quote-props": ["error", "consistent-as-needed"],

        // Force double quotes
        "quotes": ["error", "double"],

        // Sort Imports
        'sort-imports': ['error', {
            allowSeparatedGroups: true,
            ignoreCase: true
        }],

        // Don't enforce padding blocks with empty lines
        'padded-blocks': 'off',

        // Allow ternary operator
        'no-ternary': 'off',

        // Allow use of undefined
        'no-undefined': "off",

        // Allow use of variable before definition
        'no-use-before-define': 'off',

        // Max statements allowed per function
        'max-statements': [
            'error', 15
        ],

        // Enforce variables being declared separately
        'one-var': ['error', 'never'],

        // Enforce radix value in numerical operators only if needed
        radix: ['error', 'as-needed'],

        // Enforce function argument in new line only if function declaration has multiple lines
        'function-call-argument-newline': ['error', 'consistent'],

        // Force ternary operator to always be multiline
        'multiline-ternary': ['error', 'always-multiline'],

        // Force arrays to always be multiline
        'array-element-newline': ['error', 'always'],

        // No dangling underscore allowed, with exceptions
        'no-underscore-dangle': [
            'error',
            {allow: ['_id']},
        ],

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

        // Enforce array multiline if it has more than 1 items
        'array-bracket-newline': [
            'error',
            {minItems: 2}
        ],

        // Don't enforce object destructuring
        'prefer-destructuring': [
            'error',
            {object: false}
        ],

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

        // Enforce dangling comma with multiline arrays and objects
        "comma-dangle": ["error", "always-multiline"],

        // Allow pascal case for filenames
        "unicorn/filename-case": ["error", {case: "pascalCase"}],

    }

};
