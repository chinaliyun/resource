> ES6之前存在6种原始数据类型,分别是`String, Number, Boolean, Object, undefined, null`,ES6中新增了一种新的原始数据类型`Symbol`;
Symbol类型数据通过`Symbol`函数生成，由于他是原始数据类型，因此不能使用New关键字来声明
```
var a = Symbol();
```

Symbol数据可以显式转为字符串和布尔值，却不能转为数值
```
var a = Symbol('foo');
String(a); // "Symbol(foo)"
a.toString(); // "Symbol(foo)"
Boolean(a)	//true

a+2	// Typeerror
a+' string'	// TypeError ： can't covert symbol to string
```

Symbol函数的参数仅仅是为了symbol实例的描述，即便是参数相同，生成的实例也是独一无二的
```
var a = Symbol();
var b = Symbol();

a===b	// false

```
Symbol()和Symbol.for()的区别
-
除了`Symbol()`之外，还有一个`Symbol.for()`也可以生成Symbol对象。

`Symbol.for()`生成的对象，会登记在全局，以便`Symbol.keyFor()`来查询对象的`key`, `Symbol()`函数生成的对象，则不会进行登记。另外`Symbol.for()`会在生成对象前先检查给定的`key`是否已经存在，只有在不存在的时候，才会返回新的对象，而`Symbol()`函数则每次都会生成一个新的对象
```
// demo2.js
global[Symbol.for('foo')] = 1;
global[Symbol('bar')] = 1;

// demo1.js
global[Symbol.for('foo')];   //  1
global[Symbol.for('foo')] = 2;
global[Symbol.for('foo')];   //  2

global[Symbol('bar')];  // undefined
```
上面例子中通过foo和bar生成的Symbol对象就是因为`Symbol()`方法生成的对象没有在全局注册，从而导致`demo1.js`中取不到他的值，

获取对象的Symbol属性
-
当使用Symbol作为属性名的时候，不管是`for...in..`还是`for..of..`还是`getOwnProperty`还是`Object.keys()`都拿不到这个属性了
```
let a = Symbol.for('a');
let b = Symbol.for('b');

cosnt obj = {
	[a]: 1,
	[b]: 2
}
for( key in obj){
	console.log(key) // 无输出
}
```
要想获得对象的Symbol属性名，可以使用`Reflect.ownkeys()`和`getOwnPropertySymbols`方法。其中`Reflect.ownkeys()`会获取对象的所有属性名，包括常规属性名和Symbol属性名，而`getOwnPropertySymbols`则会获取所有的Symbol属性名
```
let a = Symbol.for('a');
let b = Symbol.for('b');

const obj = {
	[a]: 1,
	[b]: 2
}
console.log(Object.getOwnPropertySymbols(obj))  // [ Symbol(a), Symbol(b) ]

```







