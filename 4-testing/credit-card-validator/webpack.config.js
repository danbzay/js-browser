const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { LicenseFilePlugin } = require('generate-license-file-webpack-plugin');

module.exports = {
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9000,
  },
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',   
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),
    new LicenseFilePlugin({
      // Optional: specify the output path and filename for the licenses file
      output: path.resolve(__dirname, 'dist', 'licenses.txt'),
      // Optional: specify the root directory to search for licenses
      root: path.resolve(__dirname, './'),
      // Optional: include devDependencies licenses
      includeDevDependencies: false, // Default is false
    }),
  ],
  module: {
    rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: 'html-loader',
        }, 
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        }
      ],
  }
};
