var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.get('/', function(req,res){
	res.cookie('name','zhangsan');
	res.cookie('age','14');
	res.sendFile(__dirname + '/index.html');
})
app.get('/get_cookie', function(req,res){
	res.send(req.cookies)
})
app.listen(8888, function(){
	console.log('server has running at 8888')
})
