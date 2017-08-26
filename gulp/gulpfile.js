var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

gulp.task('default', function(){
	console.log('msg')
	})
gulp.task('es', function(){
	gulp.src('src/**/*.es')
		.pipe(plumber())
		.pipe(babel({
			presets: ['latest','stage-0']
		}))
		.pipe(gulp.dest('dest/'))
})

gulp.task('watch', function(){
	gulp.watch('src/**/*.es', ['es'])
})