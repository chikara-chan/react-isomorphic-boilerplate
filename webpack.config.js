var path = require('path');

//webpack自带的api
var webpack = require('webpack');

//整合webpack-html的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

//文件内容提取插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//清除文件插件
var CleanWebpackPlugin = require('clean-webpack-plugin');

var firstPlugin=require("./firstPlugin");

//引入node环境
var env=require("./webpack.prod").env;

//定义公共路径
//Note:
//  1.if you want to resolve assets file on the local(this way is by the File Protocol),for example:
//  define absolute path
//  var publicPath=`${__dirname}/dist/static/`;
//  2.if you want to resolve asset file on the server(this way is by the HTTP Protocol),for example:
//  //define relative path
//  var publicPath=`/dist/static/`;

var publicPath = `/dist/static/`;

module.exports = {
    //webpack入口文件配置
    entry: {
        index: './src/index.tsx',
        //配置common模块,优化页面加载,字段名可任意命名,可以使用resolve字段配置的模块别名,若resolve字段中没有配置相应的别名,
        //则会去搜索node_modules中的配置,如果两者都不存在指定的模块,则会提示找不到指定模块的错误
        vendor: ["angular","react","react-dom","redux","react-redux","react-router","immutable"]
    },

    //webpack输出文件配置
    output: {
        //指定输出路径
        path: path.resolve(__dirname, './dist/static/'),
        //公共模块输出路径
        publicPath: publicPath,
        //输入文件名称
        filename: '[name].[chunkhash].js'
    },

    //webpack模块引入规则
    module: {
        loaders: [
            {
                //test字段根据require到的文件扩展名做匹配
                test: /\.css$/,
                //loader字段是指定具体的模块加载器去编译匹配到的文本流内容
                //ExtractTextPlugin是一个文件内容提取插件,以下使用该插件提取相应的
                //module loader信息,然后赋值给loader字段.
                // loader: ExtractTextPlugin.extract('style', ['css']),
                loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })
            },
            {
                test: /\.scss$/,
                // loader: ExtractTextPlugin.extract('style', ['css', 'sass']),
                loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','sass-loader'] })
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.html$/,
                loader: ExtractTextPlugin.extract('html')
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.jpe?g$|.gif$|.png$/,
                //使用file-loader模块整合图片资源模块.
                //问号后面代表在file-loader处理匹配资源文件时,对该资源文件的一些装饰.
                //[name]表示指定文件打包后的名称
                //[ext]表示指定文件打包后的扩展名
                //还有其他属性,如果需要了解自行到file-load官网去查看详细文档

                //若没有显式规定文件的path,file-loader默认使用公共路径
                //若没有在output字段中声明公共路径则会导致在代码中require('x/xxx/xx.png')
                //返回的结果是一个绝对路径,导致你的内心boom.
                loader: `file-loader?name=[name]-[hash].[ext]`
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "babel-preset-es2015",
                    ],
                    cacheDirectory: true,
                    plugins: ["transform-async-to-generator"]
                }
            }

        ]
    },
    plugins: [
        //清空所有的dist文件夹下的文件夹以及文件
        new CleanWebpackPlugin(['dist/static/'], {

        }),
        //使用公共模块插件将公共代码以及第三方代码和内部模块分割
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',//该值对应entry对象字面量中对应的key值
            filename: 'common.js',//指定公共模块输出文件名称,若不配置该字段将以output字面量定义的规则为准
            Infinity: false,
            children: false //是否给所有的模块添加公共代码模块,若children=true,则会在每一个chunk文件中添加公共代码块,默认为false
        }),

        //webpack-html解决方案
        new HtmlWebpackPlugin({
            //引入index chunk
            chunks: ['index', "vendor"],
            //指定引入chunk文件的html文件
            filename: '../index.html',
            //html文件的模板格式文件
            template: './src/tpl/index',
            inject: true
        }),

        //给css文件添加hash值,避免缓存
        new ExtractTextPlugin('[name].[chunkhash].css'),

        new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        //压缩webpack生成的文件,减少http流量压力
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new firstPlugin({open:false})
    ],

    //该字段主要用于配置引用路径
    resolve: {
        //设置引用别名
        alias: {
            jquery: path.join(__dirname, "./node_modules/jquery/dist/jquery.js"),
            //key:别名, value:引用路径
            //设置别名后可直接在js文件中使用require('angular'),将会引用./src/vendor目录下的angular.js文件
            //若没有配置别名,require()方法则会去搜索node_modules中的模块,如果两者都不存在指定的模块,则会提示找不到指定模块的错误.
            angular: path.join(__dirname, "./src/vendor/angular")
        },

        extensions: ['.scss', '.ts', '.tsx', '.json', ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    devtool: "source-map",

    //若使用一下的配置,则需要在html中使用script标签引入externals配置中设置的资源,否则webpack打包以后会提示相关的依赖对象不存在
    externals: {
        // require("react") 是引用自外部模块的(引入的外部模块需要是webpack打包后的资源文件,否则webpack无法使用require做加载)
        // key对应require(key),value对应全局变量名称
        // 对应全局变量 React
        "react": "React",
        "react-dom": "ReactDOM",
        "redux":'Redux',
        "react-redux":"ReactRedux",
        "react-router":"ReactRouter",
        "immutable":"Immutable",
    },
};