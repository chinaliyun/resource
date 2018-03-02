var a = ['zhangsan', 'lisi', 'wangwu'];
var b = Object.entries(a);
console.log([...b])   // [[0, 'zhangsan'], [1, 'lisi'], [2, 'wangwu']]

var c = Object.keys(a);
console.log([...c])   // [0, 1, 2]

var d = Object.values(a);
console.log([...d])   // ['zhangsan', 'lisi', 'wangwu']
