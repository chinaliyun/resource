var  http = require('http');
var  url =  require('url');
var root = require('./root.js');

http.createServer(function(req, res){
	res.write('hello')
	res.end();
}).listen(8888)