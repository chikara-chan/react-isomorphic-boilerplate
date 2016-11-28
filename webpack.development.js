process.env.NODE_ENV = 'development'

var webpack = require('webpack')
var path = require('path')
var rucksack = require('rucksack-css')
var autoprefixer = require('autoprefixer')
var includes = [
  path.resolve(__dirname, 'app'),
  path.resolve(__dirname, 'platforms')
]

module.exports = {
  name: 'backend dev hot middlware',
  entry: [
    // For old browsers
    'eventsource-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './platforms/browser/index.js'
  ],
  output: {
    path: path.join(__dirname, '/public/static'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '/node_modules')],
    extensions: ['', '.js', '.jsx']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules', path.join(__dirname, '/node_modules')]
  },

  module: {
    loaders: [
      {
        test: /\.jsx|.js$/,
        exclude: /node_modules/,
        include: includes,
        loader: 'babel-loader',
        query: {
          presets: ['react-hmre'],
          plugins: [
            ["inline-replace-variables", {
              "__SERVER__": false
            }]
          ]
        }
      }, {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }, {
        test: /\.less$/,
        include: includes,
        loader: 'style!css!less!postcss'
      },
      { test: /\.woff2?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url?limit=10000&minetype=application/octet-stream' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.svg$/, loader: 'url?limit=10000&minetype=image/svg+xml' },
      { test: /\.(png|jpg|jpeg|gif)$/i, loader: 'url?limit=10000&name=[name].[ext]' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html?$/, loader: 'file?name=[name].[ext]' }
    ]
  },

  postcss: [
    rucksack(),
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8']
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

