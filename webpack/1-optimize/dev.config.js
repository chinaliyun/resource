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
		devtool: "cheap-eval-source-map",
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
				filename: "index.html",
				inject: 'body',
				hash: true
			}),
		]
	})
}