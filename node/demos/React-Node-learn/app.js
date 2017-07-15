var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.set('views', './client/view/');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/client/static', express.static(path.join(__dirname, 'client/static/')));

app.get('/', function(req, res){
	res.render('index')
})
app.get('/data/:module', function(req, res){
	var c_path = req.params.module;
	var Action = require('./server/action/data/'+ c_path);
	Action.execute(req,res);	
})
var server = app.listen(8888, function(){
	var port = server.address().port;
	console.log('Listening at http://localhost:%s',  port);
})

