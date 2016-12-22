const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function getExternals() {
    return fs.readdirSync(path.resolve(__dirname, '../node_modules'))
        .filter(filename => !filename.includes('.bin'))
        .reduce((externals, filename) => {
            externals[filename] = `commonjs ${filename}`
            return externals
        }, {})
}

const clientConfig = {
    context: path.resolve(__dirname, '..'),
    entry: {
        'bundle': './client',
        'vendor': [
            'react',
            'react-dom',
            'redux' ,
            'react-redux',
            'superagent'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
        publicPath: './'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                'presets': ['es2015', 'react', 'stage-0'],
                'plugins': ['transform-runtime']
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&camelCase&localIdentName=[hash:base64:8]!postcss!sass')
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }]
    },
    postcss: [autoprefixer({
        browsers: ['> 5%']
    })],
    resolve: {
        extensions: ['', '.js', '.json', '.scss']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            filename: '[name].[chunkhash:8].js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            filename: '../server/views/index.html',
            template: './server/views/tpl/index.tpl.html',
            chunksSortMode: 'none'
        }),
        new ExtractTextPlugin('[name].[contenthash:8].css')
    ],
}

const serverConfig = {
    context: path.resolve(__dirname, '..'),
    entry: {
        'server': './server/index'
    },
    output: {
        path: path.resolve(__dirname, '..'),
        filename: '[name].js'
    },
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                'presets': ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.scss$/,
            loaders: [
                'css/locals?modules&camelCase&localIdentName=[hash:base64:8]',
                'sass'
            ]
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    externals: getExternals(),
    resolve: {
        extensions: ['', '.js', '.json', '.scss']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
}

module.exports = [clientConfig, serverConfig]
