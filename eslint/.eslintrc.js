module.exports = {

    // Enable browser environment
    env: {
        browser: true,
    },

    // Rulesets
    extends: [
        "eslint:all",
        "plugin:import/recommended",
        "plugin:unicorn/all",
        "prettier",
        ".eslintbase.js",
    ],

    // Overrides for vue and typescript files
    overrides: [
        {
            files        : ["*.vue"],
            parser       : "vue-eslint-parser",
            // parserOptions: {
            //     parser             : "@typescript-eslint/parser",
            //     tsconfigRootDir    : "/home/fran/vagrant/www/purplemashweb/scripts",
            //     project            : "tsconfig.eslint.json",
            //     extraFileExtensions: ["vue"],
            // },
            // plugins: [
            //     "@typescript-eslint",
            //     "eslint-plugin-tsdoc",
            // ],
            extends: [
                "eslint:all",
                "plugin:vue/essential",
                "plugin:vue/recommended",
                "plugin:vue/strongly-recommended",
                // "plugin:@typescript-eslint/all",
                "plugin:import/recommended",
                "plugin:unicorn/all",
                "prettier",
                ".eslintbase.js",
                // ".eslintrcts.js",
                ".eslintrcvue.js",
            ],
        },
        // {
        //     files        : ["*.ts"],
        //     parser       : "@typescript-eslint/parser",
        //     parserOptions: {
        //         parser             : "@typescript-eslint/parser",
        //         tsconfigRootDir    : "/home/fran/vagrant/www/purplemashweb/scripts",
        //         project            : "tsconfig.eslint.json",
        //         extraFileExtensions: ["vue"],
        //     },
        //     plugins: [
        //         "@typescript-eslint",
        //         "eslint-plugin-tsdoc",
        //     ],
        //     extends: [
        //         "eslint:all",
        //         "plugin:@typescript-eslint/all",
        //         "plugin:unicorn/all",
        //         "prettier",
        //         ".eslintbase.js",
        //         ".eslintrcts.js",
        //     ],
        // },
    ],

    // Use latest version of ECMA
    parserOptions: {
        ecmaVersion: "latest",
        sourceType : "module",
    },

};
