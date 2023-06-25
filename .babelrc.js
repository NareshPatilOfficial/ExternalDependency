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
  presets: ["@babel/env", "@babel/preset-react"],
  plugins: [...commonPlugins]
}