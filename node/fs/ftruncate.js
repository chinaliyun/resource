var fs = require('fs');
var  buffer = new Buffer(1024);
fs.open('./output.txt', 'r+', function(err,fd){
	if(err)return console.error(err);
	console.log('file has opened')
	/*fs.read(fd,buffer,0,buffer.length,0,function(err,type){
		console.log('总字节数: '+type)
		console.log('全部的内容 '+buffer.slice(0,type).toString())
	})*/
	fs.ftruncate(fd, 3, function(err){
		if(err)return console.error(err);
		console.log('file has trancated')
		fs.read(fd,buffer,0 ,buffer.length,0,function(err,byte){
			console.log('读取出来的字节数: '+ byte)
			if(err)return console.error(err);
			console.log('读取出来的内容: '+buffer.slice(0,byte).toString())
			fs.close(fd,function(){
				console.log('file has closed')
			})
		})
	})
})
