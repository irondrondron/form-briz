const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.[contenthash].js",
    // publicPath: "/",
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.((c|sa|sc)ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new HotModuleReplacementPlugin(), new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin],
}