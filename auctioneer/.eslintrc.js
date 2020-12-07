module.exports = {
    "extends": "google",
    "parserOptions": {
      "ecmaVersion": 2017,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": false
      }
    },
    "rules": {
      'arrow-parens': 0,
      'max-len': ['error', { 'code': 100 }],
      'no-console': 1,
      'no-debugger': 1,
      'no-dupe-args': 2, // eslint:recommended
      'no-extra-parens': 1,
      'no-extra-semi': 2, // eslint:recommended
      'no-unreachable': 2, // eslint:recommended
      'quotes': [
        'error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }
      ],
      'complexity': 1,
      'eqeqeq': 2,
      'no-fallthrough': 1,
      'no-implicit-coercion': 1,
      'no-implicit-globals': 1,
      'no-invalid-this': 1,
      "no-var": 0,
      'strict': 1,
      'camelcase': [2, { properties: 'never' }],
      "comma-dangle": 1,
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'new-cap': 1,
      'no-lonely-if': 1,
      'no-tabs': 2,
      "require-jsdoc": 0,
      'space-before-function-paren': 0
    }
  };
  