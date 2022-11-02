module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  ignorePatterns: ['.eslintrc.js', 'next.config.js', '.next'],
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
