var babel = require('babel-core');
babel.transformFile('./demo1.js',{
	"presets":['es2015','stage-3']
}, function(err,result){
	console.log(result.code)
})
var code = babel.transformFileSync('./demo1.js',{
	"presets":['es2015','stage-3']
}).code;
console.log(code)