var path = require('path');
var webpack = require('webpack');

module.exports = function(){
	return {
		context: path.join(__dirname, 'src/'),
		entry: {
			index: "./index.js",
			main: './main.js'
		},
		output: {
			path: path.join(__dirname, 'src/output/'),
			filename: './js/[name].[chunkhash].js',
		},
		plugins: [
		   new webpack.ProvidePlugin({
		     $: 'jquery',
		   })
		]
	}
}