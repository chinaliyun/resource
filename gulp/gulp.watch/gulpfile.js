var gulp = require('gulp');



gulp.task('default', function(){
	var path = 'src/**/*.less';
	console.log(path)
	gulp.watch(path, function(e){
		console.log(e.type, e.path)
	})
})