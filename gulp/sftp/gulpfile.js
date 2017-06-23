var gulp = require('gulp');
var sftp = require('gulp-sftp');
gulp.task('test', function(){
	gulp.src('html/*')
	.pipe(sftp({
		host: '106.14.38.6',
		user: 'Administrator',
		pass: 'Claude929609',
		remotePath: '/sftp/'
		}))
	})