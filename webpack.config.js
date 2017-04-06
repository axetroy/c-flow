const webpack = require('webpack');
const path = require('path');

// webpack.config.js
module.exports = {
  entry: {
    flow: path.join(__dirname, 'index.js'),
    'flow.min': path.join(__dirname, 'index.js')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    library: 'Flow',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.coffee']
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      test: /\.min\.js$/
    })
  ]
};
