var express = require('express');
var webpack = require('webpack');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.dev.config');

var app = new express();
var port = 3000;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use('/', express.static(path.resolve(__dirname, '../server/views')));

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
})
