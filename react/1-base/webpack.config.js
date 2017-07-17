var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/src',
	entry: './js/index',
	module: {
		loaders: [{
			test: /\.js/,
			loader: "babel-loader",
			query: {
				"presets": ['react', 'es2015']
			}
		}]
	},
	output: {
		path: __dirname+'/src',
		filename: 'bundle.js'
	}
}
