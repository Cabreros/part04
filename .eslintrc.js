module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: { "prettier/prettier": ["error"] },
};
