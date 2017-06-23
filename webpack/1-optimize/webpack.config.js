var webpack = require('webpack');
var path = require('path');

var buildConfig = function(env){
	return require('./'+env.production+'.config.js')();
}

module.exports = buildConfig;