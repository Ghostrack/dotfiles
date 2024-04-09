module.exports = {

    // Enable browser environment
    env: {
        browser: true,
    },

    ignorePatterns: [
        "/lib/*",
        "components/ui/*",
    ],

    parser: "@typescript-eslint/parser",

    plugins: [
        "@typescript-eslint",
        "eslint-plugin-tsdoc",
    ],

    // Rulesets
    extends: [
        "eslint:all",
        "plugin:@typescript-eslint/all",
        "plugin:import/recommended",
        "plugin:react/all",
        "plugin:react-hooks/recommended",
        "plugin:unicorn/all",
        "next/core-web-vitals",
        // "prettier",
        ".eslintbase.js",
        ".eslintrcts.js",
    ],

    // Use latest version of ECMA
    parserOptions: {
        ecmaVersion: "latest",
        sourceType : "module",
        //     parser             : "@typescript-eslint/parser",
        //     tsconfigRootDir    : "/home/fran/vagrant/www/purplemashweb/scripts",
        project    : "tsconfig.json",
        //     extraFileExtensions: ["vue"],
    },

};
