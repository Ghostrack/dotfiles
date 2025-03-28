const MAX_CLASSES_PER_FILE = 1;
const MAX_STATEMENTS_PER_FUNCTION = 15;

module.exports = {
  rules: {

    // Enforce array multiline if it has more than 1 items
    "@stylistic/array-bracket-newline": [
      "warn",
      { minItems: 2 },
    ],

    "@stylistic/comma-dangle": [
      "warn",
      "always-multiline",
    ],

    "@stylistic/function-call-argument-newline": [
      "warn",
      "consistent",
    ],

    // Enforce space after object key
    "@stylistic/key-spacing": [
      "warn",
      { align: "colon" },
    ],

    "@stylistic/no-multi-spaces": [
      "warn",
      {
        exceptions: {
          ImportDeclaration  : true,
          TSPropertySignature: true,
          VariableDeclarator : true,
        },
      },
    ],

    "@stylistic/padded-blocks": [
      "warn",
      {
        blocks : "never",
        classes : "always",
        switches: "never",
      },
    ],

    // Enforce quote around object properties only if needed.
    "@stylistic/quote-props": [
      "error",
      "consistent-as-needed",
    ],

    "@stylistic/type-annotation-spacing": ["warn"],

    // Enforces getter/setter pairs in objects
    "accessor-pairs": "off",

    // Enforces return statements in callbacks of array's methods
    "array-callback-return": [
      "error",
      { allowImplicit: true },
    ],

    // Treat var statements as if they were block scoped
    "block-scoped-var": "error",

    // Enforce that class methods use "this"
    "class-methods-use-this": [
      "error",
      { exceptMethods: [] },
    ],

    // Require return statements to either always or never specify values
    "consistent-return": "error",

    // Require curly brace conventions for all control statements
    "curly": "error",

    // Require default case in switch statements
    "default-case": "error",

    // Enforce default clauses in switch statements to be last
    "default-case-last": "error",

    // Enforce default parameters to be last
    "default-param-last": "error",

    // Encourages use of dot notation whenever possible
    "dot-notation": "error",

    // Require the use of === and !==
    "eqeqeq": [
      "error",
      "always",
      { null: "ignore" },
    ],

    // Require grouped accessor pairs in object literals and classes, get before set
    "grouped-accessor-pairs": [
      "error",
      "getBeforeSet",
    ],

    // Ensure for-in loops have an if statement
    "guard-for-in": "error",

    // Enforce only one class per file
    "max-classes-per-file": [
      "error",
      MAX_CLASSES_PER_FILE,
    ],

    // Set max number of lines per file, ignore empty lines and comments
    "max-lines": [
      "error",
      {
        max           : 200,
        skipBlankLines: true,
        skipComments  : true,
      },
    ],

    "max-lines-per-function": [
      "error",
      {
        skipBlankLines: true,
        skipComments  : true,
      },
    ],

    // Max statements allowed per function
    "max-statements": [
      "error",
      MAX_STATEMENTS_PER_FUNCTION,
    ],

    // Allow capitalised name only for constructors, with exceptions
    "new-cap": "off",

    // Disallow the use of alert, confirm and prompt.
    "no-alert": "error",

    // Disallow use of arguments.caller or arguments.callee
    "no-caller": "error",

    // Disallow lexical declarations in case/default clauses
    "no-case-declarations": "error",

    // Disallow returning value in constructor
    "no-constructor-return": "error",

    // Allow ternary operator
    "no-ternary": "off",

    // Handled by typescript compiler
    "no-undef": "off",

    // Allow use of undefined
    "no-undefined": "off",

    // No dangling underscore allowed, with exceptions
    "no-underscore-dangle": [
      "error",
      { allow: ["_id"] },
    ],

    // Allow use of variable before definition
    "no-use-before-define": "off",

    "one-var": [
      "error",
      "never",
    ],

    // Don't enforce object destructuring
    "prefer-destructuring": [
      "error",
      { object: false },
    ],

    // Enforce radix value in numerical operators only if needed
    "radix": [
      "error",
      "as-needed",
    ],

    // Sort Imports
    "sort-imports": [
      "warn",
      {
        allowSeparatedGroups: true,
        ignoreCase          : true,
      },
    ],

    "unicorn/filename-case": [
      "warn",
      { case: "pascalCase" },
    ],

    "unicorn/prevent-abbreviations": "off",
  },

};
