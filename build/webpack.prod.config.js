const path = require('path'),
    fs = require('fs'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')
let clientConfig, serverConfig

function getExternals() {
    return fs.readdirSync(path.resolve(__dirname, '../node_modules'))
        .filter(filename => !filename.includes('.bin'))
        .reduce((externals, filename) => {
            externals[filename] = `commonjs ${filename}`

            return externals
        }, {})
}

clientConfig = {
    context: path.resolve(__dirname, '..'),
    entry: {
        bundle: './client/index.tsx',
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'superagent'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: 'chunk.[name].[chunkhash:8].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0'],
                plugins: ['transform-runtime', 'add-module-exports'],
                cacheDirectory: true
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }
         ,
        {
            test: /\.tsx?$/,
            loader: 'ts-loader'
        },
        {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        } ]
    },
    postcss: [autoprefixer({browsers: ['> 5%']})],
    resolve: {extensions: ['', '.js', '.json', '.scss', '.tsx', '.ts']},
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            filename: '[name].[chunkhash:8].js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            comments: false
        }),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
        new HtmlWebpackPlugin({
            filename: '../../views/prod/index.html',
            template: './views/tpl/index.tpl.html',
            chunksSortMode: 'none'
        }),
        new ExtractTextPlugin('[name].[contenthash:8].css', {allChunks: true})
    ]
}

serverConfig = {
    context: path.resolve(__dirname, '..'),
    entry: {server: './server/server.prod.ts'},
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: '[name].js',
        chunkFilename: 'chunk.[name].js'
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
                presets: ['es2015', 'react', 'stage-0'],
                plugins: ['add-module-exports'],
                cacheDirectory: true
            }
        }, {
            test: /\.scss$/,
            loaders: [
                'css',
                'sass'
            ]
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.json$/,
            loader: 'json'
        }
            ,
        {
            test: /\.tsx?$/,
            loader: 'ts-loader'
        },
        {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        } ]
    },
    externals: getExternals(),
    resolve: {extensions: ['', '.js', '.json', '.scss', '.tsx', '.ts']},
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),

        // New webpack.optimize.UglifyJsPlugin({
        //     Compress: { warnings: false },
        //     Comments: false
        // }),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)})
    ]
}

module.exports = [
    clientConfig,
    serverConfig]
