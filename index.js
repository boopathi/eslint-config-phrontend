// Errors
var errors = [
  'no-alert',
  'no-caller',
  'no-eval',
  'no-floating-decimal',
  'no-implied-eval',
  'no-loop-func',
  'no-proto',
  'no-with',
  'eqeqeq',
  'eol-last',
  'no-trailing-spaces',
  'space-return-throw-case',
];

// Warnings
var warnings = [
  'no-console',
  'no-else-return',
  'no-extra-bind',
  'no-invalid-this',
  'no-multi-spaces',
  'wrap-iife',

  'no-catch-shadow',
  'no-delete-var',
  'no-label-var',
  'no-shadow',
  'no-shadow-restricted-names',
  'no-undef',
  'no-undef-init',
  'no-undefined',
  'no-unused-vars',
  'no-use-before-define',

  'camelcase',
  'new-cap',
  'new-parens',
  'no-array-constructor',
  'no-inline-comments',
  'no-lonely-if',
  'no-mixed-spaces-and-tabs',
  'no-nested-ternary',
  'no-new-object',
  'no-spaced-func',
  'spaced-comment',

];

// ones that take options
var rules = {
  indent: [2, 2],
  'comma-spacing': [2, { before: false, after: true }],
  'comma-style': [2, 'last'],
  'key-spacing': [2, { beforeColon: false, afterColon: true }],
  'max-nested-callbacks': [2, 3],
  'no-multiple-empty-lines': [1, { max: 2 }],
  'quotes': [2, 'single'],
  'semi': [2, 'always'],
  'semi-spacing': [2, { before: false, after: true }],
  'space-after-keywords': [2, 'always'],
};

warnings.map(function(w) { rules[w] = 1; });
// errors override warnings
// if you want to make it a warning, make sure you remove it from errors
errors.map(function(e) { rules[e] = 2; });

module.exports = {
  env: {
    node: true,
    browser: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  rules: rules
};
