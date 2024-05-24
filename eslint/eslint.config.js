const eslint           = require("@eslint/js");
const nextPlugin       = require("@next/eslint-plugin-next");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const reactPlugin      = require("eslint-plugin-react");
const stylisticPlugin  = require("@stylistic/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const unicornPlugin    = require("eslint-plugin-unicorn");

const baseRulesOverrides       = require("./eslint.base.config.js");
const reactRulesOverrides      = require("./eslint.react.config.js");
const typescriptRulesOverrides = require("./eslint.typescript.config.js");

module.exports = [
  {
    ignores: [
      "components/ui/*",
      "lib/*",
    ],
  },
  stylisticPlugin.configs["all-flat"],
  stylisticPlugin.configs.customize({
    arrowParens: true,
    braceStyle : "1tbs",
    quotes     : "double",
    semi       : true,
  }),
  {
    files: [
      "**/*.js",
      "**/*.jsx",
      "**/*.ts",
      "**/*.tsx",
    ],
    languageOptions: {
      globals: {
        FormData       : "readonly",
        URLSearchParams: "readonly",
        fetch          : "readonly",
        localStorage   : "readonly",
        module         : "readonly",
        process        : "readonly",
        require        : "readonly",
        structuredClone: "readonly",
      },
    },
    plugins: {
      unicorn: unicornPlugin,
    },
    rules: {
      ...eslint.configs.all.rules,
      ...unicornPlugin.configs.all.rules,
      ...baseRulesOverrides.rules,
    },
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
    ],
    languageOptions: {
      parser       : typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        project    : "tsconfig.json",
        sourceType : "module",
      },
    },
    plugins: { "@typescript-eslint": typescriptPlugin },
    rules  : {
      ...typescriptPlugin.configs.all.rules,
      ...typescriptRulesOverrides.rules,
    },
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
    ],
    plugins: {
      "react"      : reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.all.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactRulesOverrides.rules,
    },
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
    ],
    plugins: { "@next/next": nextPlugin },
    rules  : {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];
