var express = require('express');
var app = express();
var fs = require('fs');
app.get('/listUser', function(req,res){
	fs.readFile('./user.json','utf-8', function(err,data){
		if(err){
			console.log(err);
		}else{
			res.send(data)
		}
	})
})
app.get('/addUser', function(req,res){
	fs.readFile('./user.json','utf-8', function(err,data){
		if(err){
			console.log(err);
		}else{
			fs.write
		}
	})
})
var server = app.listen(8888, function(){
	console.log('server has running at 8888')
})