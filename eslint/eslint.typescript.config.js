const propertyNamesExceptions = "^(Location|Access-Control-Allow-Credentials|Access-Control-Allow-Origin|Content-Type)$";

module.exports = {
  rules: {
    "@typescript-eslint/init-declarations": ["warn"],

    "@typescript-eslint/naming-convention": [
      "warn",
      {
        filter: {
          match: false,
          regex: propertyNamesExceptions,
        },
        format  : ["camelCase"],
        selector: "default",
      },
      {
        format  : ["PascalCase"],
        selector: "typeLike",
      },
      {
        format: [
          "camelCase",
          "PascalCase",
        ],
        selector: "import",
      },
      {
        filter: {
          match: false,
          regex: propertyNamesExceptions,
        },
        format: [
          "camelCase",
          "snake_case",
          "UPPER_CASE",
        ],
        selector: "property",
      },
      {
        format: [
          "camelCase",
          "PascalCase",
        ],
        selector: "typeProperty",
      },
    ],

    "@typescript-eslint/no-dynamic-delete": "off",

    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],

    "@typescript-eslint/no-unused-expressions": [
      "warn",
      { allowTernary: true },
    ],

    "@typescript-eslint/prefer-readonly-parameter-types": "off",

    "camelcase": "off",

    "init-declarations": "off",

    "no-unused-expressions": "off",
  },
};
