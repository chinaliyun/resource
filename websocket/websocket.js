const Websocket = require('ws')
const ws = new Websocket('192.168.0.113:8080');

ws.on('open', function(e){
	ws.send('somegthing')
})
ws.on('message', function(message) {
    console.log(message)
})
ws.on('error', function(err){
	console.log(err)
})
