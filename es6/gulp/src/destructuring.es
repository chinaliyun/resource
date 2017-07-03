 var options = {
 	name: 'zhangsan',
 	age: 14,
 	sex: 'male'
 };

 let {name,age} = options;

 // let {name, ...other} = options;

 console.log(name,age)


 var person = ['zhangsan','lisi','wangwu'];
 let [a,b] = person;
 console.log(a,b)

 function add({name,age,height=30}){
 	console.log(name,age,height)
 }


 add(options);