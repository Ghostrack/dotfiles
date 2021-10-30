module.exports = {
    parserOptions: {
        ecmaVersion: "latest",
        sourceType : "module"
    },
    extends: [
        "eslint:all",
        "./.eslintbase.js"
    ],
    overrides: [
        {
            files        : ["*.vue"],
            parser       : "vue-eslint-parser",
            parserOptions: {
                parser             : "@typescript-eslint/parser",
                tsconfigRootDir    : "/home/fran/vagrant/www/purplemashweb/scripts",
                project            : ["./tsconfig.eslint.json"],
                extraFileExtensions: [".vue"]
            },
            plugins: ["@typescript-eslint"],
            extends: [
                "eslint:all",
                "plugin:vue/essential",
                "plugin:vue/recommended",
                "plugin:vue/strongly-recommended",
                "plugin:@typescript-eslint/all",
                "./.eslintbase.js",
                "./.eslintrcts.js",
                "./.eslintrcvue.js"
            ]
        },
        {
            files        : ["*.ts"],
            parser       : "@typescript-eslint/parser",
            parserOptions: {
                parser             : "@typescript-eslint/parser",
                tsconfigRootDir    : "/home/fran/vagrant/www/purplemashweb/scripts",
                project            : ["./tsconfig.eslint.json"],
                extraFileExtensions: [".vue"]
            },
            plugins: ["@typescript-eslint"],
            extends: [
                "eslint:all",
                "plugin:@typescript-eslint/all",
                "./.eslintbase.js",
                "./.eslintrcts.js"
            ]
        }
    ]
};
