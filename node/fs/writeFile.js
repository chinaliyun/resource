var fs = require('fs');
fs.writeFile('./output.txt','zhangsan',function(err){
	if(err){
		console.error(err)
	}
	console.log("写入成功")
	fs.readFile('./output.txt', function(err,data){
		if(err)console.error(err)
		console.log(data)
	})
})