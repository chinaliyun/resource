var express = require('express');
var app = express();

app.get('', function(req,res){
	console.log(req.hostname);
	res.send('hello world')
})
var server = app.listen(8888, function(){
	// var host = server.address().address;
	// var port = server.address().port;
	// console.log('访问地址http://%s:%s',host,port)
	console.log(server.address())
	console.log('server has running')
})