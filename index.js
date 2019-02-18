module.exports = {
  rules: {
    "default-case" : 1,
    "max-len" : 1,
    "no-new" : 1,
    "consistent-return" : 1,
    "no-confusing-arrow" : 1,
    "indent" : ["error", 2],
    "no-tabs" : 0,
    "no-underscore-dangle" : 0,
    "no-plusplus" : 0,
    "import/prefer-default-export" : 0,
    "radix" : [ 2, "as-needed" ],
    "class-methods-use-this" : 0,
    "no-param-reassign" : ["error", { "props": false }],
    "no-console": ["warn", { "allow": ["error"] }],
    "no-use-before-define": ["error", { "functions": false, "classes": true }],
    "prefer-destructuring": ["warn", {"object": true, "array": true}],
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": false }],
    "radix": ["error", "as-needed"],
    "comma-dangle": ["error", "always-multiline"],
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": ["error", {
      "multiline": "never",
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 2,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/html-self-closing": "off",
    "vue/require-default-prop": "off",
  },
  extends: ["airbnb-base", "plugin:vue/strongly-recommended"],
  plugins: ["vue"],
};
