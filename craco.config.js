const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#f6c90e',
              '@layout-header-background': '#303841',
              '@layout-header-height': '80px',
              '@layout-body-background': '#303841',
              '@menu-item-color': '#303841',
              '@menu-item-group-title-color': '#303841',
              '@menu-item-font-size': '18px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
