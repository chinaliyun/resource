var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var path  = require('path');
module.exports  = {
	entry: './app.js',
	output: {
		path: path.join(__dirname, '/'),
		filename: 'app.bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname,'/'),
	}
}