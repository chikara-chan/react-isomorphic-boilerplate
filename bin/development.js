#!/usr/bin/env node
process.env.NODE_ENV = 'development'
console.log('Waiting for webpacking ...')
require('babel-polyfill')
require('babel-core/register')({
  plugins: [
    ['babel-plugin-transform-require-ignore', {
      extensions: ['.less', '.css']
    }],
    ['inline-replace-variables', {
      __SERVER__: true
    }]
  ]
})
require('asset-require-hook')({
  extensions: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'tif', 'tiff', 'webp'],
  name: '/build/[name].[ext]',
  limit: 10000
})

var Koa = require('koa')
var app = new Koa()
var path = require('path')
var middlewareRegister = require('../platforms/server/middlewareRegister')
var webpack = require('webpack')
var KWM = require('koa-webpack-middleware')
var devMiddleware = KWM.devMiddleware
var hotMiddleware = KWM.hotMiddleware
var chokidar = require('chokidar')
var webpackConfig = require('../webpack.development')
var compiler = webpack(webpackConfig)
var config = require('../platforms/common/config')
var devMiddlewareInstance = devMiddleware(compiler, {
  noInfo: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: '/build/',
  stats: {
    colors: true
  }
})
var hotMiddlewareInstance = hotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
})

app.env = 'development'
app.use(devMiddlewareInstance)
app.use(hotMiddlewareInstance)
middlewareRegister(app) // reg middleware
// error logger
app.on('error', function (err, ctx) {
  console.log('error occured:', err.stack)
})

// listen
var server = require('http').createServer(app.callback())
var watcher = chokidar.watch([
  path.join(__dirname, '../app'),
  path.join(__dirname, '../platforms')
])
watcher.on('ready', function () {
  watcher.on('all', function (e, p) {
    console.log("Clearing module cache");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\](app|platforms)[\/\\]/.test(id)) delete require.cache[id];
    });
  })
})
var isListened = false
compiler._plugins['after-compile'].push(function (compilation, callback) {
  callback()
  !isListened && server.listen(config.port, function () {
    console.log('App started, at port %d, CTRL + C to terminate', config.port)
    isListened = true
  })
})
