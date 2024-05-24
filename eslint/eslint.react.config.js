module.exports = {
  rules: {
    "react/forbid-component-props": [
      "error",
      {
        forbid: [{
          allowedFor: [
            "AppShell",
            "NavLink",
          ],
          propName: "className",
        }],
      },
    ],

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

    "react/jsx-indent": "off",

    "react/jsx-indent-props": "off",

    "react/jsx-props-no-spreading": [
      "error",
      {
        exceptions: [
          "AppShell",
          "TextInput",
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
