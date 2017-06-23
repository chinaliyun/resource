var gulp = require('gulp');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var gulpWenpack = require('gulp-webpack');
var path = require('path');

gulp.task('default', function(){
	gulp.src('./src/index.js')
		// .pipe(gulpWenpack(require('./base.config.js')) )
		// 这里因为不想更改dev.config.js内容  因此不做测试， 需要注意的是gulpWebpack后面一定要数个对象参数，而dev.config.js返回的是一个方法，不是一个对象
		.pipe(gulp.dest('dist'))
})