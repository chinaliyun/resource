var express = require('express');
var util = require('util');
var bodyParser = require('body-parser');
var multer  = require('multer');


var app = express();
var upload = multer({dest: __dirname+ '/upload_tmp'});


app.get('/', function(req, res){
	res.sendFile(__dirname+'/multer_single.html');
})
app.get('/multer_array.html', function(req, res){
	res.sendFile(__dirname+'/multer_array.html');
})

app.post('/multer_single', upload.single('file_upload'),  function(req, res){
	res.send(util.inspect(req))
})
app.post('/multer_array', upload.array('file_upload1', 10),  function(req, res){
	res.send(util.inspect(req))
})
var server  = app.listen(8888, function(){
	console.log('serve has running at %s', server.address().port)
})