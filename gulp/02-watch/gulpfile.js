var gulp = require('gulp');
var less = require('gulp-less');
var changed = require('gulp-changed');

gulp.task('less', function(){

})
gulp.task('default', function(){
	gulp.watch('./src/**/*.less', function(event){
		console.log(event)
		gulp.src(event.path)
			.pipe(less())
			.pipe(gulp.dest('./dist'))
	})
})