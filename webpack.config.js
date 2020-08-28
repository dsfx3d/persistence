const join = require('path').join

const include = join(__dirname, 'dist')

module.exports = {
  mode: 'production',
  entry: './dist/index.js',
  output: {
    path: join(__dirname, 'bundle'),
    libraryTarget: 'commonjs',
    library: 'persistence'
  },
  devtool: 'source-map',
  module: {
    rules: [{ test: /\.js$/, loader: 'babel-loader', include }]
  }
}
