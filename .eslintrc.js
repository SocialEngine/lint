
module.exports = {
    "env": {
        "node": true
    },
    "extends": [
        "standard",
        "plugin:react/recommended"
    ],
    "plugins": [
        "standard",
        "promise",
        "react"
    ],
    "rules": {
        "indent": ["error", 4, {"SwitchCase": 1}],
        "semi": ["error", "always"],
        "max-len": [1, 120, 4],
        "no-alert": ["error"],
        "space-before-function-paren": ["error", "always"]
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
