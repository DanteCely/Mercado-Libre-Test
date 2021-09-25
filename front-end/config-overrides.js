const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@utils': 'src/utils',
    '@services': 'src/services',
    '@i18n': 'src/i18n',
    '@routes': 'src/routes',
  })(config);

  return config;
};
