module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["build", "ci", "test", "config", "style", "refactor", "feat", "fix", "doc", "typo"],
    ],
  },
};
