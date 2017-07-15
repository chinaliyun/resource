var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public/'));
// 解析json
app.use(bodyParser.json())
// 解析form提交过来的表单application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req,res){
	res.sendFile(__dirname+'/index.html');
})
app.get('/process_post', function(req,res){
	res.send(req.query)
})
app.post('/process_post', function(req,res){
	response = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};
	res.send(req.body)
})
var server = app.listen(8888, function(){
	console.log('server has running at 8888')
})