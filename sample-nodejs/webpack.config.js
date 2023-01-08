var path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js', './node_modules/pepjs/dist/pep.js'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
};