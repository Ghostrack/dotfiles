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

        // Enforce that class methods use "this"
        "class-methods-use-this": ["error", {
            exceptMethods: [],
        }],

        // Enforce dangling comma with multiline arrays and objects
        "comma-dangle": ["error", "always-multiline"],

        // Require return statements to either always or never specify values
        "consistent-return": "error",

        // Require curly brace conventions for all control statements
        curly: "error",

        // Require default case in switch statements
        "default-case": "error",

        // Enforce default clauses in switch statements to be last
        "default-case-last": "error",

        // Enforce default parameters to be last
        "default-param-last": "error",

        // Encourages use of dot notation whenever possible
        "dot-notation": "error",

        // Enforces consistent newlines after dots
        "dot-location": ["error", "object"],

        // Require the use of === and !==
        eqeqeq: ["error", "always", { null: "ignore" }],

        // Enforce function argument in new line only if function declaration has multiple lines
        "function-call-argument-newline": ["error", "consistent"],

        // Require grouped accessor pairs in object literals and classes, get before set
        "grouped-accessor-pairs": ["error", "getBeforeSet"],

        // Ensure for-in loops have an if statement
        "guard-for-in": "error",

        // Enforce space after object key
        "key-spacing": ["error", {
            align: {
                afterColon : true,
                beforeColon: false,
                mode       : "strict",
                on         : "colon",
            },
        }],

        // Enforce only one class per file
        "max-classes-per-file": ["error", 1],

        // Set max number of lines per file, ignore empty lines and comments
        "max-lines": ["error", {
            max           : 200,
            skipBlankLines: true,
            skipComments  : true,
        }],

        // Max statements allowed per function
        "max-statements": ["error", 15],

        // Force ternary operator to always be multiline
        "multiline-ternary": ["error", "always-multiline"],

        // Allow capitalised name only for constructors, with exceptions
        "new-cap": "error",

        // Disallow the use of alert, confirm and prompt.
        "no-alert": "error",

        // Disallow use of arguments.caller or arguments.callee
        "no-caller": "error",

        // Disallow lexical declarations in case/default clauses
        "no-case-declarations": "error",

        // Disallow returning value in constructor
        "no-constructor-return": "error",

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

        "unicorn/prevent-abbreviations": ["warn"],

        "max-lines-per-function": ["error", {
            skipBlankLines: true,
            skipComments: true,
        }],

        "react/jsx-max-depth": ["error", {max: 6}],

        "react/jsx-no-literals": "off",

    }

};
