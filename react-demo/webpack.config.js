var path = require('path');

module.exports = {
  devtool: "eval",
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, './wwwroot', 'build'),
    filename: 'app-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loaders: ['babel-loader']
      }
    ]
  }
};
