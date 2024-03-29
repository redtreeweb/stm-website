module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  "extends": [
    "eslint:recommended",
    "react-app"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
  },
  "rules": {
    "code": 80,
    // enable additional rules
    "indent": ["error", 4],
    // "linebreak-style": ["error", "unix"],
    // "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-extra-boolean-cast": 0,
    "react/prop-types": 0,

    // override default options for rules from base configurations
    // "comma-dangle": ["error", "always"],
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off",
    "max-len": [
      2,
      {
        "code": 120,
        "tabWidth": 4,
        "ignoreUrls": true,
        "ignoreTemplateLiterals": true,
        "ignoreComments": true,
        "ignoreStrings": true
      }],
    "prefer-template": "error",
    "object-curly-spacing": ["warn", "always"],
    "no-case-declarations": "warn"
  }
};

// module.exports = {
//     "env": {
//         "browser": true,
//         "node": true,
//     },
    // "extends": [
    //     "eslint:recommended",
    //     "plugin:react/recommended"
    // ],
    // "parserOptions": {
    //     "ecmaVersion": 8,
    //     "sourceType": "module",
    //     "ecmaFeatures": {
    //         "jsx": true,
    //         "experimentalObjectRestSpread": true
    //     },
    // },
    // "rules": {
    //     "code": 80,
    //     // enable additional rules
    //     "indent": ["error", 4],
    //     // "linebreak-style": ["error", "unix"],
    //     // "quotes": ["error", "double"],
    //     "semi": ["error", "always"],
    //     "no-extra-boolean-cast": 0,
    //     "react/prop-types": 0,

    //     // override default options for rules from base configurations
    //     // "comma-dangle": ["error", "always"],
    //     "no-cond-assign": ["error", "always"],

    //     // disable rules from base configurations
    //     "no-console": "off",
    //     "max-len": [
    //         2,
    //         {
    //             "code": 120,
    //             "tabWidth": 4,
    //             "ignoreUrls": true,
    //             "ignoreTemplateLiterals": true,
    //             "ignoreComments": true
    //         }],
    //     "prefer-template": "error",
    //     "object-curly-spacing": ["warn", "always"],
    //     "no-case-declarations": "warn"
    // }
// }