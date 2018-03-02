var babel = require('babel-core');
var polyfill = require('babel-polyfill');
console.log(polyfill)
return false;
var es6code = "";
// var es5code = babel.transform(es6code,{
// 	"presets":["env"]
// }).code;
var es5code = babel.transformFileSync("./input.js", {
	"presets":["env"]
})
console.log(es5code.code)

var set = new Set();
set.add(1);

console.log(set);