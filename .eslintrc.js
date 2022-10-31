module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js', 'next.config.js', '.next'],
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
