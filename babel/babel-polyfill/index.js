var babel = require('babel-core');
var fs = require('fs');
require('babel-polyfill');

var code = fs.readFileSync(__dirname+'/demo1.js').toString();

var result = babel.transform(code, {
	presets: ['latest'],
	sourceMaps: true
});

fs.writeFileSync(__dirname+'/bundle.js', result.code);
fs.writeFileSync(__dirname+'/bundle.map.js', JSON.stringify(result.map));