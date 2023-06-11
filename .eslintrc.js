module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'standard-with-typescript',
    // 'plugin:react/recommended',
    // 'plugin:@next/next/recommended',
    'eslint:recommended',
    'next',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
