"use strict";

var _demo = require("./demo1.js");

require("babel-polyfill");
require("babel-core/register");

var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
var arr2 = Array.from(arrayLike);
console.log(arr2);

(0, _demo.add)();