var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,res){
	var body='';
	req.on('data', function(chunk){
		body+=chunk;
	})
	req.on('end', function(){
		console.log(querystring.parse(body))
		res.setHeader("Access-Control-Allow-Origin","*");
		res.write(body.toString())
		res.end('dsfd')
	})
}).listen(8888,'dev.com');
console.log('server has running ad 8888')