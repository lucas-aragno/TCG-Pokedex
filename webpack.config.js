const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src', 'app.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    },
    {
      loaders: ['style', 'raw'],
      include: __dirname,
      test: /\.css$/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BROWSER: JSON.stringify(true)
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
}
