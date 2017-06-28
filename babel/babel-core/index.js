// babel-core提供babel的一些API， 使babel可以运行在JS代码中
// 使用babel转码的时候，不要忘记配置后面的options，项目根目录中的.babelrc文件对这里是没有作用的

var babel = require('babel-core');
var fs = require('fs');

var code = fs.readFileSync(__dirname+'/demo2.js').toString();

var result = babel.transform(code, {
	presets: ['latest'],
	sourceMaps: true
});

fs.writeFileSync(__dirname+'/bundle.js', result.code);
fs.writeFileSync(__dirname+'/bundle.map.js', JSON.stringify(result.map));