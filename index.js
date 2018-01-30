module.exports = {
  extends: [
    // This comes last so that prettier-config can turn off appropriate rules given the order of precedence by eslint 'extends'
    require.resolve('eslint-config-uber-universal-stage-3'),
  ],

  plugins: [],
  rules: {},
};
