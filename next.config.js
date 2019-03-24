const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  },
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['store'] = path.join(__dirname, 'src/store');
    return config;
  },
});
