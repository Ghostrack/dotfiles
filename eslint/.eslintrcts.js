module.exports = {
    rules: {
        "tsdoc/syntax": "warn",
        'camelcase': 'off',
        '@typescript-eslint/member-ordering': [
            "error",
            {
                default: {
                    memberTypes: [
                        // Index signature
                        "signature",
                        "call-signature",

                        // Fields
                        "public-static-field",
                        "protected-static-field",
                        "private-static-field",
                        "#private-static-field",

                        "public-decorated-field",
                        "protected-decorated-field",
                        "private-decorated-field",

                        "public-instance-field",
                        "protected-instance-field",
                        "private-instance-field",
                        "#private-instance-field",

                        "public-abstract-field",
                        "protected-abstract-field",

                        "public-field",
                        "protected-field",
                        "private-field",
                        "#private-field",

                        "static-field",
                        "instance-field",
                        "abstract-field",

                        "decorated-field",

                        "field",

                        // Static initialization
                        "static-initialization",

                        // Constructors
                        "public-constructor",
                        "protected-constructor",
                        "private-constructor",

                        "constructor",

                        // Getters and Setters
                        [
                            "public-static-get",
                            "public-static-set",
                        ],

                        [
                            "protected-static-get",
                            "protected-static-set",
                        ],

                        [
                            "private-static-get",
                            "private-static-set",
                        ],

                        [
                            "#private-static-get",
                            "#private-static-set",
                        ],

                        [
                            "public-decorated-get",
                            "public-decorated-set",
                        ],

                        [
                            "protected-decorated-get",
                            "protected-decorated-set",
                        ],

                        [
                            "private-decorated-get",
                            "private-decorated-set",
                        ],

                        [
                            "public-instance-get",
                            "public-instance-set",
                        ],

                        [
                            "protected-instance-get",
                            "protected-instance-set",
                        ],

                        [
                            "private-instance-get",
                            "private-instance-set",
                        ],

                        [
                            "#private-instance-get",
                            "#private-instance-set",
                        ],

                        [
                            "public-abstract-get",
                            "public-abstract-set",
                        ],

                        [
                            "protected-abstract-get",
                            "protected-abstract-set",
                        ],

                        [
                            "public-get",
                            "public-set",
                        ],

                        [
                            "protected-get",
                            "protected-set",
                        ],

                        [
                            "private-get",
                            "private-set",
                        ],

                        [
                            "#private-get",
                            "#private-set",
                        ],

                        [
                            "static-get",
                            "static-set",
                        ],

                        [
                            "instance-get",
                            "instance-set",
                        ],

                        [
                            "abstract-get",
                            "abstract-set",
                        ],

                        [
                            "decorated-get",
                            "decorated-set",
                        ],

                        [
                            "get",
                            "set",
                        ],

                        // Methods
                        "public-static-method",
                        "protected-static-method",
                        "private-static-method",
                        "#private-static-method",

                        "public-decorated-method",
                        "protected-decorated-method",
                        "private-decorated-method",

                        "public-instance-method",
                        "protected-instance-method",
                        "private-instance-method",
                        "#private-instance-method",

                        "public-abstract-method",
                        "protected-abstract-method",

                        "public-method",
                        "protected-method",
                        "private-method",
                        "#private-method",

                        "static-method",
                        "instance-method",
                        "abstract-method",

                        "decorated-method",

                        "method"
                    ],
                    optionalityOrder: "required-first",
                    order: "natural-case-insensitive",
                }
            }
        ],
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
                selector: 'objectLiteralMethod',
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
            {
                selector: 'typeProperty',
                format: ['camelCase', 'PascalCase', 'snake_case']
            },
            {
                selector: 'enumMember',
                format: ['camelCase', 'PascalCase']
            }
        ],
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        "init-declarations": "off",
        "@typescript-eslint/init-declarations": ["warn"],
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        "@typescript-eslint/no-type-alias": ["error", {allowAliases: "in-unions"}],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["warn", {allowTernary: true}]
    }
};
