import js from '@eslint/js';
import * as globals from 'globals';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJest from 'eslint-plugin-jest';

export default [
  js.configs.recommended,

  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        document: 'readonly',
        window: 'readonly',
        localStorage: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'no-console': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },

  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.jest,
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
    },
  },
];
