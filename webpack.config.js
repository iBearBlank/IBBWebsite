const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractSTYL = new ExtractTextPlugin('stylesheets/[name].styl');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'client'),
  build: path.join(__dirname, 'build'),
};

const parts = require('./lib/parts');

const common = {
  // Entry accepts a path or an object of entries
  // The build chapther contains an example of the latter
  entry: {
    app: PATHS.app,
  },
  // Add resolve.extensions.
  // '' is needed to allow imports without an extension.
  // Note the .'s before extension as it will fail to match without!!
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      // Set up jsx. This accepts js too thanks to RegExp
      {
        test: /\.jsx?$/,
        // enable caching for improved performance during development
        // It uses default OS directory by default. If you need somehting
        // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app,
      },
       //loader: ExtractTextPlugin.extract('css-loader', 'stylus-loader'),
       //loader: ExtractTextPlugin.extract('css-loader!stylus-loader'),
       //loader: 'style-loader!css-loader!stylus-loader',
       //loaders: ['style', 'css', 'stylus'],

       //loader: extractSTYL.extract['css','sass'],
       //loader: ExtractTextPlugin.extract('css-loader', 'stylus-loader'),
       //loaders: ['style-loader', 'css-loader', 'stylus-relative-loader'],
       //loader: ExtractTextPlugin.extract('style-loader','stylus-relative-loader'),
      //{test: /\.styl$/i, loader: extractSTYL.extract(['css-loader', 'stylus-loader'])},
      //{ 
      //  test: /\.styl$/,
      //  loader: extractSTYL.extract[("css", "stylus")]
     // },
    ],
  },
};

let config;

switch(TARGET) {
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.setupCSS(PATHS.app),
      parts.minify()
      
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setupCSS(PATHS.app),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT,
      })
    );
}

module.exports = validate(config);
