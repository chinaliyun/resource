var http = require('http');
var querystring = require('querystring');
var util = require('util');
var url = require('url');

var html =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="age"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        var body = '';
        req.on('data', function(chunk) {
                console.log('chunk:');
                console.log(chunk);
                body += chunk;
                console.log('body:')
                console.log(body);
            })
        req.on('end', function() {
            console.log('end:');
            console.log(body);
            var body = querystring.parse(body);
            res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
            res.write(body)
            res.end()
            // res.end();
        })
    
}).listen(8888);
console.log('server has running')
