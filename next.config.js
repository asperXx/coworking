const path = require('path');

module.exports = {
  webpack: (
    config,
    // { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    const alias = config.resolve.alias;
    alias['@'] = path.resolve(__dirname);
    alias['@ui'] = path.resolve(__dirname, './components/ui');
    return config;
  },
};
