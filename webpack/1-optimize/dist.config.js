var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var htmlWebpack = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var baseConf = require('./base.config.js');
var ExtractCSS = new ExtractTextPlugin("../style.css");


// console.log(path.resolve(__dirname, 'src'))

module.exports = function(env){
	return webpackMerge(baseConf(), {
		module: {
			rules: [
				{
					test: /\.css/,
					use: ExtractCSS.extract("css-loader")
				}
			]
		},
		plugins: [
			ExtractCSS,
			new webpack.optimize.CommonsChunkPlugin({
				names: ['manifest'],
				filename: './js/[name].common.js'
			}),
			new htmlWebpack({
				title: "webpack测试自动生成html插件",
				filename: "index.html"
			}),
			new webpack.optimize.UglifyJsPlugin({
			    beautify: false,// 最紧凑的输出
			    comments: false,// 删除所有的注释
			    compress: {
			      warnings: false,// 在UglifyJs删除没有用到的代码时不输出警告
			      drop_console: true,// 删除所有的 `console` 语句 // 还可以兼容ie浏览器
			      collapse_vars: true,// 内嵌定义了但是只用到一次的变量
			      reduce_vars: true,// 提取出现多次但是没有定义成变量去引用的静态值
			    }
			})
		]
	})
}

