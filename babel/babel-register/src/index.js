// 所有使用了register插件的文件中，碰到后缀是.es, .es6, .js, .jsx的文件都会自动使用babel转义后再执行

require("babel-core/register");



/*let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike);
console.log(arr2)*/


/*import {add} from './demo1.js';
add();*/
var add = require('./demo1.js');
add.add();