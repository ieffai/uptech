module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: ['react'],
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        '@typescript-eslint/strict-boolean-expressions': 0,
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true
        }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/display-name': 'off'
    }
}
