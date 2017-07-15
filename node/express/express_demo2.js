var express = require('express');
var app  = express();

app.get('/', function(req,res){
	res.send('首页')
})
app.get('/add_user', function(req,res){
	res.send('新增用户')
})
app.get('/mod_user', function(req,res){
	res.send('修改用户')
})
app.get('/del_user', function(req,res){
	res.send('删除用户')
})
app.listen(8888, function(){
	console.log('server has running')
})