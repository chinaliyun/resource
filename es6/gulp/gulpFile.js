var gulp = require('gulp');
var babel = require('gulp-babel');

var plumber = require('gulp-plumber');

require('babel-core');

var src = 'src/';
var opt = 'output/';

function time(){
	var date = new Date();
	return date.getTime();
}
function es(event){
	var path = event ? event.path : src+'*.es';
	if(event){
		console.log(time(), event.type, event.path)
	}
	gulp.src(path)
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest(opt))
}

function json(event){
	var path = event ? event.path : src+'*.json';
	if(event){
		console.log(time(), event.type, event.path)
	}
	gulp.src(path)
		.pipe(plumber())
		.pipe(gulp.dest(opt))
}
gulp.task('build', function(){
	es();json();
})
gulp.task('default', ['build'], function(){
	gulp.watch(src + '/**/*.es', function(event){es(event)})
	gulp.watch(src + '/**/*.json', function(event){json(event)})
})