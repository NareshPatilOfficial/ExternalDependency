const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    return merge(
        {
            entry: [
                path.join(__dirname, "src", "entry.js")
            ],
            output: {
                path:path.resolve(__dirname, "dist"),
                filename: '[name].bundle.js'
            }
        },
        {
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
                    },
                    {
                        test: /\.(s(a|c)ss)$/,
                        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
                    },
                    {
                        test: /\.(jpg|png)$/,
                        use: {
                            loader: 'url-loader',
                        },
                    },
                ]
            },
            mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
            // In source tab (inspect element) clean file content
            devtool : process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'hidden-source-map',
            plugins: [
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, "src", "index.html"),
                }),
                new MiniCssExtractPlugin({
                    filename: "[name].css",
                    chunkFilename: "[id].css"
                })
            ]
        }
    );
}