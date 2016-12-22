// Provide custom regenerator runtime and core-js
require('babel-polyfill')

// Javascript require hook
require('babel-register')({
    presets: ['es2015', 'react', 'stage-0']
})

// Css require hook
require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename,
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]',
})

// Image require hook
require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 8000
})

const app = require('../server/app.js').default
const convert = require('koa-convert')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const devMiddleware = require('koa-webpack-dev-middleware')
const hotMiddleware = require('koa-webpack-hot-middleware')
const config = require('./webpack.dev.config')

const port = 3000
const compiler = webpack(config)

// Webpack hook event to write html file into /server/views due to server render
compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data

    Object.keys(assets).forEach(key => {
        if (key.match(/\.html$/)) {
            file = path.resolve(__dirname, key)
            data = assets[key].source()
            fs.writeFileSync(file, data)
        }
    })
    callback()
})
console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
app.use(convert(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
})))
app.use(convert(hotMiddleware(compiler)))
app.listen(port)
