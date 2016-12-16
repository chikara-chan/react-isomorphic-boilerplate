require('babel-polyfill')
const Koa = require('koa')
const convert = require('koa-convert')
const webpack = require('webpack')
const path = require('path')
const devMiddleware = require('koa-webpack-dev-middleware')
const hotMiddleware = require('koa-webpack-hot-middleware')
const serve = require('koa-static')
const config = require('./webpack.dev.config')

const app = new Koa()
const port = 3001
const compile = webpack(config)

app.use(serve(path.resolve(__dirname, '../server/views')))
app.use(convert(devMiddleware(compile, {
    noInfo: true,
    publicPath: config.output.publicPath,
})))
app.use(convert(hotMiddleware(compile)))

app.listen(port)
