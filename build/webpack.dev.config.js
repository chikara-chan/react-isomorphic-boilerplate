var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        'order-monitor/index': ['./client/order-monitor/index.js', 'webpack-hot-middleware/client']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: "url?limit=10000"
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
      }]
    },
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
        new webpack.HotModuleReplacementPlugin(),
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
