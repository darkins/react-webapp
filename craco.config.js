const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#222222',
              '@link-color': '#1264D1',
              '@body-background': '#f0f2f5',
              '@card-padding-base': '12px',
              '@text-color': '#475C6F',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};