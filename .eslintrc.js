
module.exports = {
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'env': {
        'node': true
    },
    'extends': [
        'standard',
        'plugin:react/recommended'
    ],
    'plugins': [
        'standard',
        'promise',
        'react'
    ],
    'parser': 'babel-eslint',
    'rules': {
        'indent': 'off',
        'indent-legacy': ['error', 4, {'SwitchCase': 1}],
        'semi': ['error', 'always'],
        'max-len': [1, 120, 4],
        'no-alert': ['error'],
        'space-before-function-paren': ['error', 'always'],
        'react/react-in-jsx-scope': 'off'
    },
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    }
};
