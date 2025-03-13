import js from '@eslint/js';
import google from '@hellomouse/eslint-config-google';

export default [
  js.configs.recommended,
  google,
  {
    settings: {
      jsdoc: {
        tagNamePreference: {
          returns: {
            replacement: 'return'
          },

          yields: {
            replacement: 'yield'
          },

          augments: {
            replacement: 'extends'
          }
        }
      }
    },

    rules: {
      'require-jsdoc': 'off',
      'comma-dangle': ['error', 'never'],

      'padded-blocks': [
        'error',
        {
          blocks: 'never'
        }
      ],

      'arrow-parens': ['error', 'as-needed'],
      'one-var': 'off',
      camelcase: 'off',

      'max-len': [
        'error',
        {
          code: 120,
          tabWidth: 4,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true
        }
      ],

      'id-match': 'off',
      curly: 'off',
      'block-spacing': ['error', 'always'],

      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true
        }
      ],

      'object-curly-spacing': ['error', 'always'],

      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false
        }
      ],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return'
        },
        {
          blankLine: 'always',
          prev: ['const', 'let'],
          next: '*'
        },
        {
          blankLine: 'any',
          prev: ['const', 'let'],
          next: ['const', 'let']
        }
      ],

      eqeqeq: ['warn', 'smart'],

      'no-redeclare': [
        'error',
        {
          builtinGlobals: true
        }
      ],

      'no-shadow': 'error',
      'no-useless-return': 'error',
      'no-cond-assign': 'error',
      'block-scoped-var': 'error',
      'no-else-return': 'error',
      'no-undef-init': 'error',
      'quote-props': ['error', 'as-needed'],
      semi: ['error', 'always'],
      'prefer-template': 'error'
    }
  }
];
