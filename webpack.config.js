const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    compress: true,
    port: 9017
  },
    entry: [
        path.resolve(__dirname, 'index.tsx')
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false
                    }
                }
            },
        ]
    },
    plugins:[new HtmlWebpackPlugin()]
};
