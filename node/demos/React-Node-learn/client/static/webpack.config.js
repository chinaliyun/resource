var webpack = require('webpack');
module.exports = {
	entry: {
		'view/main/index': './js/view/mian/index'
	},
	output: {
		path: __dirname + '/output/js/',
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				loader: 'babel-loader!jsx-loader?harmony'
			},
			{
				test: /\.css/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [
		/*new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		})*/
	]
}