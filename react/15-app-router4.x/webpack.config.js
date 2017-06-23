var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // devtool: "source-map",
    context: __dirname + '/src',
    resolve: {
        modules: [path.join(__dirname, 'node_modules')],
        alias: {
            'react': 'react/dist/react.js',
            'react-dom': 'react-dom/dist/react-dom.js'
        }
    },
    entry: {
        index: './js/root.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, './src/output'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/src',
        port: 8080
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader?cacheDirectory",
                options: {
                    "presets": ['react', 'es2015'],
                    "plugins": [
                        [
                            "import", {
                                "libraryName": "antd"
                            }
                        ]
                    ]
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader?minimize",
                },{
                    loader: "less-loader"
                }]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/style.css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
              names: ['vendor','manifest']
            }),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告  
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        })
    ]
}
