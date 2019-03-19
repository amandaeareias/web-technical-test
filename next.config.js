const path = require('path');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCss(withSass({
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: '@svgr/webpack',
      options: {
        svgo: false
      }
    });

    config.resolve.alias['@'] = path.join(__dirname, 'src');

    return config;
  }
}));
