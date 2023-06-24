// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
// const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    'np-patil-ram': path.join(__dirname, "src", "CustomButton.js")
  },
  output: {
    path: path.join(__dirname, "dist", "umd"),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'CustomButton'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },
//   plugins: [
//     new ExtractTextPlugin('../styles.css', {
//       allChunks: false,
//       beautify: true,
//       mangle: false
//     })
//   ],
  module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                ]
            }
            // {
            //     test: /\.(s(a|c)ss)$/,
            //     use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            // }
  ]}
}
