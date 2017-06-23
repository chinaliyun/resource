var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('default', function(){
	gulp.src('./src/**/*.html')
		.pipe(rename({
			dirname: '',
			extname: '.html'
		}))
		.pipe(gulp.dest('./dist/views'))
})