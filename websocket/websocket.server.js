const http = require('http');
const WebSocket = require('ws');

const server = http.createServer(function(req,res){
	res.end('heello');
})
server.listen(8080, function(){
	console.log('server listened 8080 started')
})
const wss = new WebSocket.Server({server});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});