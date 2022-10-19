module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next', 'next/core-web-vitals', 'prettier'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'info', 'error'] }], // console.logが残っていればwarn
    'no-restricted-syntax': [
      // for in, for of, enumは使わない
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
    'prefer-arrow-callback': 'error', // arrow functionを許可
    'prefer-const': 'error', // const推奨
    'func-style': ['error', 'expression'], // 関数式を使わなければいけない
    'no-restricted-imports': ['error', { paths: [{ name: 'react', importNames: ['default'] }] }], // reactの明示的なimportは不要なので禁止
    'react/prop-types': 'off', // ts使うので不要
    'react/react-in-jsx-scope': 'off', // reactはグローバルなので不要
    'react/display-name': 'error', // 無名関数を禁止する
    'react/no-unused-prop-types': 'warn', // 未使用propsは警告
    'react-hooks/rules-of-hooks': 'error', // hooksの基本的なlinter
    'react-hooks/exhaustive-deps': 'warn', // effectやcallbackのdeps linter
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }], // 未使用変数
  },
  overrides: [
    // 一部ルールを除外する
    {
      files: ['src/pages/**/*.tsx'], // pagesのdefault exportは仕方ないので除外
      rules: { 'import/no-default-export': 'off' },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['**/*.stories.tsx'], //storybookで不必要なルールをオフ
      rules: {
        'arrow-body-style': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
}
