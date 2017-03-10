const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, './client/index.jsx'),
  output: {
    path: path.join(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/
      }
    ]
  }
}
