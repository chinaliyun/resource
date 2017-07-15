var webpack = require('webpack');
module.exports = {
	entry: {
		'view/main/index': './js/view/mian/index.js'
	},
	output: {
		path: __dirname + '/output/js/',
		filename: '[name].bundle.js'
	}
}