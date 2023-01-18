const OFF = 'off'
const WARNING = 'warning'
const ERROR = 'error'

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineOptions: 'readonly'
  },
  // plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-var': ERROR,
    'no-undef': OFF,
    'vue/multi-word-component-names': OFF,
    '@typescript-eslint/no-extra-semi': OFF,
    'vue/html-self-closing': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF
  }
}
