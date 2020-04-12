const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// load dotenv
require('dotenv').config();

// const devMode = process.env.PRODUCTION !== 'True';


module.exports = {
  configureWebpack: {
    plugins: [
      // tracks stats about webpack bundling
      new BundleTracker({
        filename: 'webpack-stats.json',
      }),
      // bundles CSS included in JS files
      new MiniCssExtractPlugin({ filename: '[name].css' }),
      // linter plugin for validating CSS styles
      new StylelintPlugin({
        configFile: 'stylelint.config.js',
        context: 'src',
        files: '**/*.css',
        failOnError: false,
        quiet: false,
      }),
      // removes all old files from folder on each successful rebuild
      new CleanWebpackPlugin(),

    ]
  }
}
