import eslint           from "@eslint/js";
import nextPlugin       from "@next/eslint-plugin-next";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactPlugin      from "eslint-plugin-react";
import stylisticPlugin  from "@stylistic/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import unicornPlugin    from "eslint-plugin-unicorn";

import baseRulesOverrides       from "./eslint.base.config.js";
import reactRulesOverrides      from "./eslint.react.config.js";
import typescriptRulesOverrides from "./eslint.typescript.config.js";

export default [
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
        project    : [
          "./tsconfig.json",
          "./packages/*/tsconfig.json",
        ],
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
