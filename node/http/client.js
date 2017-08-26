var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	fs.readFile('./index.html', function(err,data){
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
		res.write(data.toString());
		res.end();
	})
	
}).listen(7890,'cao.com')