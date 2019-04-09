const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const TerserJSPlugin = require("terser-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: devMode ? 'cheap-eval-source-map' : 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' }
          },
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {loader: "html-loader", options: { minimize: true }}
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.ejs",
      filename: "./index.html",
      favicon: "./src/favicon.ico",
      title: devMode ? 'Dev' : 'Prod'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFIlename: devMode ? "[id].css" : "[id].[hash].css"
    }) /* ,
    new CopyPlugin([
      { from: './src/favicon.ico', to: './favicon.ico' }
    ]), */
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
