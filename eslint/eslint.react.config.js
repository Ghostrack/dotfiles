module.exports = {
  rules: {

    "react/jsx-filename-extension": [
      "error",
      {
        allow     : "as-needed",
        extensions: [
          ".jsx",
          ".tsx",
        ],
      },
    ],

    "react/require-default-props": [
      "error",
      {
        functions: "defaultArguments",
      },
    ],

  },

};
