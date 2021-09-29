const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@contexts': 'src/contexts',
    '@i18n': 'src/i18n',
    '@routes': 'src/routes',
    '@services': 'src/services',
    '@utils': 'src/utils',
  })(config);

  return config;
};
