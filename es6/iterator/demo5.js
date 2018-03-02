// var obj = {};
// obj[Symbol.iterator] = function* (){
//   yield 1;
//   yield 2;
//   yield 3;
// }
// for(item of obj){
//   console.log(item)
// }
// var a = 'yun';
// for(item of a){
//   console.log(item)
// }

// var a = new String('yun');
// a[Symbol.iterator] = function* (){
//   yield 'l'
//   yield 'i'
// }
// for( item of a){
//   console.log(item)
// }

var a = new Map();
a.set('name','zhangsan')
a.set('age','13')
a.set('height','180')
for([name,value] of a){
  console.log(value)
}

