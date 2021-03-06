var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/src',
	entry: './js/index',
	module: {
		loaders: [{
			test: /\.js/,
			loader: "babel-loader",
			exclude: /node_modules/,
			query: {
				"presets": ['react', 'es2015'],
				// "plugins": [
				// 	"react-html-attrs"
				// ]
			}
		},{
			test: /\.css$/,
			loader: ['style-loader','css-loader?modules']
		}]
	},
	output: {
		path: __dirname+'/src',
		filename: 'bundle.js'
	},
	devServer:{
		hot: true,
		contentBase: __dirname+'/src',
		inline: true
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	]
}
