import { createConfigForNuxt } from "@nuxt/eslint-config";
import eslint                  from "@eslint/js";
import stylisticPlugin         from "@stylistic/eslint-plugin";
import typescriptPlugin        from "typescript-eslint";
import unicornPlugin           from "eslint-plugin-unicorn";
import vuePlugin               from "eslint-plugin-vue";

import baseRulesOverrides       from "./eslint.base.config.js";
import typescriptRulesOverrides from "./eslint.typescript.config.js";

export default typescriptPlugin.config(
  stylisticPlugin.configs.all,
  stylisticPlugin.configs.customize({
    arrowParens: true,
    braceStyle : "1tbs",
    quotes     : "double",
    semi       : true,
  }),
  eslint.configs.all,
  unicornPlugin.configs.all,
  baseRulesOverrides,
  {
    extends: [
      typescriptPlugin.configs.strictTypeChecked,
      typescriptPlugin.configs.stylisticTypeChecked,
      vuePlugin.configs["flat/recommended"],
    ],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".vue"],
        parser             : typescriptPlugin.parser,
        project            : ["tsconfig.eslint.json"],
        projectService     : true,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin.plugin,
    },
    rules: {
      ...createConfigForNuxt({ features: { stylistic: true } }).rules,
      ...typescriptRulesOverrides.rules,
    },
  },
  {
    files: ["**/*test.ts"],
    rules: {
      "@typescript-eslint/no-magic-numbers": "off",
      "id-length"                          : "off",
      "max-statements"                     : "off",
    },
  },
  // {
  //   files: [
  //     "**/*.ts",
  //     "**/*.tsx",
  //   ],
  //   plugins: {
  //     "react"      : reactPlugin,
  //     "react-hooks": reactHooksPlugin,
  //   },
  //   rules: {
  //     ...reactPlugin.configs.all.rules,
  //     ...reactHooksPlugin.configs.recommended.rules,
  //     ...reactRulesOverrides.rules,
  //   },
  // },
  // {
  //   files: [
  //     "**/*.ts",
  //     "**/*.tsx",
  //   ],
  //   plugins: { "@next/next": nextPlugin },
  //   rules  : {
  //     ...nextPlugin.configs.recommended.rules,
  //     ...nextPlugin.configs["core-web-vitals"].rules,
  //   },
  // },
);
