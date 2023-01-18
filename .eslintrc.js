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
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@vue/typescript/recommended',
    'prettier'
  ],
  // 插件新增prettier
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
    'vue/multi-word-component-names': OFF,
    '@typescript-eslint/no-extra-semi': OFF,
    'vue/html-self-closing': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/no-empty-function': WARNING
  }
}
