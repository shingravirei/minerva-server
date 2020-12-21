module.exports = {
    env: {
        // commonjs: true,
        node: true,
        es2020: true,
        jest: true
    },
    extends: ['airbnb-typescript/base'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json'
    },
    rules: {
        'no-console': 0,
        semi: 'off',
        'no-unused-vars': 'warn',
        'arrow-body-style': 'warn',
        'linebreak-style': ['off', 'windows'],
        indent: ['error', 4],
        'comma-dangle': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-unused-vars': 'warn'
    }
};
