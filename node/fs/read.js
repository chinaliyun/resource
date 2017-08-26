var fs = require('fs');
var buffer = new Buffer(10);
fs.open('./output.txt','r+',function(err,fd){
	if(err){
		console.error(err)
		return;
	}
	fs.read(fd,buffer,0,buffer.length,0,function(err,byteRead,buf){
		if(err){
			console.error(err)
			return;
		}
		console.log(byteRead+'个字节被读取出来')
		console.log(buffer.length)
		console.log(buf.slice(0,byteRead).toString())
	})
})