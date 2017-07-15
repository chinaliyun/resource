/*var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('链接成功')
	eventEmitter.emit('data_recevied');
};
eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_recevied', function(){
	console.log('接受陈宫')
})

eventEmitter.emit('connection')
console.log('执行完毕')*/
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
	setTimeout(function(){
		console.log('timer')
	},2000)
	console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
	event.emit('some_event'); 
}, 1000); 