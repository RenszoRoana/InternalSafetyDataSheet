require("@rushstack/eslint-config/patch/modern-module-resolution");
module.exports = {
  extends: ["@microsoft/eslint-config-spfx/lib/profiles/react"],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    "@microsoft/spfx/no-async-await": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-no-bind": ["error", {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],
    "quotes": ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
    "object-curly-spacing": ["error", "always"],
    "react/jsx-curly-spacing": ["error", "never"],
    "semi": [2 ,"always" ],
  }
};