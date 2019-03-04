var path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index.ts','./node_modules/pepjs/dist/pep.min.js' ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader', options: { configFile: 'tsconfig.json' } }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {extensions: [ '.tsx', '.ts', '.js' ]},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
};