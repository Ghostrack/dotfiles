module.exports = {
    env: {
      browser: true,
      jest   : true,
      jquery : true,
      mocha  : true,
    },
    globals: {
        AppVariables   : "readonly",
        Backbone       : "readonly",
        DocumentHandler: "readonly",
        _              : "readonly",
        define         : "readonly",
        PM             : "readonly",
        Platforms      : "readonly",
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType : "module",
    },
    extends: [
        "eslint:all",
        "plugin:import/recommended",
        "plugin:unicorn/all",
        "prettier",
        ".eslintbase.js",
    ],
    settings: {
        "import/resolver": {
            webpack: {
                config: "/home/fran/vagrant/www/purplemashweb/grunt/webpack.config.js",
            },
        },
    },
    overrides: [
        {
            files        : ["*.vue"],
            parser       : "vue-eslint-parser",
            parserOptions: {
                parser             : "@typescript-eslint/parser",
                tsconfigRootDir    : "/home/fran/vagrant/www/purplemashweb/scripts",
                project            : "tsconfig.eslint.json",
                extraFileExtensions: ["vue"],
            },
            plugins: [
                "@typescript-eslint",
                "eslint-plugin-tsdoc",
            ],
            extends: [
                "eslint:all",
                "plugin:vue/essential",
                "plugin:vue/recommended",
                "plugin:vue/strongly-recommended",
                "plugin:@typescript-eslint/all",
                "plugin:unicorn/all",
                "prettier",
                ".eslintbase.js",
                ".eslintrcts.js",
                ".eslintrcvue.js",
            ],
        },
        {
            files        : ["*.ts"],
            parser       : "@typescript-eslint/parser",
            parserOptions: {
                parser             : "@typescript-eslint/parser",
                tsconfigRootDir    : "/home/fran/vagrant/www/purplemashweb/scripts",
                project            : "tsconfig.eslint.json",
                extraFileExtensions: ["vue"],
            },
            plugins: [
                "@typescript-eslint",
                "eslint-plugin-tsdoc",
            ],
            extends: [
                "eslint:all",
                "plugin:@typescript-eslint/all",
                "plugin:unicorn/all",
                "prettier",
                ".eslintbase.js",
                ".eslintrcts.js",
            ],
        },
    ],
};
