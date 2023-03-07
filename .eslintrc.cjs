module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/jsx-key': 'error',
        'react/boolean-prop-naming': 'warn',
        'react/function-component-definition': [
            'warn',
            {
                namedComponents: 'function-declaration', // function Component (props) {}
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-max-depth': ['warn', { max: 6 }],
    },
    ignorePatterns: ['node_modules/', 'dist/', 'build/', '**.d.ts'],
};
