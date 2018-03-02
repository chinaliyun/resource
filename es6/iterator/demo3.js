var obj = {
  0: 'zhangsan',
  1: 'lisi',
  2: 'wangwu',
  length: 3
};
obj[Symbol.iterator] = Array.prototype[Symbol.iterator]
for(item of obj){
  console.log(item)
}

var obj = {
  name1: 'zhangsan',
  name2: 'lisi',
  name3: 'wangwu',
  length: 3
};
obj[Symbol.iterator] = Array.prototype[Symbol.iterator]
for(item of obj){
  console.log(item)
}