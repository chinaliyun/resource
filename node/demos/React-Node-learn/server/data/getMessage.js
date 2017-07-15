var MessageList = [
	{'message':'hello react'},
	{'message':'hello webpack'},
	{'message':'hello nodejs'},
	{'message':'hello express'}
];
exports.getMessageList = function(callback){
	callback(MessageList);
}