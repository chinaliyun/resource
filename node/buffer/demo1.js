var buf = new Buffer(5);
var len = buf.write('www.runoob.com');
console.log(len)
console.log(String.fromCharCode(119))

var buf2 = new Buffer([119]);

console.log(buf2.toJSON())