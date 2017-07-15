var http = require('http');
var url = require('url');

function start(route){
    function onRequest(request,response){
    	var pathname = url.parse(request.url).pathname;
        // console.log('url: '+ request.url);
    	// route(pathname);
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.write(request.url)
    	response.write('hh')
    	response.end()
    }
    http.createServer(onRequest).listen(8888)
    console.log('server has running')
}
exports.start = start;

