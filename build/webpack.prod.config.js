var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'order-monitor/index': './client/order-monitor/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel']
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: "url?limit=10000"
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      }]
    },
    postcss: [autoprefixer({browsers: ['last 2 versions']})],
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'redux': 'window.Redux',
        'react-redux': 'window.ReactRedux',
        'react-bootstrap': 'window.ReactBootstrap',
        'react-bootstrap-datetimepicker': 'window.ReactBootstrapDatetimePicker',
        'superagent': 'window.superagent',
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css', '.scss', '.html']
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
        new webpack.optimize.CommonsChunkPlugin({
          name: 'common/index',
          filename: '[name].js'
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
};
