var getMessageList = require('../../data/getMessage.js');

exports.execute = function(req, res){
	getMessageList.getMessageList(function(data){
		res.send(data);
	})
}