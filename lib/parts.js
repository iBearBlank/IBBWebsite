const webpack = require('webpack');

exports.devServer = function(options) {
  return {
    devServer: {
      // Enable history API fallback so HTMl5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      // If you use Bagrant or Cloud9 , set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all networks devices
      // unlike default `localhost`.
      host: options.host, // defaults to `localhost`
      port: options.port, // defaults to 8080
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),

      new webpack.DefinePlugin({
        "process.env": {
          BROWSER: JSON.stringify(true),
        }
      }),
    ],
  };
}

exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: paths,
        },
        { 
          test: /\.styl$/,
           //loader: ExtractTextPlugin.extract('css-loader', 'stylus-loader'),
           //loader: ExtractTextPlugin.extract('css-loader!stylus-loader'),
           loader: 'style-loader!css-loader!stylus-loader',
           //loaders: ['style', 'css', 'stylus'],

           //loader: extractSTYL.extract['css','sass'],
           //loader: ExtractTextPlugin.extract('css-loader', 'stylus-loader'),
           //loaders: ['style-loader', 'css-loader', 'stylus-relative-loader'],
           //loader: ExtractTextPlugin.extract('style-loader','stylus-relative-loader'),
           include: paths,
        },
      ]
    }
  };
}

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
      })
    ],
  };
}
