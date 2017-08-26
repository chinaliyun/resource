'use strict';

require('babel-polyfill');
(function (item) {
  return item + 1;
});
var arr = ['zhangsan', 'lisi', 'wanwu'];

console.log(Array.from(arr));