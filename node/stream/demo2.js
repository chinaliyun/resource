var fs = require('fs');
var data = 'lisi';

var writeStream = fs.createWriteStream('demo2.txt');

writeStream.write(data,'utf-8')
writeStream.end()
writeStream.on('finish', function(){
	console.log('write finish')
})
writeStream.on('error', function(){
	console.error('error')
})
console.log('msg')