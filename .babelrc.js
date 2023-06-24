const path = require('path');

const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('./')],
      alias: {
      },
    },
  ],
];

module.exports = {
  "env": {
    "es": {
      "plugins": ["@babel/plugin-transform-runtime"],
      "presets": ["@babel/preset-react"]
    }
  },
  plugins: [...commonPlugins]
}