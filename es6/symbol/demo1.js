// var p1 = require('./demo2.js');
// var p2 = require('./demo2.js');
// console.log(global[Symbol('foo')])
// global[Symbol.for('foo')] = 2;
// console.log(global[Symbol.for('foo')])
// // console.log(p1)

// var obj = {
// 	a: 1,
// 	b: 2
// };
// for(key in obj){
// 	console.log(key)
// }
let a = Symbol.for('a');
let b = Symbol.for('b');

const obj = {
	[a]: 1,
	[b]: 2
}
console.log(Object.getOwnPropertySymbols(obj))