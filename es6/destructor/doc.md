> ES6提供了一中新的语法，可以快速在声明变量的同时，从数组或者对象中提取内容进行赋值，这种方式被称作是解构。极大的提高了工作效率

数组的结构赋值
-
先看一个简单的例子
```js
let [a,b,c] = [1,2,3];
a; // 1
b; // 2
c; // 3
```
这么一个简单的语句，我们就完成了对变量`a,b,c`的声明和赋值。再看一个复杂的
```js
[a,[b,c]] = [1,[2,3]];
a; // 1
b; // 2
c; // 3
```
只要等号左右的结构相同，就可以对左边的变量进行赋值。

解构过程中，允许等号左右不对称，如果解构不成功，变量的值会成为undefined，且不会报错
```js
let [a,b,c] = [1,2];
a; // 1
b; // 2
c; // undefined
```

实际上，在数组解构中，等号右边的对象只要是类数组对象就可以完成解构，也就是说，只要等号右边的对象具有iterator接口，就可以完成解构，因此我们常见的类数组对象nodelist、Set数据结构、Map数据结构，以及能够返回遍历器对象的generator函数、`Object.entries()`、`Obejct.keys()`、`Obect.values()`所返回的对象都可以用来完成`数组解构`

因此，所有不具备iterator接口的对象用来做数组解构的时候，程序都会报错，比如数字、布尔值、undefined、null以及没有人为部署iterator(且部署了没有返回遍历器对象)的对象。

数组解构的时候是允许指定默认值的,当等号右边与等号右边元素数量不对等的情况下，会使用默认值
```js
[a=1,b=2] = [3]
a;  // 3
b;  // 2
```
当等号右边的元素，`严格`等于undefined的时候，也会使用默认值
```js
[a=1,b=2] = [undefiend, undefined]
a;  // 1
b;  // 2
```

对象的解构赋值
-
在对象上使用解构赋，先看一个简单的案例
```js
let {a,b,c} = {a: 1, b: 2, d: 3};
a; // 1
b; // 2
d; // undefined
```
可以发现，对象解构的时候，变量必须与属性同名，才能完成正确的解构,在等号右边没有发现相同属性名的时候，变量值为undefined，我们知道ES6中对象有一种简明的写法如下：
```js
let a = 1, b = 2, c = 3;
let obj = {
	a,
	b,
	c
}
```
所以我们前面的对象解构语句实际上等同于
```js
let {a: a, b: c, c: c} = {a: 1, b: 2, d: 3};
```
由此看来，实际上被赋值的变量上是等号左边的属性值，而不是属性名，所以当等号左边的属性值与属性名不同的时候，被赋值的也将是等号左边的属性值
```js
let {a: e, b: f, c: g} = {a: 1, b: 2, d: 3};
a; // a is  not defined
b; // a is  not defined
c; // a is  not defined
e; // 1
f; // 2
g; // undefined
```
嵌套的对象也可以通过解构赋值
```js
let obj = {
	name: {
		age: 18
	}
};
let {
	name: data
} = obj;

name; // name is not defined
data; // {age: 18}


let {
	name: {
		age,
	}
} = obj;

name; // name is not defined
age;  // 18
data; // 18

let {
	name: {
		age: data
	}
} = obj;

name; // name is not defined
age;  // age is not defiend
data; // 18
```

对字符串进行嵌套赋值
-
作为类数组的字符串，也可以完成解构赋值
```js
let [a,b,c,d,e] = 'zhang';

a; 	// z
b; 	// h
c; 	// a
d; 	// n
e; 	// g
```
类数组对象中有都有一个length属性，因此也可以完成对象赋值
```js
let {length} = 'zhang';

length; // 	5
```

对象结构也可以使用默认值，当等号右边属性值严格等于undefined的时候，等号左边会使用默认值
```js
let {a=1, b=2, c=3} = {a: undefined, b: null};
a;  // 1
b;  // null
c;  // 3
```
上面的例子中，等号右边b的值null不严格等于undefined，因此会把null直接赋值给等号左边的b。等号右边没有属性名c，因此等号左边也会使用c的默认值


要注意的地方
-
ES6中新增了let、const两种声明变量的语法，在使用解构赋值的时候，同样要遵循let、const的规则

> 不允许重复声明,程序会直接报错`SyntaxError: Identifier 'a' has already been declared`
```js
let a;
let {a} = {a: 1};
console.log(a)
```

> const声明的变量，不允许修改值,程序会直接报错`Assignment to constant variable.`
```js
const a = 2;
[a] = [2];
```

> 变量声明后，才使用对象解构赋值的时候，一定要记得两边加上括号，否则程序会把大括号之间的部分当做代码块去执行，照样会报错
```js
let a,b
{a, b} = {a: 1, b: 2};  	//   Unexpected token =
({a, b} = {a: 1, b: 2})  	//  可以正确解构
```

> 当对象解构等号右边是数字和字符串的时候，会先被转成对象再进行解构
```js
let {toString: s} = 12;
console.log(s.call('zhangsan'))   //  'zhangsan'
```

在函数中使用解构赋值
-
解构赋值的出现，更便于函数中传参以及使用默认值的效率，在解构赋值出现之前，我们设置默认值的方式是这样的：
```js
function add(a){
	let name = a || 'zhanagsan'
}
add()
```
解构赋值出现之后，我们就可以把默认值写进函数的形参里面
```js
function add([a=3]){
	console.log(a)
}
add(4);  			// 4
add();  			// 3
add(undefined);  	// 3
add(null); 			// null
```
上面的例子中符合了“只有解构值严格等于undefined的时候才会使用默认值”的规则。对象解构也是如此
```js
function add({a=3}){
	console.log(a)
}
add({a: 4});  				// 4
add({a});  					// 3
add({a: null}); 			// null
```

常见的解构赋值用处
-
除了在函数中， 解构赋值还用于很多地方可以提高工作效率，比如快速获取函数的返回值
```js
function add(){
	return {
		name: 'zhangsan',
		age: '18',
		height： '180'
	}
}

let {name, age} = add();

name; // 'zhangsan'
age;  // '18'
```
拿到接口返回的数据，并设置默认值
```js
var data = {
	name: 'zhangsan',
	age: '18',
	height： '180'
};

let {
	name = 'lisi', 
	age = 12
	} = data;

name; // 'zhangsan'
age;  // '18'
```